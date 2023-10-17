import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as WishlistAction } from "../../../store/wishlist";
import { actions as CartAction } from "../../../store/cart";
import { actions as ModalAction } from "../../../store/modal";

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { productCountDown } from '../../../utils';

function ProductFive(props) {
    const router = useRouter();
    const { adClass = "", link = "default", product, gridheight } = props;
    const [attrs, setAttrs] = useState({ sizes: [], colors: [] });

    useEffect(() => {
        productCountDown();
    })

    useEffect(() => {
        if (product) {
            let attributes = product.variants.reduce((acc, cur) => {
                cur.size && !acc.sizes.find(size => size.size === cur.size.size) && acc.sizes.push(cur.size);
                cur.color && !acc.colors.find(color => color.name === cur.color.name) && acc.colors.push(cur.color);
                return acc;
            }, { sizes: [], colors: [] });
            setAttrs(attributes);
        }
    }, [product])

    function isSale() {
        return product.price[0] !== product.price[1] && product.variants.length === 0 ?
            '-' + (100 * (product.price[1] - product.price[0]) / product.price[1]).toFixed(0) + '%'
            :
            product.variants.find(variant => variant.sale_price) ? "Sale" : false;
    }

    function isInWishlist() {
        return product && props.wishlist.findIndex(item => item.slug === product.slug) > -1;
    }

    function onWishlistClick(e) {
        e.preventDefault();
        if (!isInWishlist()) {
            let target = e.currentTarget;
            target.classList.add("load-more-overlay");
            target.classList.add("loading");

            setTimeout(() => {
                target.classList.remove('load-more-overlay');
                target.classList.remove('loading');
                props.addToWishList(product);
            }, 1000);
        } else {
            router.push('/pages/wishlist');
        }
    }

    function onAddCartClick(e) {
        e.preventDefault();
        props.addToCart(product);
    }

    function onQuickViewClick(e) {
        e.preventDefault();
        props.showQuickView(product.slug);
    }

    return (
        <div className={`product-default inner-quickview inner-icon inner-icon-inline overlay-dark ${gridheight === '1' ? 'grid-height-1' : 'grid-height-2'} media-with-lazy ${adClass}`}>
            <figure>
                <ALink href={`/product/${link}/${product.slug}`}>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[0].url}
                        threshold={500}
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[1].url}
                                threshold={500}
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>

                <div className="label-group">
                    {product.is_hot ? <div className="product-label label-hot">HOT</div> : ''}

                    {isSale() ? <div className="product-label label-sale">{isSale()}</div> : ''}
                </div>

                <div className="btn-icon-group">
                    <a href="#" className={`btn-icon btn-icon-wish ${isInWishlist() ? 'added-wishlist' : ''}`} onClick={onWishlistClick} title={`${isInWishlist() === true ? 'Go to Wishlist' : 'Add to Wishlist'}`}><i className="icon-wishlist-2"></i></a>

                    {
                        product.variants.length > 0 ?
                            <ALink href={`/product/default/${product.slug}`} className="btn-icon btn-add-cart"><i
                                className="fa fa-arrow-right"></i></ALink>
                            : <a href="#" className="btn-icon btn-add-cart product-type-simple" title="Add To Cart" onClick={onAddCartClick}><i
                                className="icon-shopping-cart"></i></a>
                    }
                </div>

                <a href="#" className="btn-quickview" title="Quick View" onClick={onQuickViewClick}>Quick View</a>
            </figure>

            <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                        {
                            product.categories ?
                                product.categories.map((item, index) => (
                                    <React.Fragment key={item.slug + '-' + index}>
                                        <ALink href={{ pathname: '/shop', query: { category: item.slug } }}>
                                            {item.name}
                                        </ALink>
                                        {index < product.categories.length - 1 ? ', ' : ""}
                                    </React.Fragment>
                                )) : ""
                        }
                    </div>

                </div>

                <h3 className="product-title">
                    <ALink href={`/product/default/${product.slug}`}>{product.name}</ALink>
                </h3>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={{ width: 20 * product.ratings + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{product.ratings.toFixed(2)}</span>
                    </div>
                </div>

                <div className="price-box">
                    {
                        product.price[0] == product.price[1] ?
                            <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                            : product.variants.length > 0 ?
                                <span className="product-price">{'$' + product.price[0].toFixed(2)} &ndash; {'$' + product.price[1].toFixed(2)}</span>
                                : <>
                                    <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                                </>
                    }
                </div>
                {
                    product.variants.length > 0 ?
                        <div className="product-filters-container">
                            {
                                attrs.colors.length > 0 ?
                                    <div className="product-single-filter d-flex align-items-center"><label>Color:</label>
                                        <ul className={`config-size-list config-color-list config-filter-list ${attrs.colors[0].thumb ? 'config-img-list' : ''}`}>
                                            {
                                                attrs.colors.map((item, index) => (
                                                    <li key={`filter-color-${index}`} className={`${item.name === color ? 'active' : ''} ${isDisabled('color', item.name) ? 'disabled' : ''}`}>
                                                        {
                                                            item.thumb ?
                                                                <a href="#" className="filter-thumb p-0" onClick={(e) => selectColor(item.name, e)}>
                                                                    <LazyLoadImage
                                                                        src={process.env.NEXT_PUBLIC_ASSET_URI + item.thumb.url}
                                                                        alt='product thumb'
                                                                        width={item.thumb.width}
                                                                        height={item.thumb.height}
                                                                    />
                                                                </a>
                                                                :
                                                                <a href="#" className="filter-color border-0"
                                                                    style={{ backgroundColor: item.color }} onClick={(e) => selectColor(item.name, e)}></a>
                                                        }</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    : ''
                            }

                            {
                                attrs.sizes.length > 0 ?
                                    <div className="product-single-filter d-flex align-items-center">
                                        <ul className={`config-size-list  ${attrs.sizes[0].thumb ? 'config-img-list' : ''}`}>
                                            {
                                                attrs.sizes.map((item, index) => (
                                                    <li key={`filter-size-${index}`} className={`${item.size === size ? 'active' : ''} ${isDisabled('size', item.size) ? 'disabled' : ''}`}>
                                                        {
                                                            item.thumb ?
                                                                <a href="#" className="filter-thumb p-0" onClick={(e) => selectSize(item.size, e)}>
                                                                    <LazyLoadImage
                                                                        src={process.env.NEXT_PUBLIC_ASSET_URI + item.thumb.url}
                                                                        alt='product thumb'
                                                                        width={item.thumb.width}
                                                                        height={item.thumb.height}
                                                                    />
                                                                </a>
                                                                :
                                                                <a href="#" className="d-flex align-items-center justify-content-center" onClick={(e) => selectSize(item.size, e)}>{item.name}</a>
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    : ''
                            }
                        </div>
                        : ''
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect(mapStateToProps, { ...WishlistAction, ...CartAction, ...ModalAction })(React.memo(ProductFive));