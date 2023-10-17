import Reveal from 'react-awesome-reveal';
import { useLazyQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

import { GET_PRODUCTS } from '../../../server/queries';

import { fadeIn } from '../../../utils/data/keyframes'

export default function LoadMoreProduct ( props ) {
    const { product = [], loading, perPage, total } = props;
    const [ loadmore, { data } ] = useLazyQuery( GET_PRODUCTS );
    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        setProducts( product );
    }, [ product ] )

    useEffect( () => {
        if ( data ) {
            setProducts( [ ...products, ...data.products.data ] );
        }
    }, [ data ] )

    function onLoadMoreProducts () {
        loadmore( {
            variables: {
                from: products.length,
                to: products.length + 6
            }
        } )
    }

    return (
        <section className="section-5 product-collection text-center">
            <Reveal keyframes={ fadeIn } delay={ 100 } triggerOnce>
                <div className="container">
                    <h2 className="section-title text-left">POPULAR PRODUCTS</h2>

                    <>
                        <div className="row product-ajax-grid">
                            {
                                loading ?
                                    new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) =>
                                        <div className="col-xl-2 col-md-3 col-sm-4 col-6" key={ `skel-pro-${ index }` }>
                                            <div className="skel-pro skel-pro-grid"></div>
                                        </div>
                                    )
                                    :
                                    products && products.map( ( item, index ) => (
                                        <div className="col-xl-2 col-md-3 col-sm-4 col-6" key={ "product-one" + index }>
                                            <ProductOne product={ item } />
                                        </div>
                                    ) )
                            }
                        </div>
                        {
                            total && products.length < total ?
                                <div className="load-more text-center d-inline-block">
                                    <button className="btn btn-xl loadmore" role="button" onClick={ onLoadMoreProducts }>LOAD MORE...</button>
                                </div>
                                :
                                ''
                        }
                    </>
                </div>
            </Reveal>
        </section>
    );
}