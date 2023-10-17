import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_PRODUCT } from '../../../server/queries';

// Import Custom Component
import ALink from '../../../components/common/ALink';
import ProductMediaOne from '../../../components/partials/product/media/product-media-one';
import ProductDetailOne from '../../../components/partials/product/details/product-detail-one';
import SingleTabOne from '../../../components/partials/product/tabs/single-tab-one';
import RelatedProducts from '../../../components/partials/product/widgets/related-products';
import ProductWidgetContainer from '../../../components/partials/product/widgets/product-widget-container';
import ProductSidebarTwo from '../../../components/partials/product/sidebars/sidebar-two';

function ProductDefault () {
    if ( !useRouter().query.slug ) return (
        <div className="loading-overlay">
            <div className="bounce-loader">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );
    const slug = useRouter().query.slug;
    const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
    const product = data && data.product.data;
    const related = data && data.product.related;

    if ( error ) {
        return useRouter().push( '/pages/404' );
    }

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav sticky-header desktop-sticky">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">home</ALink></li>
                        <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                        <li className="breadcrumb-item">
                            {
                                product && product.categories.map( ( item, index ) => (
                                    <React.Fragment key={ `category-${index}` }>
                                        <ALink href={ { pathname: "/shop", query: { category: item.slug } } }>{ item.name }</ALink>
                                        { index < product.categories.length - 1 ? ',' : '' }
                                    </React.Fragment>
                                ) )
                            }
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{ product && product.name }</li>
                    </ol>
                </div>
            </nav>

            <div className={ `container skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
                <div className="row">
                    <div className="col-xl-9 col-lg-8 main-content pb-2">
                        <div className={ `product-single-container product-single-default` }>
                            <div className="row">
                                <ProductMediaOne adClass="col-xl-7 col-lg-12 col-md-6" product={ product } />

                                <ProductDetailOne
                                    adClass="col-xl-5 col-lg-12 col-md-6"
                                    product={ product }
                                    prev={ product && data.product.prev }
                                    next={ product && data.product.next }
                                />
                            </div>
                        </div>

                        <SingleTabOne product={ product } />
                    </div>
                    <ProductSidebarTwo />
                </div>

                <RelatedProducts
                    adClass="mb-1"
                    loading={ loading }
                    products={ related }
                />
                <hr className="mt-0 mb-5" />
            </div>

            <ProductWidgetContainer />
        </main >
    )
}

export default ProductDefault ;