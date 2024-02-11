import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged,getAuth,signOut } from "firebase/auth"
import { getDocs,collection,db } from "../../Views/Login/Auth";
import "./index.css";

import MainLogo from "../../Images/olx logo.png";
import MainBlackLogo from "../../Images/logo-black.png";
import Humburger from "../../Images/icons8-hamburger-100.png";
import LocationImg from "../../Images/location.png";
import GPSImg from "../../Images/gps.png";
import searchimg from "../../Images/search.png";
import searchBlackimg from "../../Images/search-black.png";
import Add from "../../Images/addblack.png";
import downArrow from "../../Images/down-arrow.png";
import userProfile from "../../Images/userprofile.png";
import heartIcon from "../../Images/heart.png"
import dropArrow from "../../Images/down-arrow.png"
import MotorLogo from "./motor.svg";
import PropertyLogo from "./property.svg";
import SellBtnBorder from "./SellBtnBorder.svg";
import CartIcon from '../../Images/grocery-store.png'

const firebaseConfig = {
    apiKey: "AIzaSyBm9msXFDnZvAJe_Vw1l2xxDkX-9L4OQUI",
    authDomain: "my-olx-bad77.firebaseapp.com",
    projectId: "my-olx-bad77",
    storageBucket: "my-olx-bad77.appspot.com",
    messagingSenderId: "666503542444",
    appId: "1:666503542444:web:7a0b056b6a69a722f39109"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Header() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState);
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        
        const userLogin = document.getElementById('signIn-link')
        userLogin.className = "hidden"

        const userProfileDropdownMenu = document.getElementById('user-profile-dropdown-menu')
        userProfileDropdownMenu.className = 'user-profile-dropdown-menu'
  
        getUser(uid)
      } else {
        const userProfileDropdownMenu = document.getElementById('user-profile-dropdown-menu')
        userProfileDropdownMenu.className = 'hide'
      }
  });

  async function getUser(uid) {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    if (doc.id === uid) {
        const fullname = doc.data().fullname
        const username = document.getElementById('username-info')
        username.innerHTML = fullname
        console.log("doc =>",doc);
    }
    });
  }

  async function SignOut(){
    await signOut(auth).then(() => {
    alert("Logout Successfully")
    navigate('/login')
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="header-menu-div">
        <div className="top-header all-devices">
          <img
            src={MainLogo}
            className="main-logo"
            onClick={() => navigate("/")}
          />
          <div className="motor">
            <div className="link-img-div">
              <img src={MotorLogo} className="link-logo" />
            </div>
          </div>
          <div className="property">
            <div className="link-img-div">
              <img src={PropertyLogo} className="link-logo" />
            </div>
          </div>
        </div>

        <div className="mobile-View-div">
          <div className="top-header only-mobile">
            <div className="olx-logo-div">
              <img src={Humburger} className="main-logo" />
              <img src={MainLogo} className="main-logo" />
            </div>
            <div className="motor">
              <div className="link-img-div">
                <img src={MotorLogo} className="link-logo" />
              </div>
            </div>
            <div className="property">
              <div className="link-img-div">
                <img src={PropertyLogo} className="link-logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="original-main-header">
          <div className="main-header">
            <img
              src={MainBlackLogo}
              className="logo-black"
              onClick={() => navigate("/")}
            />
            <div className="location-dropdown-menu">
              <ul>
                <li className="dropdown" onClick={toggleDropdown}>
                  <a href="#" className="dropbtn">
                    <img src={searchBlackimg} width={15} />
                    Pakistan
                  </a>
                  {isDropdownOpen && (
                    <div className="dropdown-content">
                      <a href="#" className="location-links">
                        <img src={GPSImg} width={20} />
                        Use Current Location
                      </a>
                      <a href="#" className="location-links">
                        <img src={LocationImg} width={20} />
                        See ads in all Pakistan
                      </a>
                      <a href="#" className="location-links">
                        <img src={LocationImg} width={20} />
                        Azad Kashmir, Pakistan
                      </a>
                      <a href="#" className="location-links">
                        <img src={LocationImg} width={20} />
                        Balochistan, Pakistan
                      </a>
                      <a href="#" className="location-links">
                        <img src={LocationImg} width={20} />
                        Islamabad, Pakistan
                      </a>
                      <a href="#" className="location-links">
                        <img src={LocationImg} width={20} />
                        Khyber Pakhtunkhwa, Pakistan
                      </a>
                      <a href="#" className="location-links">
                        <img src={LocationImg} width={20} />
                        Northern Areas, Pakistan
                      </a>
                      <a href="#" className="location-links">
                        <img src={LocationImg} width={20} />
                        Punjab, Pakistan
                      </a>
                      <a href="#" className="location-links">
                        <img src={LocationImg} width={20} />
                        Sindh, Pakistan
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="searchBox-div">
              <input
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                className="searchbox"
              />
              <button className="search-btn">
                <img src={searchimg} width={30} />
              </button>
            </div>

            <div className="UserProfile-div">
              <div className="login-div" id="login-div">
                <button className="Login-btn" id="signIn-link" onClick={() => navigate("/login")}>Login</button>
                <div className="user-profile-dropdown-menu"  onClick={toggleMenu} id="user-profile-dropdown-menu">
                  <div className="dropdown-profileImgDiv">
                    <img src={userProfile} className="dropDown-profile-img"/>
                  </div>
                  <div className="dropdown-dropIcon-div">
                    <img src={dropArrow} className="dropDown-dropIcon-img"/>
                  </div>
                </div>
                <nav>
                  <div className={isMenuOpen ? 'open-menu sub-menu-wrap' : 'sub-menu-wrap'} id="subMenu">
                    <div className="user-sub-menu">
                      <div className="user-info">
                        <img
                          src={userProfile}
                          alt="user-profile"
                          className="profile-img"
                        />
                        <div className="userprofile-info">
                          <p className="greeting">Hello,</p>
                          <h2 id="username-info"></h2>
                          <span className="view-profile">
                            <u>View and edit your profile</u>
                          </span>
                        </div>
                      </div>

                      <div className="userprofile-info">
                        <div className="dropdown-link-div">
                          <div className="user-sub-menu-link">
                            <img
                              src="https://www.olx.com.pk/assets/iconMyAds_noinline.81f6b0cc8a3d16d363fb142e1489d035.svg"
                              alt="My ads"
                              className="drop-down-icon"
                            />
                            <p>My ads</p>
                          </div>
                        </div>

                        <div className="dropdown-link-div">
                          <div className="user-sub-menu-link">
                            <img
                              src={heartIcon}
                              alt="Favourite & Saved searches"
                              className="drop-down-icon"
                            />
                            <p>Favourite & Saved searches</p>
                          </div>
                        </div>

                        <div className="dropdown-link-div">
                          <div className="user-sub-menu-link" onClick={()=> navigate('/cart')}>
                            <img
                              src={CartIcon}
                              alt="Favourite & Saved searches"
                              className="drop-down-icon"
                            />
                            <p>Cart</p>
                          </div>
                        </div>

                        <div className="dropdown-link-div">
                          <div className="user-sub-menu-link">
                            <img
                              src="https://www.olx.com.pk/assets/iconBusinessPackages_noinline.64a7db94ef2eb1776d43916ce82b1a40.svg"
                              alt="Buy business packages"
                              className="drop-down-icon"
                            />
                            <p>Buy business packages</p>
                          </div>
                        </div>

                        <div className="dropdown-link-div">
                          <div className="user-sub-menu-link">
                            <img
                              src="https://www.olx.com.pk/assets/iconBoughtPackages_noinline.b29b2b61c39def95f4bf58ac5b6dbb59.svg"
                              alt="Bought Packages & Billing"
                              className="drop-down-icon"
                            />
                            <p>Bought Packages & Billing</p>
                          </div>
                        </div>
                      </div>

                      <div className="userprofile-info">
                        <div className="dropdown-link-div">
                          <div className="user-sub-menu-link">
                            <img
                              src="https://www.olx.com.pk/assets/iconHelp_noinline.f07d255148323e318808a50c52097d0c.svg"
                              alt="Help"
                              className="drop-down-icon"
                            />
                            <p>Help</p>
                          </div>
                        </div>

                        <div className="dropdown-link-div">
                          <div className="user-sub-menu-link">
                            <img
                              src="https://www.olx.com.pk/assets/iconFilters_noinline.0aa1e7bd623dcbcc065196fa3ccba789.svg"
                              alt="Setting"
                              className="drop-down-icon"
                            />
                            <p>Setting</p>
                          </div>
                        </div>

                        <div className="dropdown-link-div" id="logout-btn">
                          <div className="user-sub-menu-link" onClick={SignOut}>
                            <img
                              src="https://www.olx.com.pk/assets/iconLogout_noinline.9da9ed94dfe84e900cc1ae3198b0375b.svg"
                              alt="Logout"
                              className="drop-down-icon"
                            />
                            <p>Logout</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="sellDiv">
                <img src={SellBtnBorder} className="sell-btn-border" />
                <span className="sell-btn-content" onClick={() => navigate("/postAd")}><img src={Add} className="add-btn" />Sell</span>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-main-header">
          <div className="main-header">
            <div className="location-dropdown-menu">
              <ul>
                <li className="dropdown" onClick={toggleDropdown}>
                  <a href="#" className="dropbtn">
                    <img src={searchimg} width={20} />
                    Pakistan
                  </a>
                  {isDropdownOpen && (
                    <div className="dropdown-content">
                      <a href="#">
                        <img src={GPSImg} width={20} />
                        Use Current Location
                      </a>
                      <a href="#">
                        <img src={LocationImg} width={20} />
                        See ads in all Pakistan
                      </a>
                      <a href="#">
                        <img src={LocationImg} width={20} />
                        Azad Kashmir, Pakistan
                      </a>
                      <a href="#">
                        <img src={LocationImg} width={20} />
                        Balochistan, Pakistan
                      </a>
                      <a href="#">
                        <img src={LocationImg} width={20} />
                        Islamabad, Pakistan
                      </a>
                      <a href="#">
                        <img src={LocationImg} width={20} />
                        Khyber Pakhtunkhwa, Pakistan
                      </a>
                      <a href="#">
                        <img src={LocationImg} width={20} />
                        Northern Areas, Pakistan
                      </a>
                      <a href="#">
                        <img src={LocationImg} width={20} />
                        Punjab, Pakistan
                      </a>
                      <a href="#">
                        <img src={LocationImg} width={20} />
                        Sindh, Pakistan
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="copySearchBox-div">
            <div className="searchBox-div">
              <input
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                className="searchbox"
              />
              <button className="search-btn">
                <img src={searchimg} width={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="menu-div">
          <ul>
            <div className="category-tabs">
              <li>
                <strong>All Categories</strong>
                <img src={downArrow} className="down-arrow" />
              </li>
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
  );
}
export default Header;
