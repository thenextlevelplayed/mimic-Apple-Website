import '../css/style.css';
// import {Helmet} from "react-helmet";
import main from "../../src/js/main";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {


 
    return(
<body>
   <Navbar />
    
   <section className="hero iphone-13">
    <div className="container">
        <div className="title title-dark">
            <h2 className="title-heading">iPhone 13</h2>
            <h3 className="title-sub-heading">Your new superpower.</h3>
        </div>
        <div className="cta">
            <a href="/Store" className="cta-link cta-link-darker" id="">Learn more</a>
            <a href="/Store" className="cta-link cta-link-darker" id="">Buy</a>
        </div>
    </div>
   </section>

   <section className="hero iphone-13-pro">
    <div className="container">
        <div className="title title-dark">
            <h2 className="title-heading">iPhone 13 Pro</h2>
            <h3 className="title-sub-heading">Oh. So. Pro.</h3>
        </div>
        <div className="cta">
            <a href="/Store" className="cta-link cta-link-darker" id="">Learn more</a>
            <a href="/Store" className="cta-link cta-link-darker" id="">Buy</a>
        </div>
    </div>
    
   </section>

   <section className="hero back-to-school-2022">
    <div className="container">
        <div className="title title-dark">
            <h2 className="title-heading">Get <span>supercharged</span> for college.</h2>
            <h3 className="title-sub-heading">Save&nbsp;on&nbsp;Mac&nbsp;or&nbsp;iPad. Plus&nbsp;get&nbsp;a&nbsp;gift&nbsp;card&nbsp;up&nbsp;to&nbsp;$150.</h3>
        </div>
        <div className="cta">
            <a href="/Store" className="cta-link cta-link-darker" id="">Shop now</a>
            {/* <!-- <a href="#" className="cta-link" id="">Buy</a> --> */}
        </div>
    </div>
   </section>

   <section className="collection">
    <div className="collection-container">
        <div className="collection-module macbook-air">
            <div className="collection-title title-dark">
                <h2 className="collection-title-heading">MacBook Air</h2>
                <h3 className="collection-title-word"></h3>
            </div>
            <div className="cta">
                <a href="/Store" className="cta-link cta-link-darker" id="">Learn more</a>
                <a href="/Store" className="cta-link cta-link-darker" id="">Buy</a>
            </div>
        </div>
        <div className="collection-module macbook-pro-13">
            <div className="collection-title title-white">
                <h2 className="collection-title-heading">MacBook Pro 13"</h2>
                <h3 className="collection-title-word"></h3>
            </div>            
            <div className="cta">
                <a href="/Store" className="cta-link cta-link-darker" id="">Learn more</a>
                <a href="/Store" className="cta-link cta-link-darker" id="">Buy</a>
            </div>
        </div>
    </div>

    <div className="collection-container">
        <div className="collection-module watch">
            <div className="collection-title title-dark">
                <h2 className="collection-title-heading"></h2>
                <p className="title-sub-heading">It’s our largest display yet.</p>
            </div>
            <div className="cta">
                <a href="/Store" className="cta-link cta-link-darker" id="">Learn more</a>
                <a href="/Store" className="cta-link cta-link-darker" id="">Buy</a>
            </div>
        </div>
        <div className="collection-module ipad-air">
            <div className="collection-title title-white">
                <h2 className="collection-title-heading"></h2>
                <p className="title-sub-heading">Light. Bright. Full of might.</p>
            </div>            
            <div className="cta">
                <a href="/Store" className="cta-link cta-link-darker" id="">Learn more</a>
                <a href="/Store" className="cta-link cta-link-darker" id="">Buy</a>
            </div>
        </div>
    </div>

    <div className="collection-container">
        <div className="collection-module apple-pay">
            {/* <!-- <div className="collection-title title-dark">
                <h2 className="collection-title-heading"></h2>
                <h3 className="title-sub-heading"></h3>
            </div>
            <div className="cta">
                <a href="#" className="cta-link cta-link-darker" id="">Learn more</a>
                <a href="#" className="cta-link cta-link-darker" id="">Buy</a>
            </div> --> */}
        </div>
        <div className="collection-module apple-music">
            {/* <!-- <div className="collection-title title-white">
                <h2 className="collection-title-heading"></h2>
                <h3 className="title-sub-heading"></h3>
            </div>            
            <div className="cta">
                <a href="#" className="cta-link cta-link-darker" id="">Learn more</a>
                <a href="#" className="cta-link cta-link-darker" id="">Buy</a>
            </div> --> */}
        </div>
    </div>
   </section>
   {/* <section className="carousel-module">
    <div className="item-module">
        <div className="item item-1">
            <a href="#item-1">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Drama</span> <span className="m-dot" aria-hidden="true">·</span> Family. It’s a killer.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-2">
            <a href="#item-2">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Animation</span> <span className="m-dot" aria-hidden="true">·</span> Sometimes all you need is for everything to go wrong.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-3">
            <a href="#item-3">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Drama</span> <span className="m-dot" aria-hidden="true">·</span> One man’s freedom hides in another man’s darkness.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-4">
            <a href="#item-4">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Comedy</span> <span className="m-dot" aria-hidden="true">·</span> 20 Emmy® Nominations Including Best Comedy</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-5">
            <a href="#item-5">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Sports</span> <span className="m-dot" aria-hidden="true">·</span> Live MLB games, every Friday.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-6">
            <a href="#item-6">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Thriller</span> <span className="m-dot" aria-hidden="true">·</span> 14 Emmy® Nominations Including Best Drama</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-7">
            <a href="#item-7">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Drama</span> <span className="m-dot" aria-hidden="true">·</span> Based on actual events from Hurricane Katrina.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-8">
            <a href="#item-8">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Comedy</span> <span className="m-dot" aria-hidden="true">·</span> She’s about to change her fortune.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-9">
            <a href="#item-9">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Drama</span> <span className="m-dot" aria-hidden="true">·</span> 3 Emmy® Nominations Including Best Actress</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-10">
            <a href="#item-10">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Documentary</span> <span className="m-dot" aria-hidden="true">·</span> Unknown. Unexplained. Unbelievable. Until now.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div className="item-module">
        <div className="item item-11">
            <a href="#item-11">
                <div className="inner">
                    <div className="info-top">
                        <figure className="atv-plus-icon"></figure>
                        <figure className="logo"></figure>
                    </div>
                    <div className="info-bottom">
                        <div className="button-play">Stream now <span className="play-button-icon"></span></div>
                        <p className="typography-shows-genre"><span className="genre">Mystery</span> <span className="m-dot" aria-hidden="true">·</span> Solving mysteries. Making waves.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    
    <div className="paddlenav">
        <ul>
            <li className="previous">
                <button className="arrow previous-arrow" onClick="plusSlides(-1)"></button>
            </li>
            <li className="next">
                <button className="arrow next-arrow" onClick="plusSlides(1)"></button>
            </li>
        </ul>
    </div>
    
    <div className="dot-wrapper">
        <ul className="dotnav-items">
           <li role="presentation">
            <a href="#item-1" className="dot" onClick="currentSlide(1)">
                <span>Item 1</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-2" className="dot" onClick="currentSlide(2)">
                <span>Item 2</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-3" className="dot" onClick="currentSlide(3)">
                <span>Item 3</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-4" className="dot" onClick="currentSlide(4)">
                <span>Item 4</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-6" className="dot" onClick="currentSlide(5)">
                <span>Item 6</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-6" className="dot" onClick="currentSlide(6)">
                <span>Item 6</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-7" className="dot" onClick="currentSlide(7)">
                <span>Item 7</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-8" className="dot" onClick="currentSlide(8)">
                <span>Item 8</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-9" className="dot" onClick="currentSlide(9)">
                <span>Item 9</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-10" className="dot" onClick="currentSlide(10)">
                <span>Item 10</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-11" className="dot" onClick="currentSlide(11)">
                <span>Item 11</span>
            </a>
           </li>
        </ul>
    </div>
   </section> */}
   <Footer />

</body>


  );
};

// abc();




  export default Home;
