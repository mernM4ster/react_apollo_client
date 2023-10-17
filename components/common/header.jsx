// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import VerticalMenu from "./partials/vertical-menu";
import SearchForm from "./partials/search-form";

export default function Header ( { adClass = '' } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-wrapper">
                <div className="header-top sticky-header">
                    <div className="container">
                        <div className="header-left header-dropdowns">
                            <div className="header-dropdown d-none d-lg-block">
                                <ALink href="#" className="pl-0">ENG</ALink>
                                <div className="header-menu">
                                    <ul>
                                        <li><ALink href="#">ENG</ALink></li>
                                        <li><ALink href="#">FRA</ALink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-dropdown">
                                <ALink href="#" className="pt-0">USD</ALink>
                                <div className="header-menu">
                                    <ul>
                                        <li><ALink href="#">EUR</ALink></li>
                                        <li><ALink href="#">USD</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <button className="mobile-menu-toggler d-lg-none d-block" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars text-white"></i>
                        </button>

                        <ALink href="/" className="logo d-block d-lg-none">
                            <img src="images/home/logo.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>

                        <div className="header-right">
                            <ALink href="/pages/login" className="header-icon header-icon-user d-lg-block d-none"><i
                                className="icon-user-2"></i></ALink>

                            <SearchForm sticky={ true } />

                            <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                            <CartMenu />

                        </div>
                    </div>
                </div>

                <div className="header-middle d-lg-block d-none">
                    <div className="container d-block">
                        <div className="header-left d-none d-lg-flex justify-content-center">
                            <button className="mobile-menu-toggler d-lg-none d-block" type="button" onClick={ openMobileMenu }>
                                <i className="fa fa-bars"></i>
                            </button>

                            <ALink href="/" className="logo">
                                <img src="images/home/logo.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                            </ALink>
                        </div>

                        <div className="header-right d-lg-block d-flex">
                            <SearchForm />

                            <VerticalMenu />

                        </div>
                    </div>
                </div>

                <div className="header-bottom d-none d-lg-block text-align-center position-absolute">
                    <div className="container d-block text-center">
                        <div className="header-left d-block">
                            <h6 className="mb-0">CALL US NOW</h6>
                        </div>

                        <div className="header-right d-block pr-0">
                            <div className="header-contact">
                                <a href="tel:#" className="text-white">+123 456 7890</a>
                            </div>
                        </div>
                    </div>
                    <div className="social-icons text-center">
                        <ALink href="#" className="social-icon social-facebook icon-facebook" ></ALink>
                        <ALink href="#" className="social-icon social-twitter icon-twitter" ></ALink>
                        <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                    </div>
                </div>
            </div>
        </header >
    )
}