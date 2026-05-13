export default function Header() {
    return (
        <header data-add-bg="bg-dark-1" className="header bg-green js-header" data-x="header" data-x-toggle="is-menu-opened">
            <div data-anim="fade" className="header__container px-30 sm:px-20">
                <div className="row justify-between items-center">

                    <div className="col-auto">
                        <div className="d-flex items-center">
                            {/* <a href="/" className="header-logo mr-20" data-x="header-logo" data-x-toggle="is-logo-dark">
                                <img src="/img/general/logo-light.svg" alt="logo icon" />
                                <img src="/img/general/logo-dark.svg" alt="logo icon" />
                            </a> */}


                            <div className="header-menu " data-x="mobile-menu" data-x-toggle="is-menu-active">
                                <div className="mobile-overlay"></div>

                                <div className="header-menu__content">
                                    <div className="mobile-bg js-mobile-bg"></div>

                                    <div className="menu js-navList">
                                        <ul className="menu__nav text-white -is-active">

                                            <li>
                                                <a data-barba="true" href="/">
                                                    <span className="mr-10">Home</span>
                                                </a>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a data-barba="true" href="#categories">
                                                    <span className="mr-10">Categories</span>
                                                    <i className="icon icon-chevron-sm-down"></i>
                                                </a>


                                                <ul className="subnav">
                                                    <li className="subnav__backBtn js-nav-list-back">
                                                        <a href="#" onClick={(e) => e.preventDefault()}><i className="icon icon-chevron-sm-down"></i> Categories</a>
                                                    </li>

                                                    <li><a href="/companies?category=Superhero">Superhero</a></li>
                                                    <li><a href="/companies?category=Princess">Princess</a></li>
                                                    <li><a href="/companies?category=Mascot">Mascot</a></li>
                                                    <li><a href="/companies?category=Party%20Rentals">Party Rentals</a></li>

                                                </ul>

                                            </li>

                                        </ul>
                                    </div>

                                    <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="col-auto">
                        <div className="d-flex items-center">


                            <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white" data-x="header-mobile-icons" data-x-toggle="text-white">

                                <div><button className="d-flex items-center icon-menu text-inherit text-20" data-x-click="html, header, header-logo, header-mobile-icons, mobile-menu"></button></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
