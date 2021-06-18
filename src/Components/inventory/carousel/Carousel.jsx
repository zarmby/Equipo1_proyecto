import React, { useState, useEffect } from 'react';
import NavBar from '../../navbar/Navbar';
import Glide from "@glidejs/glide";
// Required Core Stylesheet
import "@glidejs/glide/src/assets/sass/glide.core.scss";
// Optional Theme Stylesheet
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

import './Carousel.scss'

class Carrousel extends React.Component {
    constructor (props){
      super(props);
    }

    componentDidMount(){
        new Glide(".glide", {
            type: "carousel",
            perView: 3,
            gap: 50,
            focusAt: 'center',
            starAt: 0,
            autoplay: 2000,
            hoverpause: false,
            keyboard: true,
            peek: {
                before: -100,
                after: -100
              }
        }).mount();
    }


    render(){
        return(
            <div className="carousel_container">
                <NavBar/>
                <div id="carousel_items_contain">
                    <div className="glide">
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                Prev
                            </button>
                        </div>
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide"><img class="carousel-Item" src="https://images-na.ssl-images-amazon.com/images/I/61U5WlgRiPL._AC_SY355_.jpg"></img></li>
                                <li className="glide__slide"><h1>1</h1></li>
                                <li className="glide__slide"><h1>2</h1></li>
                                <li className="glide__slide"><h1>3</h1></li>
                                <li className="glide__slide"><h1>4</h1></li>
                                <li className="glide__slide"><h1>5</h1></li>
                            </ul>
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrousel;
