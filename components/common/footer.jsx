import React from 'react';

import ALink from "./ALink";

import FeatureBoxSection from '../../components/partials/home/featurebox-section'

function Footer () {
    return (
        <footer className="footer">
            <div className="container overflow-hidden">
                <FeatureBoxSection />
            </div>

            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="widget">
                                <h4 className="widget-title font-weight-bold">Contact Info</h4>

                                <ul className="contact-info">
                                    <li>
                                        <span className="contact-info-label">Address:</span>1234 Street Name, City, England
									</li>
                                    <li>
                                        <span className="contact-info-label">Phone:</span><ALink href="tel:">(123)
											456-7890</ALink>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email:</span> <ALink
                                            href="mailto:mail@example.com">mail@example.com</ALink>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Working Days/Hours:</span>
										Mon - Sun / 9:00 AM - 8:00 PM
									</li>
                                </ul>
                                <div className="social-icons mb-6 mb-md-0">
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"
                                        title="Facebook"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"
                                        title="Twitter"></ALink>
                                    <ALink href="#" className="social-icon social-linkedin icon-instagram"
                                        title="Linkedin"></ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-8">
                            <div className="widget widget-newsletter mb-0">
                                <h4 className="widget-title">Subscribe newsletter</h4>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 mb-1">
                                        <p className="mb-0">Get all the latest information on Events, Sales and Offers. Sign
                                        up for newsletter today.</p>
                                    </div>

                                    <div className="col-lg-6 col-md-12 mb-1">
                                        <form action="#" className="d-flex mb-0 w-100">
                                            <input type="email" className="form-control mb-0" placeholder="Email Address"
                                                required />
                                            <input type="submit" className="btn btn-primary shadow-none" value="Subscribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>

                                        <div className="links link-parts row mb-0">
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li><ALink href="/pages/about-us">About us</ALink></li>
                                                <li><ALink href="/pages/contact-us">Contact us</ALink></li>
                                                <li><ALink href="/pages/account">My account</ALink></li>
                                            </ul>
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li><ALink href="#">Order history</ALink></li>
                                                <li><ALink href="#">Advanced search</ALink></li>
                                                <li><ALink href="/pages/login">Login</ALink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-7">
                                    <div className="widget">
                                        <h4 className="widget-title">About Us</h4>

                                        <div className="links link-parts row mb-0">
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li><ALink href="#">Super Fast React Template</ALink></li>
                                                <li><ALink href="#">1st Fully working Ajax Theme</ALink></li>
                                                <li><ALink href="#">36 Unique Shop Layouts</ALink></li>
                                            </ul>
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                                <li><ALink href="#">Mobile & Retina Optimized</ALink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-copyright py-3 pr-sm-4 pr-0 mb-0">Porto eCommerce. © 2021. All Rights Reserved</p>

                    <img src="images/home/payments.png" alt="payment methods" className="footer-payments py-3" />
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );