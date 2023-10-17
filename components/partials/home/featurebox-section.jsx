import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection() {
    return (
        <div className="feature-boxes-container">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-box feature-rounded">
                            <i className="sicon-earphones-alt"></i>

                            <div className="feature-box-content">
                                <h3>Customer Support</h3>
                                <h5>Need Assistance?</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
										magna, et dapib.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-box feature-rounded">
                            <i className="sicon-credit-card"></i>

                            <div className="feature-box-content">
                                <h3>SECURED PAYMENT</h3>
                                <h5>Safe &amp; Fast</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
										magna, et dapibus lacus.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-box feature-rounded">
                            <i className="sicon-action-undo"></i>

                            <div className="feature-box-content">
                                <h3>Returns</h3>
                                <h5>Easy &amp; Free</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
										magna, et dapib.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default React.memo(FeatureBoxSection);