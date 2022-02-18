import * as React from "react";
import { Link } from "gatsby";

const HeaderNavigation = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-dark" data-overlay data-sticky="top">
                <div className="container">
                    <a className="navbar-brand fade-page" href="/">
                        <img src="assets/img/logo_black.svg" style={{width:'32px'}} alt="Reesykle Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <img className="icon navbar-toggler-open" src="assets/img/icons/interface/menu.svg"
                             alt="menu interface icon" data-inject-svg/>
                        <img className="icon navbar-toggler-close" src="assets/img/icons/interface/cross.svg"
                             alt="cross interface icon" data-inject-svg/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <div className="py-2 py-lg-0">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a href="#products" data-smooth-scroll
                                       className="text-dark nav-link dropdown-toggle">Products</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#tokenomics" data-smooth-scroll
                                       className="text-dark nav-link dropdown-toggle">Tokenomics</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#team" data-smooth-scroll
                                       className="text-dark nav-link dropdown-toggle">Team</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#white-paper" data-smooth-scroll
                                       className="text-dark nav-link dropdown-toggle">White Paper</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#roadmap" data-smooth-scroll
                                       className="text-dark nav-link dropdown-toggle">Roadmap</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#how-to-buy" data-smooth-scroll
                                       className="text-dark nav-link dropdown-toggle">Buy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderNavigation;