import React, {useEffect, useState} from "react";
import "../styles/HomePage.scss";
import Product from "./product";
import Category from "./category";
import Newarrival from "./Newarrival";
import SimpleImageSlider from "react-simple-image-slider";
import axios from 'axios';
function Homepage() {

  const [topRated, setTopRated] = useState([]);
  
  const[categories,setCategories] = useState([])
  const[newarrivals,setNewarrivals] = useState([])


  useEffect (()=>{
    axios.get("http://localhost/homepage/top-rated").then((res)=>setTopRated(res.data.data)).catch((err)=>console.log(err))
  }, [])

  useEffect(()=>{
    axios.get("http://localhost/homepage/categories-list#").then((res)=>setCategories(res.data.data)).catch((err)=>console.log(err))
  },[] )

  useEffect(()=>{
    axios.get("http://localhost/homepage/new-arrivals").then((res)=>setNewarrivals(res.data.data)).catch((err)=>console.log(err))
  },[] )
  
  const images = [
    {
      url: "https://img.freepik.com/free-psd/medical-horizontal-banner-template_23-2148940482.jpg?w=2000",
    },
    {
      url: "https://img.freepik.com/free-vector/modern-website-banner-template-with-abstract-shapes_1361-3311.jpg?w=2000",
    },
    {
      url: "https://img.freepik.com/free-vector/professional-website-banner-with-blue-shapes_1361-1531.jpg?w=2000",
    },
  ];

  return (
    <div className="home container">
      <div>
        <SimpleImageSlider
          width={1300}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <br />
      <br />
      <div className="heading ">
        <h1>India’s Leading Platform for Natural Herbs</h1>
      </div>
      <div className="uppertext">
        <div>
          <h3>Something here.</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do.
          </p>
        </div>
        <div>
          <h3>Lowest Prices.</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do.
          </p>
        </div>
        <div>
          <h3>Consult a doctor.</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do.
          </p>
        </div>
      </div>
      <br />
      <div className="toprated ">
        <div className="top ">
          <div className="rated d-flex mx-5">
            <h3>TOP RATED</h3>
          </div>
          <div>
            <button type="button" class="btn btn-warning">
              View all
            </button>
          </div>
        </div>
        <br />
        <br />

        <div className="d-flex ">
         {
          topRated.map(item => <Product heroImageURL={item.heroImageURL}name={item.name} category={item.category} price={item.price} discountedPrice={item.discountedPrice} rating={item?.ratingAndReviews?.aggregation?.averageRating} />)
         } 
        </div>

        <div>
          <div className="shop d-flex mx-5">
            <h3>SHOP BY CATEGORY</h3>
          </div>
          <br />
          <br />
          <div className="category d-flex mx-4">
            {
              categories.map(item => <Category  heroImageURL={item.heroImageURL} category={item.category}/>)
            }
            
           
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="final">
        <div className="recent d-flex mx-5">
          <div>
            <h3>RECENTLY VIEW</h3>
          </div>

          <div>
            <button type="button" class="btn btn-warning">
              View all
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className="recentlyview d-flex">
          {
            newarrivals.map(item=><Newarrival heroImageURL={item.heroImageURL} category={item.category} brand={item.brand} price={item.price} discountedPrice={item.discountedPrice}/>)
          }
          
        </div>
      </div>
    </div>
  );
}

export default Homepage;
