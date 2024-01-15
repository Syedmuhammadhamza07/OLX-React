import MainLogo from "../../Images/olx logo.png"
import MainBlackLogo from "../../Images/logo-black.png"
import Humburger from "../../Images/icons8-hamburger-100.png"
import LocationImg from "../../Images/location.png"
import GPSImg from "../../Images/gps.png"
import searchimg from "../../Images/search.png"
import searchBlackimg from "../../Images/search-black.png"
import Add from "../../Images/addblack.png"
import downArrow from "../../Images/down-arrow.png"
import MotorLogo from "./motor.svg"
import PropertyLogo from "./property.svg"
import SellBtnBorder from "./SellBtnBorder.svg"
import { useState } from "react"
import './index.css'
import { useNavigate } from "react-router-dom"


function Header () {
    const navigate = useNavigate()
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return <div>
                <div className='header-menu-div'>
                    <div className='top-header all-devices'>
                        <img src={MainLogo} className='main-logo' onClick={()=> navigate('/')}/>
                        <div className='motor'>
                            <div className='link-img-div'>
                                <img src={MotorLogo}  className='link-logo'/>
                            </div>
                        </div>
                        <div className='property'>
                            <div className='link-img-div'>
                                <img src={PropertyLogo} className='link-logo'/>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-View-div">
                        <div className='top-header only-mobile'>
                            <div className="olx-logo-div">
                                <img src={Humburger} className='main-logo'/>
                                <img src={MainLogo} className='main-logo'/>
                            </div>
                            <div className='motor'>
                                <div className='link-img-div'>
                                    <img src={MotorLogo}  className='link-logo'/>
                                </div>
                            </div>
                            <div className='property'>
                                <div className='link-img-div'>
                                    <img src={PropertyLogo} className='link-logo'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="original-main-header">
                    <div className='main-header'>
                        <img src={MainBlackLogo} className="logo-black" onClick={()=> navigate('/')}/>
                        <div className="location-dropdown-menu">
                        <ul>
                            <li className="dropdown" onClick={toggleDropdown}>
                                <a href="#" className="dropbtn"><img src={searchBlackimg} width={15}/>Pakistan</a>
                                    {isDropdownOpen && (
                                        <div className="dropdown-content">
                                            <a href="#" className="location-links"><img src={GPSImg} width={20}/>Use Current Location</a>
                                            <a href="#" className="location-links"><img src={LocationImg} width={20}/>See ads in all Pakistan</a>
                                            <a href="#" className="location-links"><img src={LocationImg} width={20}/>Azad Kashmir, Pakistan</a>
                                            <a href="#" className="location-links"><img src={LocationImg} width={20}/>Balochistan, Pakistan</a>
                                            <a href="#" className="location-links"><img src={LocationImg} width={20}/>Islamabad, Pakistan</a>
                                            <a href="#" className="location-links"><img src={LocationImg} width={20}/>Khyber Pakhtunkhwa, Pakistan</a>
                                            <a href="#" className="location-links"><img src={LocationImg} width={20}/>Northern Areas, Pakistan</a>
                                            <a href="#" className="location-links"><img src={LocationImg} width={20}/>Punjab, Pakistan</a>
                                            <a href="#" className="location-links"><img src={LocationImg} width={20}/>Sindh, Pakistan</a>
                                        </div>
                                    )}
                            </li>
                        </ul>
                        </div>
                        <div className="searchBox-div">
                            <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="searchbox"/>
                            <button className="search-btn"><img src={searchimg} width={30}/></button>
                        </div>
                        
                        <div className="UserProfile-div">
                            <div className="login-div">
                                <button className="Login-btn" onClick={()=> navigate('/login')}>Login</button>
                            </div>
                            <div className="sellDiv">
                                <img src={SellBtnBorder} className="sell-btn-border"/>
                                <span className="sell-btn-content" onClick={()=> navigate('/postAd')}>
                                    <img src={Add} className="add-btn"/>
                                    Sell
                                </span>
                            </div>

                        </div>
                        
                    </div>
                    </div>

                    <div className="copy-main-header">
                        <div className='main-header'>
                        <div className="location-dropdown-menu">
                            <ul>
                                <li className="dropdown" onClick={toggleDropdown}>
                                    <a href="#" className="dropbtn"><img src={searchimg} width={20}/>Pakistan</a>
                                        {isDropdownOpen && (
                                            <div className="dropdown-content">
                                                <a href="#"><img src={GPSImg} width={20}/>Use Current Location</a>
                                                <a href="#"><img src={LocationImg} width={20}/>See ads in all Pakistan</a>
                                                <a href="#"><img src={LocationImg} width={20}/>Azad Kashmir, Pakistan</a>
                                                <a href="#"><img src={LocationImg} width={20}/>Balochistan, Pakistan</a>
                                                <a href="#"><img src={LocationImg} width={20}/>Islamabad, Pakistan</a>
                                                <a href="#"><img src={LocationImg} width={20}/>Khyber Pakhtunkhwa, Pakistan</a>
                                                <a href="#"><img src={LocationImg} width={20}/>Northern Areas, Pakistan</a>
                                                <a href="#"><img src={LocationImg} width={20}/>Punjab, Pakistan</a>
                                                <a href="#"><img src={LocationImg} width={20}/>Sindh, Pakistan</a>
                                            </div>
                                        )}
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="copySearchBox-div">
                            <div className="searchBox-div">
                                <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="searchbox"/>
                                <button className="search-btn"><img src={searchimg} width={30}/></button>
                            </div>
                        </div>
                    </div>
                    <div className='menu-div'>
                    <ul>
                        <div className='category-tabs'>
                            <li><strong>All Categories</strong><img src={downArrow} className='down-arrow'/></li>
                            <li>Mobile Phones</li>
                            <li>Cars</li>
                            <li>Motercycles</li>
                            <li>Houses</li>
                            <li>Video-Audios</li>
                            <li>Tablets</li>
                            <li>Land & Plots</li>
                        </div>
                        
                    </ul>
      </div>
                </div>
            </div>
}

export default Header;