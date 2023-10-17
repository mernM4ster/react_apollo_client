import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductFive from '../../features/products/product-five';

import { fadeIn } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { product, loading } = props;

    return (
        <section className="section-2 featured-collection mt-5">
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1500 } triggerOnce>
                <div className="container">
                    <h2 className="section-title">Featured Products</h2>
                    <div className="products-grid">
                        <div className="row">
                            {
                                loading ?
                                    [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                        <div className="skel-pro skel-pro-grid" key={ "prod-default-list" + index }></div>
                                    )
                                    :
                                    <>
                                        <ProductFive product={ product[ 0 ] } adClass="col-xl-5 col-lg-6 col-md-6 first-lazy" />
                                        <ProductFive product={ product[ 1 ] } adClass="col-xl-3 col-lg-6 col-sm-6 second-lazy" />

                                        <div className="col-xl-4 col-12">
                                            <div className="row">
                                                {
                                                    product.slice( 2, 6 ).map( ( item, index ) => (
                                                        <ProductFive product={ item } key={ "propopular-list" + index } adClass="col-6 third-lazy" gridheight='1' />
                                                    ) )
                                                }
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}