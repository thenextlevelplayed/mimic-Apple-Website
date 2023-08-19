import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../components/Navbar"
import "../css/store.css"
import Footer from "../components/Footer"
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/store.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const getToken = window.sessionStorage.getItem('token');
  const email = window.sessionStorage.getItem('email')

  useEffect(()=>{
    Axios.get('http://localhost:3001/item').then((res)=>{
    // console.log('res.data.data',res.data.data)
    setData(res.data.data)

    }).catch(error=>{
      if (error.response){
        console.log(error.response)

        //do something
        
        }else if(error.request){
            console.log(error.request)
        
        //do something else
        
        }else if(error.message){
            console.log(error.message)
        
        //do something other than the other two
        
        }
    })
  },[])
  // console.log(data[0]._id)

  //addToCart
  async function addToCart(id,quantity){
    try{
      if(getToken == null){
        navigate('/sign-in', {replace: true});
    }else{
        // 有token 撈資料庫資料
        const getToken = window.sessionStorage.getItem('token')
        const response = await Axios({
          method:'POST',
            url:'http://localhost:3001/addCart',
            data: JSON.stringify({
              itemId: id,
              quantity: quantity,
              email:email
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
        }).then(()=>{
          alert("Item Added To Cart");
        });
        console.log(id)
        console.log(quantity)
      }
    }catch (err){
      alert("Something Went Wrong");
      console.log(err);
    }
  }

  
  // let appendNumber = 4;
  // let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //   ]);
  // };

  return (
    
    <>
      <Navbar />
      <div class="store-title"><h1>Store item{}</h1></div>
      <section class="card-model">
      <div class="sub-title"><h2>All models. </h2><h2>Take your pick.</h2></div>
      </section>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="card-title">
                    <div class="eyebrow">NEW</div>
                    <div class="card-sub-title">
                      <h3>iPhone 13</h3>
                    </div>
                </div>
                <div class="card-image ">
                    <img width="340" height="264" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202203?wid=340&amp;hei=264&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1646335268199" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202203?wid=340&amp;hei=264&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1646335268199, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202203?wid=680&amp;hei=528&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1646335268199 2x" class="rf-hcard-img"/>
                </div>
                <ul class="rf-hcard-content-swatchescontainer">
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Alpine Green" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645462947994" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645462947994, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1645462947994 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Silver" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000810000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000810000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630000810000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Gold" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000809000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000809000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630000809000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Graphite" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000811000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000811000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630000811000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Sierra Blue" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000809000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000809000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630000809000 2x"/>
                  </li>
                </ul>
                <div class="card-botton-title">
                    <div class="card-botton-content">
                        <span>
                            From $699 or $29.12/mo. for 24 mo.
                        </span>
                        <br />
                        <span>
                            before trade‑in Footnote *
                        </span>
                    </div>
                    <button class="buy" onClick={(e)=>addToCart(data[2]._id,1)}>Buy</button>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card-title">
                    <div class="eyebrow">NEW</div>
                    <div class="card-sub-title"><h3>iPhone 13 Pro</h3></div>
                </div>
                <div class="card-image ">
                    <img width="340" height="264" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=340&amp;hei=264&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1644989935267" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=340&amp;hei=264&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1644989935267, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=680&amp;hei=528&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1644989935267 2x" class="rf-hcard-img"/>
                </div>
                <ul class="rf-hcard-content-swatchescontainer" aria-label="iPhone 13 mini Available colors:" role="list" data-trigger-click="click [data-relatedlink='130803a0-28d9-11ed-bebb-e36d0f6d5327_secondarybutton']">
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Green" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-green-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645462947993" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-green-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645462947993, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-green-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1645462947993 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Pink" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-pink-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017923000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-pink-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017923000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-pink-select-2021_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630017923000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    < img width="16" height="16" alt="Blue" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-blue-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017923000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-blue-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017923000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-blue-select-2021_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630017923000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Midnight" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-midnight-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017923000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-midnight-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017923000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-midnight-select-2021_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630017923000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Starlight" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-starlight-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017922000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-starlight-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017922000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-starlight-select-2021_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630017922000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Red" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-product-red-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017924000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-product-red-select-2021_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630017924000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-product-red-select-2021_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630017924000 2x"/>
                </li>
                </ul>
                <div class="card-botton-title">
                    <div class="card-botton-content">
                        <span>                            
                            From $999 or $41.62/mo. for 24 mo.
                        </span>
                        <br/>
                        <span>
                            before trade‑in Footnote *
                        </span>
                    </div>
                    <button class="buy"onClick={(e)=>addToCart(data[1]._id,1)}>Buy</button>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card-title">
                    <div class="eyebrow">NEW</div>
                    <div class="card-sub-title"><h3>MacBook Air with M2</h3></div>
                </div>
                <div class="card-image ">
                    <img width="600" height="500" alt="" style={{"width": "100%"}} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1653499620093" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1653499620093, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=1200&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1653499620093 2x" class="rf-hcard-img"/>
                </div>
                <ul class="rf-hcard-content-swatchescontainer" style={{"margin":"0", "marginBottom":"20px"}}>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Alpine Green" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645462947994" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645462947994, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1645462947994 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Silver" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000810000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000810000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630000810000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Gold" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000809000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000809000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630000809000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Graphite" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000811000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000811000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630000811000 2x"/>
                  </li>
                  <li class="rf-hcard-content-colorimage">
                    <img width="16" height="16" alt="Sierra Blue" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000809000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1630000809000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1630000809000 2x"/>
                  </li>
                </ul>
                <div class="card-botton-title">
                    <div class="card-botton-content">
                        <span>
                            From $1199 or $99.91/mo. for 12 mo.
                        </span>
                    </div>
                    <button class="buy"onClick={(e)=>addToCart(data[3]._id,1)}>Buy</button>
                </div>
        </SwiperSlide>
        <SwiperSlide className="macbookpro13">
        <div class="card-title">
          <div class="eyebrow">NEW</div>
          <div class="card-sub-title">
            <h3>MacBook Pro 13"</h3>
          </div>
        </div>
        <div class="card-image ">
          <img width="600" height="500" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1653498040306" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1653498040306, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=1200&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1653498040306 2x" class="rf-hcard-img"/>
        </div>
        <ul class="rf-hcard-content-swatchescontainer" style={{"margin":"0", "marginBottom":"20px"}} aria-label="MacBook Pro 13” Available colors:" role="list" data-trigger-click="click [data-relatedlink='cf0329e0-2910-11ed-a064-f988cf4e6251_secondarybutton']">
          <li class="rf-hcard-content-colorimage">
            <img width="16" height="16" alt="Space Gray" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1652814961343" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1652814961343, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1652814961343 2x"/>
          </li>
          <li class="rf-hcard-content-colorimage">
            <img width="16" height="16" alt="Silver" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202206_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1652814961332" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202206_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1652814961332, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202206_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1652814961332 2x"/>
          </li>
        </ul>
        <div class="card-botton-title">
          <div class="card-botton-content">
              <span>
                  From $1299 or $108.25/mo. for 12 mo.
              </span>
          </div>
          <button class="buy"onClick={(e)=>addToCart(data[4]._id,1)}>Buy</button>
        </div>
        </SwiperSlide>
        <SwiperSlide className="iPad-Air">
          <div class="card-title">
            <div class="eyebrow">NEW</div>
              <div class="card-sub-title">
                <h3>iPad Air</h3>
              </div>
            </div>
            <div class="card-image" style={{"margin":"94.786px","marginTop":"0","marginBottom":"0"}}>
            <img width="300" height="400" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202203?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1644963446761" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202203?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1644963446761, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202203?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1644963446761 2x" class="rf-hcard-img"/>


            </div>
            <ul class="rf-hcard-content-swatchescontainer" aria-label="10.9-inch iPad Air Available colors:" role="list" data-trigger-click="click [data-relatedlink='8c439720-2f37-11ed-afc9-e111899b7b7e_secondarybutton']">
              <li class="rf-hcard-content-colorimage">
                <img width="16" height="16" alt="Space Gray" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-spacegray-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466314997" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-spacegray-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466314997, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-spacegray-202203_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1645466314997 2x"/>
              </li>
              <li class="rf-hcard-content-colorimage">
                <img width="16" height="16" alt="Pink" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-pink-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466314671" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-pink-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466314671, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-pink-202203_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1645466314671 2x"/>
              </li>
              <li class="rf-hcard-content-colorimage">
                <img width="16" height="16" alt="Blue" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-blue-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466314657" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-blue-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466314657, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-blue-202203_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1645466314657 2x"/>
              </li>
              <li class="rf-hcard-content-colorimage">
                <img width="16" height="16" alt="Purple" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-purple-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466314678" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-purple-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466314678, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-purple-202203_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1645466314678 2x"/>
              </li>
              <li class="rf-hcard-content-colorimage">
                <img width="16" height="16" alt="Starlight" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-starlight-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466315042" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-starlight-202203_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1645466315042, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-starlight-202203_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1645466315042 2x"/>
                </li>
            </ul>
            <div class="card-botton-title">
            <div class="card-botton-content">
                <span>
                    From $599 or $49.91/mo. for 12 mo.
                </span>
                <br />
            </div>
            <button class="buy"onClick={(e)=>addToCart(data[0]._id,1)}>Buy</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="apple-watch-series-7">
        <div class="card-title">
          <div class="eyebrow">NEW</div>
          <div class="card-sub-title">
            <h3>Apple Watch Series 7</h3>
          </div>
        </div>
      <div class="card-image ">
        <img width="340" height="264" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s7-202205?wid=340&amp;hei=264&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1651697659652" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s7-202205?wid=340&amp;hei=264&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1651697659652, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s7-202205?wid=680&amp;hei=528&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1651697659652 2x" class="rf-hcard-img"/>
      </div>
      <ul class="rf-hcard-content-swatchescontainer" style={{"margin":"0", "marginBottom":"20px"}} aria-label="Apple&nbsp;Watch Available colors:" role="list" data-trigger-click="click [data-relatedlink='bb1204d0-2931-11ed-b0c8-15bda61802b4_secondarybutton']">
        <li class="rf-hcard-content-colorimage">
          <img width="16" height="16" alt="Silver" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-stainless-silver-cell-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932216000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-stainless-silver-cell-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932216000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-stainless-silver-cell-7s_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1634932216000 2x"/>
        </li>
        <li class="rf-hcard-content-colorimage">
          <img width="16" height="16" alt="Green" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-green-nc-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932211000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-green-nc-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932211000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-green-nc-7s_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1634932211000 2x"/>
        </li>
        <li class="rf-hcard-content-colorimage">
          <img width="16" height="16" alt="Blue" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-blue-nc-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932066000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-blue-nc-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932066000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-blue-nc-7s_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1634932066000 2x"/>
        </li>
        <li class="rf-hcard-content-colorimage">
          <img width="16" height="16" alt="Midnight" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-41-alum-midnight-cell-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932053000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-41-alum-midnight-cell-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932053000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-41-alum-midnight-cell-7s_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1634932053000 2x"/>
        </li>
        <li class="rf-hcard-content-colorimage">
          <img width="16" height="16" alt="Starlight" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-starlight-nc-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932214000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-starlight-nc-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932214000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-alum-starlight-nc-7s_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1634932214000 2x"/>
        </li>
        <li class="rf-hcard-content-colorimage">
          <img width="16" height="16" alt="Gold" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-stainless-gold-cell-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932215000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-stainless-gold-cell-7s_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1634932215000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-45-stainless-gold-cell-7s_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1634932215000 2x"/>
        </li>
        <li class="rf-hcard-content-moretext">+</li>
      </ul>
      <div class="card-botton-title">
          <div class="card-botton-content">
              <span>
                  From $399 or $16.62/mo. for 24 mo.
              </span>
              <br/>
          </div>
          <button class="buy"onClick={(e)=>addToCart(data[5]._id,1)}>Buy</button>
      </div>

        </SwiperSlide>

      </Swiper>
      <div  style={{"backgroundColor":"#f5f5f7"}}><Footer/></div>
    </>

  );
}
