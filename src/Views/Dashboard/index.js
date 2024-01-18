import './index.css';
import { useState, useEffect } from 'react';

import Header from "../../Components/Header"
import Carousel from "../../Components/Slider"
import Footer from "../../Components/footer"
import Cards from "../../Components/Cards"
import { getAllProducts } from '../../Config/Firebase'

import banner1 from "../../Images/banner.jpeg"
import banner2 from "../../Images/banner.jpeg"
import banner3 from "../../Images/banner.jpeg"
import mobile from "../../Images/mobile.png"
import vehicles from "../../Images/vehicle.png"
import propertyForSale from "../../Images/property-for-sale.png"
import propertyForRent from "../../Images/property-for-rent.png"
import electronics from "../../Images/electronics-home-appliances.png"
import bikes from "../../Images/bikes.png"
import business from "../../Images/business-industrial-agriculture.png"
import services from "../../Images/services.png"
import jobs from "../../Images/jobs.png"
import animals from "../../Images/animals.png"
import furniture from "../../Images/furniture-home-decor.png"
import fashion from "../../Images/fashion-beauty.png"
import books from "../../Images/books-sports-hobbies.png"
import kids from "../../Images/kids.png"


const slides = [
  banner1,
  banner2,
  banner3
];


function Dashboard() {
  const [product, setProduct] = useState([]);
  const [productImg, setProductImg] = useState([]);

useEffect(() => {
  getAds()
}, []);

const getAds = async ()=>{
  const res = await getAllProducts()
  setProduct(res);
  setProductImg([res.images[0]]);
  setProduct(productImg)
}

console.log(product);

  return (
    <div>
      <Header/>

      <main className='slider-main'>
        <div className='w-7/12 mx-auto banner-div'>
          <Carousel autoSlide={true} autoSlideInterval={1000}>
            {slides.map((s, index) => (
              <img key={index} src={s} alt={`Banner ${index + 1}`} />
            ))}
          </Carousel>
        </div>
      </main>

      <div className='category-heading-div'>
        <h1 className='content-heading'>All categories</h1>
      </div>

      <div className='category-menu-div'>
          <div className='category-tags'>
            <img src={mobile} className='category-img'/>
            <span className='category-heading'>Mobile</span>
          </div>

          <div className='category-tags'>
            <img src={vehicles} className='category-img'/>
            <span className='category-heading'>Vehicles</span>
          </div>

          <div className='category-tags'>
            <img src={propertyForSale} className='category-img'/>
            <span className='category-heading'>Property For Sale</span>
          </div>

          <div className='category-tags'>
            <img src={propertyForRent} className='category-img'/>
            <span className='category-heading'>Property For Rent</span>
          </div>

          <div className='category-tags'>
            <img src={electronics} className='category-img'/>
            <span className='category-heading'>Electronics & Home Appliances</span>
          </div>

          <div className='category-tags'>
            <img src={bikes} className='category-img'/>
            <span className='category-heading'>Bikes</span>
          </div>

          <div className='category-tags'>
            <img src={business} className='category-img'/>
            <span className='category-heading'>Business, Industrial & Agriculture</span>
          </div>

          <div className='category-tags'>
            <img src={services} className='category-img'/>
            <span className='category-heading'>Services</span>
          </div>

          <div className='category-tags'>
            <img src={jobs} className='category-img'/>
            <span className='category-heading'>Jobs</span>
          </div>
      
          <div className='category-tags'>
            <img src={animals} className='category-img'/>
            <span className='category-heading'>Animals</span>
          </div>

          <div className='category-tags'>
            <img src={furniture} className='category-img'/>
            <span className='category-heading'>Furniture & Home Decor</span>
          </div>

          <div className='category-tags'>
            <img src={fashion} className='category-img'/>
            <span className='category-heading'>Fashion & Beauty</span>
          </div>

          <div className='category-tags'>
            <img src={books} className='category-img'/>
            <span className='category-heading'>Books, Sports & Hobbies</span>
          </div>

          <div className='category-tags'>
            <img src={kids} className='category-img'/>
            <span className='category-heading'>Kids</span>
          </div>
      </div>

      <div className='more-ads-div'>
        <h1 className='content-heading'>More in recent ads</h1>
      </div>

      <div className='ads-div'>
        {product.map((post) => (
          <div className="main-Card-div"><Cards key={post.id} post={post}/></div>
        ))}
      </div>
      
      <Footer/>
    </div>
  );
}

export default Dashboard;