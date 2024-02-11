import "./index.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleAd } from "../../Config/Firebase";
import { useDispatch } from "react-redux";
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"

import Header from "../../Components/Header";
import Footer from "../../Components/footer";
import { updateCart } from '../../Store/CartSlice'

import bannerImg from "../../Images/banner.jpeg"
import profileImg from "../../Images/userprofile.png"
import rightArrow from "../../Images/chevron.png"
import phone from "../../Images/telephone.png"
import chat from "../../Images/chat.png"
import location from "../../Images/location.png"
import report from "../../Images/flag.png"
import googleAds from "../../Images/detail-page-banner.jpeg"
import like from "../../Images/heart.png"
import share from "../../Images/share.png"
import cart from "../../Images/grocery-store.png"

function Detail(){
    const { adId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const [productImg, setProductImg] = useState([]);
    const [currentIndex , setCurrentIndex] = useState(0)

    const dispatch = useDispatch()

  
    useEffect(() => {
      getProductDetail();
    }, [adId]);
  
    const getProductDetail = async () => {
      try {
        const adData = await getSingleAd(adId);
  
        if (adData) {
          setSingleProduct(adData);

          setProductImg([adData.images[0],adData.images[1],adData.images[2]]);
          
        } else {
            console.error('Error fetching single ad. Result is undefined.');
        }
    } catch (error) {
        console.error("Error fetching single ad:", error);
    }
};

    console.log(singleProduct);
    

    // Slider Functionality Starts

    const prevSlide  = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? productImg.length - 1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const nextSlide  = ()=>{
        const isLastSlide = currentIndex === productImg.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }

    // Slider Functionality Ends

    // Related ads slider starts

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    // Related ads slider ends

    const addToCart = () => {
        console.log('ad', singleProduct)
        dispatch(updateCart(singleProduct))
        alert("Item added to your Cart")
    }

    return <div>
        <Header/>
            <div className="detail-banner-div">
                <div className="banner">
                    <img src={bannerImg} className="detail-banner-img"/>
                </div>
            </div>

            <div className="product-detail-div">
                <div className="singleProduct-detail-div">
                    <div className="slider-and-pofile-info">
                        <div className="sliderAndProduct-detail">
                            <div className="max-w-[100%] h-[547px] relative group detail-product-slider-div">
                                <div style={{backgroundImage: `url(${productImg[currentIndex]})`}} className="w-full h-full rounded-md bg-contain bg-center bg-black bg-no-repeat duration-500 detail-product-slider">
                                    {/* // Left arrow */}
                                    <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-transparent text-white cursor-pointer detail-slider-left-btn">
                                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                                    </div>

                                    {/* //Right arrow */}
                                    <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-transparent text-white cursor-pointer detail-slider-right-btn">
                                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="ad-detail-div">
                                <div className="product-info-div">
                                    <div className="detail-product-information-div">
                                        <div className="detail-product-price">
                                            <span className="detail-product-price-heading">{`Rs. ${singleProduct.amount}`}</span>
                                        </div>
                                        <div className="detail-likeAndShare-icon">
                                            <img src={share} className="share-img"/>
                                            <img src={like} className="like-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info-div">
                                    <div className="detail-product-information-div">
                                        <div className="detail-product-title">
                                            <span className="detail-product-title-heading">{singleProduct.title}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info-div">
                                    <div className="detail-product-information-div">
                                        <div className="detail-user-location-info">
                                            <img src={location} width={20} height={15}/>
                                            <span className="detail-user-location-info-p">{`${singleProduct.neighbourhood}, ${singleProduct.city}`}</span>
                                        </div>
                                        <div className="detail-ad-post-time">
                                            <span className="ad-post-time">5 days ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ad-detail-div">
                                <div className="product-info-div">
                                    <div className="detail-product-information-div">
                                        <div className="product-detail">
                                            <span className="detail-product-title-heading">Details</span>
                                        </div>
                                    </div>
                                    <div className="posted-detail-div">
                                        <div className="posted-detail">
                                            <div className="posted-tags">Brands</div>
                                            <div className="posted-tags-text">{singleProduct.brand}</div>
                                        </div>
                                        <div className="posted-detail">
                                            <div className="posted-tags">Price</div>
                                            <div className="posted-tags-text">{`Rs. ${singleProduct.amount}`}</div>
                                        </div>
                                        <div className="posted-detail">
                                            <div className="posted-tags">Condition</div>
                                            <div className="posted-tags-text">Used</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ad-detail-div">
                                <div className="product-info-div">
                                    <div className="detail-product-information-div">
                                        <div className="product-detail">
                                            <span className="detail-product-title-heading">Description</span>
                                        </div>
                                    </div>
                                    <div className="posted-detail-div">
                                        <div className="posted-detail">
                                            <span>{singleProduct.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="detail-product-div">
                            <div className="detail-product-info-div">
                                <div className="detail-profile-info-card">
                                    <div className="detail-user-info">
                                        <div className="detail-profile-img">
                                            <img src={profileImg} className="userProfile-img"/>
                                        </div>
                                        <div className="detail-profile-info">
                                            <span><strong>{singleProduct.username}</strong></span>
                                            <span>Member since Aug 2019</span>
                                            <div className="see-prfile">
                                                <span><strong>See Profile</strong></span>
                                                <img src={rightArrow} width={15} height={5}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-user-contact-info">
                                        <div className="user-phone-number">
                                            <button className="phone-btn"><img src={phone}/>Show Phone Number</button>
                                        </div>
                                        <div className="user-chat">
                                            <button className="chat-btn"><img src={chat}/>Chat</button>
                                        </div>

                                        <div className="user-chat">
                                            <button className="chat-btn" onClick={addToCart}><img src={cart}/>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="detail-user-location-div">
                                <div className="detail-profile-location-card">
                                    <div className="detail-location-heading-div">
                                        <span className="detail-location-heading"><strong>Location</strong></span>
                                    </div>
                                    <div className="detail-user-location-info">
                                        <img src={location} width={20} height={15}/>
                                        <span className="detail-user-location-info">{`${singleProduct.neighbourhood}, ${singleProduct.city}`}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-google-ads-div">
                                <div className="detail-google-ads">
                                    <div className="detail-location-heading-div">
                                        <span className="detail-adId-heading">AD ID 1082290626</span>
                                        <div className="report-div">
                                            <button className="report-btn"><img src={report}/>Report this ad</button>
                                        </div>
                                    </div>
                                    <div className="detail-googleads-post">
                                        <img src={googleAds} className="google-ads-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        <Footer/>
    </div>
}

export default Detail


