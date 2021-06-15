import React, { useState, useEffect } from 'react';
import NavBar from '../../navbar/Navbar';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

import './Carousel.scss'

class Carrousel extends React.Component {
    constructor (props){
      super(props); 
    }
    
    componentDidMount(){
        var glide = new Glide(".glide", {
            type: "carousel",
            perView: 3,
            gap: 50,
            focusAt: 'center',
            starAt: 0,
            autoplay: true,
            hoverpause: false,
            keyboard: true,
            perTouch: 2
        });
        glide.mount();
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
                                <li className="glide__slide">0</li>
                                <li className="glide__slide">1</li>
                                <li className="glide__slide">2</li>
                                <li className="glide__slide">3</li>
                                <li className="glide__slide">4</li>
                                <li className="glide__slide">5</li>
                            </ul>
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                >>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrousel;