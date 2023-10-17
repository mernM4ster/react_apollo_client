import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';

export default function ShopBanner(props) {
    const { hasgap } = props;

    return (
        <div className="container">
            <div className={`newsletter-section shop-banner bg-img ${hasgap ? 'pt-0 mb-2' : ''}`}>
                <div className="banner media-with-lazy">
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/newsletter_bg.jpg"
                            threshold={500}
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                    <div className="banner-layer banner-layer-middle text-right pt-4 pt-lg-0">
                        <h4>Sunglasses, Bags, Dresses and much more...</h4>
                        <h3>
                            <b className="text-white position-relative">BIG SALE</b>
								ALL NEW FASHION BRANDS ITEMS UP TO 70% OFF
							</h3>
                        <ALink href="/shop" className="btn btn-xl" role="button">Shop Now<i
                            className="fas fa-chevron-right"></i></ALink>
                    </div>
                </div>
            </div>
        </div>
    )
}