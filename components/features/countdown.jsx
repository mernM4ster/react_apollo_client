import { useEffect } from 'react';

// Import Utils
import { productCountDown } from '../../utils';

export default function CountDown ( props ) {
    const { product, type } = props;

    useEffect( () => {
        productCountDown();
    } )

    return (
        <>
            {
                type == 1 ?
                    <div className="product-countdown-container deal-countdown position-static">
                        <span className="product-countdown-title">offer ends in:</span>
                        <div className="product-countdown countdown-compact" data-until={ `${product.until}` } data-compact="true">
                            <span className="countdown-section days">
                                <span className="countdown-amount">237</span>
                                <span className="countdown-period">DAYs</span>
                            </span>

                            <span className="countdown-section hours">
                                <span className="countdown-amount">20</span>
                                <span className="countdown-period">HOURS</span>
                            </span>

                            <span className="countdown-section minutes">
                                <span className="countdown-amount">26</span>
                                <span className="countdown-period">MINUTES</span>
                            </span>
                            <span className="countdown-section seconds">
                                <span className="countdown-amount">06</span>
                                <span className="countdown-period">SECONDS</span>
                            </span>
                        </div>
                    </div>
                    :
                    <div className="product-countdown-container">
                        <span className="product-countdown-title">offer ends in:</span>

                        <div className="product-countdown countdown-compact" data-until={ `${product.until}` } data-compact="true">
                            <span className="countdown-section days">
                                <span className="countdown-amount mr-1">237 </span>
                                <span className="countdown-period mr-1">DAYs,</span>
                            </span>

                            <span className="countdown-section hours">
                                <span className="countdown-amount">20:</span>
                            </span>

                            <span className="countdown-section minutes">
                                <span className="countdown-amount">26:</span>
                            </span>

                            <span className="countdown-section seconds">
                                <span className="countdown-amount">06</span>
                            </span>
                        </div>
                    </div>
            }
        </>
    );
}