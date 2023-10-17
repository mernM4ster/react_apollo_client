import React, { useState } from 'react';
import LightBox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";
import OwlCarousel from "../../components/features/owl-carousel";

import { brandSlider } from "../../utils/data/slider"

export default function AboutUs () {
    const [ openLB, setOpenLB ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    const images = [ 'images/home/team/team1.jpg', 'images/home/team/team2.jpg', 'images/home/team/team3.jpg', 'images/home/team/team4.jpg' ];

    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % images.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + images.length - 1 ) % images.length );
    }

    function openLightBox ( e, index ) {
        setOpenLB( true );
        setPhotoIndex( index );
    }

    function closeLightBox () {
        setOpenLB( false );
    }

    return (
        <main className="main about">
            <div className="page-header page-header-bg text-left"
                style={ { background: '50%/cover #D4E1EA url(images/home/page-header-bg.jpg)' } }>
                <div className="container">
                    <h1 className="font2">ABOUT US</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" className="breadcrumb-nav sticky-header p-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/"><i className="icon-home"></i></ALink></li>
                        <li className="breadcrumb-item"><ALink href="#">Pages</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>

            <div className="about-section">
                <div className="container">
                    <h2 className="subtitle font4 mb-2">ABOUT US</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus.</p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only.</p>
                </div>
            </div>

            <hr className="mt-0 mb-5" />

            <div className="container history-section">
                <h2 className="subtitle font4 mb-2">OUR HISTORY</h2>
                <OwlCarousel adClass="owl-theme dots-simple" options={ {
                    dots: true,
                    margin: 30,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 2
                        }
                    }
                } }>
                    <div className="history-info">
                        <h2 className="subtitle font2 mb-3">2016</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley.</p>
                    </div>

                    <div className="history-info">
                        <h2 className="subtitle font2 mb-3">2017</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley.</p>
                    </div>

                    <div className="history-info">
                        <h2 className="subtitle font2 mb-3">2018</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley.</p>
                    </div>

                    <div className="history-info">
                        <h2 className="subtitle font2 mb-3">2019</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley.</p>
                    </div>

                    <div className="history-info">
                        <h2 className="subtitle font2 mb-3">2021</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley.</p>
                    </div>
                </OwlCarousel>
            </div>

            <hr className="mt-0 mb-5" />

            <div className="team-section container">
                <h2 className="subtitle font4 mb-2">OUR TEAM</h2>

                <div className="row justify-content-center">
                    <div className="col-md-3 col-6">
                        <div className="team-info mb-3">
                            <figure>
                                <ALink href="#">
                                    <LazyLoadImage
                                        className="w-100"
                                        src="images/home/team/team1.jpg"
                                        alt="Team"
                                        width="100%"
                                        height="auto" />
                                </ALink>

                                <span className="prod-full-screen" onClick={ e => { openLightBox( e, 0 ); } }>
                                    <i className="fas fa-search"></i>
                                </span>
                            </figure>

                            <h5 className="team-name text-center mb-0">John Doe</h5>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="team-info mb-3">
                            <figure>
                                <ALink href="#">
                                    <LazyLoadImage
                                        className="w-100"
                                        src="images/home/team/team2.jpg"
                                        alt="Team"
                                        width="100%"
                                        height="auto" />
                                </ALink>

                                <span className="prod-full-screen" onClick={ e => { openLightBox( e, 1 ); } }>
                                    <i className="fas fa-search"></i>
                                </span>
                            </figure>

                            <h5 className="team-name text-center mb-0">John Doe</h5>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="team-info mb-3">
                            <figure>
                                <ALink href="#">
                                    <LazyLoadImage
                                        className="w-100"
                                        src="images/home/team/team3.jpg"
                                        alt="Team"
                                        width="100%"
                                        height="auto" />
                                </ALink>

                                <span className="prod-full-screen" onClick={ e => { openLightBox( e, 2 ); } }>
                                    <i className="fas fa-search"></i>
                                </span>
                            </figure>

                            <h5 className="team-name text-center mb-0">John Doe</h5>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="team-info mb-3">
                            <figure>
                                <ALink href="#">
                                    <LazyLoadImage
                                        className="w-100"
                                        src="images/home/team/team4.jpg"
                                        alt="Team"
                                        width="100%"
                                        height="auto" />
                                </ALink>

                                <span className="prod-full-screen" onClick={ e => { openLightBox( e, 3 ); } }>
                                    <i className="fas fa-search"></i>
                                </span>
                            </figure>

                            <h5 className="team-name text-center mb-0">John Doe</h5>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-0 mb-0" />

            <div className="container brands-section">
                <OwlCarousel adClass="brands-slider images-center nav-outer" options={ brandSlider }>
                    <img src="images/home/logoes/logo-1.png" alt="logo" width="245" height="45" />
                    <img src="images/home/logoes/logo-2.png" alt="logo" width="245" height="45" />
                    <img src="images/home/logoes/logo-3.png" alt="logo" width="245" height="45" />
                    <img src="images/home/logoes/logo-4.png" alt="logo" width="245" height="45" />
                    <img src="images/home/logoes/logo-5.png" alt="logo" width="245" height="45" />
                    <img src="images/home/logoes/logo-6.png" alt="logo" width="245" height="45" />
                </OwlCarousel>
            </div>

            {
                openLB && (
                    <LightBox
                        mainSrc={ `${ images[ photoIndex ] }` }
                        prevSrc={ `${ images[ ( photoIndex + images.length - 1 ) % images.length ] }` }
                        nextSrc={ `${ images[ ( photoIndex + 1 ) % images.length ] }` }
                        onCloseRequest={ closeLightBox }
                        onMoveNextRequest={ moveNextPhoto }
                        onMovePrevRequest={ movePrevPhoto }
                    />
                )
            }
        </main >
    )
}