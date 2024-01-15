import './index.css'

import twitterIcon from "./twitter.svg"
import facebookIcon from "./facebookIcon.svg"
import youtubeIcon from "./youtube.svg"
import instagramIcon from "./instagramIcon.svg"
import appStore from "./appStore.svg"
import playStore from "./playStore.svg"
import appGallery from "./appGallery.svg"
import rightArrow from "./chevron.png"

function Footer (){
    return (
        <div>
            <div className="olx-footer-div">
                <div className="olx-footer">
                    <div className="footer-banner-img-div">
                        <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" className="footer-banner"/>
                    </div>
                    <div className="olx-app-info-div">
                        <div className="olx-app-info">
                            <h2 className="olx-app-info-heading">TRY THE OLX APP</h2>
                            <h4 className="olx-app-info-paragraph">Buy, sell and find just about anything using the app on your mobile.</h4>
                        </div>
                        <div className="get-app-div">
                            <div>
                                <h5 className="get-app-heading">GET YOUR APP TODAY</h5>
                            </div>
                            <div className="downloading-platform">
                                <img src={appStore} className="downloading-platform-img"/>
                                <img src={playStore} className="downloading-platform-img"/>
                                <img src={appGallery} className="downloading-platform-img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-footer'>
                    <div className='all-pages-div'>
                        <div className='pages-links'>
                            <ul>
                                <li className="pages-links-li"><h3 className='links-heading'>POPULAR CATEGORIES</h3></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Cars</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Flats for rent</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Mobile Phones</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Jobs</a></li>
                            </ul>
                        </div>
                        <div className='pages-links'>
                            <ul>
                                <li className="pages-links-li"><h3 className='links-heading'>TRENDING SEARCHES</h3></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Bikes</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Watches</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Books</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Dog</a></li>
                            </ul>
                        </div>

                        <div className='pages-links'>
                            <ul>
                                <li className="pages-links-li"><h3 className='links-heading'>ABOUT US</h3></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">About Dubizzle Group</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">OLX Blog</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Contact Us</a></li>
                                <li className="pages-links-li"><a href='#' className="olx-main-footer-link">OLX for Businesses</a></li>
                            </ul>
                        </div>

                        <div className='pages-links'>
                            <li className="pages-links-li"><h3 className='links-heading'>OLX</h3></li>
                            <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Help</a></li>
                            <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Sitemap</a></li>
                            <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Terms of use</a></li>
                            <li className="pages-links-li"><a href='#' className="olx-main-footer-link">Privacy Policy</a></li>
                        </div>

                        <div className='pages-links'>
                            <h3 className='links-heading'>FOLLOW US</h3>
                            <div className='social-media-accounts-div'>
                                <img src={twitterIcon} className='social-media-account'/>
                                <img src={facebookIcon} className='social-media-account'/>
                                <img src={youtubeIcon} className='social-media-account'/>
                                <img src={instagramIcon} className='social-media-account'/>
                            </div>

                            <div className='app-installation-div'>
                                <img src={appStore} className="platform-img"/>
                                <img src={playStore} className="platform-img"/>
                                <img src={appGallery} className="platform-img"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='tablet-main-footer'>
                    <div className='tablet-all-pages-div'>
                        <div className='pages-links'>
                            <ul>
                                <li className="pages-links-li"><h3 className='links-heading'>POPULAR CATEGORIES</h3><img src={rightArrow} className='right-arrow'/></li>
                            </ul>
                        </div>
                        <div className='pages-links'>
                            <ul>
                                <li className="pages-links-li"><h3 className='links-heading'>TRENDING SEARCHES</h3><img src={rightArrow} className='right-arrow'/></li>
                            </ul>
                        </div>

                        <div className='pages-links'>
                            <ul>
                                <li className="pages-links-li"><h3 className='links-heading'>ABOUT US</h3><img src={rightArrow} className='right-arrow'/></li>
                            </ul>
                        </div>

                        <div className='pages-links'>
                            <li className="pages-links-li"><h3 className='links-heading'>OLX</h3><img src={rightArrow} className='right-arrow'/></li>
                        </div>

                        <div className='follow-pages-links'>
                            <h3 className='follow-links-heading'>FOLLOW US</h3>
                            <div className='social-media-accounts-div'>
                                <img src={twitterIcon} className='social-media-account'/>
                                <img src={facebookIcon} className='social-media-account'/>
                                <img src={youtubeIcon} className='social-media-account'/>
                                <img src={instagramIcon} className='social-media-account'/>
                            </div>
                        </div>

                        <div className='pages-links'>
                            <div className='app-installation-div'>
                                <img src={appStore} className="platform-img"/>
                                <img src={playStore} className="platform-img"/>
                                <img src={appGallery} className="platform-img"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='end-footer-div'>
                    <div className='end-footer'>
                        <div className='end-footer-content'>
                            <span className='licence-text'>Free Classifieds in Pakistan</span>
                            . © 2006-2024 OLX
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;