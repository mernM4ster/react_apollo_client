import { useEffect } from "react";
import Helmet from "react-helmet";
import { Provider, useStore } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from "../store/index.js";
import Layout from '../components/layout';

import { actions as DemoAction } from "../store/demo";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../server/apollo.js";
import "../public/sass/style.scss";

const App = ({ Component, pageProps }) => {
    const store = useStore();
    const client = createApolloClient();
    useEffect(() => {
        if (store.getState().demo.current !== 10) {
            store.dispatch(DemoAction.refreshStore(10));
        }
    }, [])

    return (
        <ApolloProvider client={client}>
        <Provider store={store}>
            <PersistGate
                persistor={store.__persistor}
                loading={<div className="loading-overlay">
                    <div className="bounce-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>}>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <title>Porto - React eCommerce Template</title>

                    <meta name="keywords" content="React Template" />
                    <meta name="description" content="Porto - React eCommerce Template" />
                    <meta name="author" content="SW-THEMES" />
                </Helmet>

                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider >
        </ApolloProvider>
    )
};

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default wrapper.withRedux(App);
