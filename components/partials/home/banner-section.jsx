import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';

import { fadeIn } from '../../../utils/data/keyframes'

export default function BannerSection () {
    return (
        <section className="section-4 container">
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <div className="newsletter-section home-banner bg-img">
                    <div className="banner media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/newsletter_bg.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="banner-layer banner-layer-middle text-right">
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
            </Reveal>
        </section>
    )
}