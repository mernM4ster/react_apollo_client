import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

import { fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

export default function IntroSection () {
    return (
        <section className="section-1">
            <OwlCarousel adClass="home-slider show-nav-hover" options={ {
                nav: true,
                navText: [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ]
            } }>
                <div className="banner">
                    <LazyLoadImage
                        alt="slider image"
                        src="images/home/slider/slide-1.jpg"
                    />
                    <div className="banner-layer banner-layer-middle">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 }>
                            <h6>NEW ARRIVALS!</h6>
                        </Reveal>
                        <Reveal keyframes={ fadeInRightShorter } delay={ 450 }>
                            <img src="images/home/banners/banner-text-1.png"
                                className="w-auto" width="503" height="113" alt="banner-text" />
                        </Reveal>
                        <Reveal keyframes={ fadeInRightShorter } delay={ 700 }>
                            <h3>70% OFF</h3>
                        </Reveal>
                        <Reveal keyframes={ fadeInRightShorter } delay={ 950 }>
                            <ALink href="/shop" className="btn btn-xl" role="button">Shop
								Now<i className="fas fa-chevron-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
                <div className="banner text-right">
                    <LazyLoadImage
                        alt="slider image"
                        src="images/home/slider/slide-2.jpg"
                    />
                    <div className="banner-layer banner-layer-middle content-right">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 }>
                            <h6>NEW ARRIVALS!</h6>
                        </Reveal>
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 450 }>
                            <img src="images/home/banners/banner-text-2.png"
                                className="w-auto ml-auto" width="503" height="113" alt="banner-text" />
                        </Reveal>
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 700 }>
                            <h3>50% OFF</h3>
                        </Reveal>
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 950 }>
                            <ALink href="/shop" className="btn btn-xl" role="button">Shop
								Now<i className="fas fa-chevron-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </OwlCarousel>
        </section >
    )
}