import { useQuery } from "@apollo/client";

// Import Apollo Server and Query
//import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import IntroSection from "../components/partials/home/intro-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import NewCollection from "../components/partials/home/new-collection";
import BannerSection from "../components/partials/home/banner-section";
import LoadMoreProducts from "../components/partials/home/load-more-product";
import createApolloClient from "../server/apollo.js";
import { ApolloProvider } from "@apollo/client";
function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const total = data && data.products.total;
    const client = createApolloClient();
    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
        
            <main className={ `skeleton-body skel-shop-products home ${ loading ? '' : 'loaded' }` }>
                <IntroSection />

                <FeaturedCollection product={ featured } loading={ loading } />

                <NewCollection product={ latest } loading={ loading } />

                <BannerSection />

                <LoadMoreProducts product={ bestSelling } perPage={ 6 } total={ total } loading={ loading } />

            </main>

            <NewsletterModal />
           
        </>
    )
}

export default  Home ;