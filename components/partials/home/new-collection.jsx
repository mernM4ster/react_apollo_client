import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function NewCollection(props) {
    const { product, loading } = props;

    return (
        <section className="section-3 product-collection">
            {/* <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000} triggerOnce> */}
            <div className="container">
                <h2 className="section-title">JUST ARRIVED</h2>
                <OwlCarousel adClass="products-slider owl-theme dots-top" options={productSlider}>
                    {
                        loading ?
                            [0, 1, 2, 3, 4].map((item, index) =>
                                <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                            )
                            :
                            product.map((item, index) => (
                                <ProductOne
                                    product={item} key={"product-one" + index}
                                />
                            ))

                    }
                </OwlCarousel>
            </div>
            {/* </Reveal> */}
        </section >
    );
}