import * as React from 'react';

const Footer = () => {
    return (
        <footer id="footer" style={{padding:'0px'}} className="pb-5 bg-primary-alt text-dark">
            <div className="container">
                <div className="row mb-4 justify-content-center">
                    <div className="col-auto">
                        <img className="icon icon-lg" src="assets/img/logo_black.svg" alt="Reesykle logo"/>
                    </div>
                </div>
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-auto">
                        <ul className="nav text-dark">
                            <li className="nav-item">
                                <a href="https://twitter.com/reesykle" target="_blank" className="nav-link">
                                    <img className="icon bg-primary-3" src="assets/img/icons/social/twitter.svg"
                                         alt="Reesykle Twitter" data-inject-svg/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://reddit.com/r/reesykle" target="_blank" className="nav-link">
                                    <img className="icon bg-primary-3" src="assets/img/icons/social/reddit.svg"
                                         alt="Reesykle Reddit" data-inject-svg/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://t.me/reesykle" target="_blank" className="nav-link">
                                    <img className="icon bg-primary-3" src="assets/img/icons/social/telegram.svg"
                                         alt="Reesykle Telegram" data-inject-svg/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://discord.gg/z89QGEQerf" target="_blank" className="nav-link">
                                    <img className="icon bg-primary-3" src="assets/img/icons/social/discord.svg"
                                         alt="Reesykle Discord" data-inject-svg/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://blog.reesykle.com" target="_blank" className="nav-link">
                                    <img className="icon bg-primary-3" src="assets/img/icons/social/medium.svg"
                                         alt="Reesykle Medium" data-inject-svg/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://github.com/reesykle" target="_blank" className="nav-link">
                                    <img className="icon bg-primary-3" src="assets/img/icons/social/github.svg"
                                         alt="Reesykle Github" data-inject-svg/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://bscscan.com/token/0xefEF90b7349A48452CdaAEa398D600ddB56AEF50"
                                   target="_blank" className="nav-link">
                                    <img className="icon bg-primary-3" src="assets/img/brands/bscscan-logo-light.svg"
                                         alt="Reesykle BSCScan" data-inject-svg/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-xl-10">
                        <small className="text-muted text-dark">Reesykle, for the people, by the people.</small><br/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;