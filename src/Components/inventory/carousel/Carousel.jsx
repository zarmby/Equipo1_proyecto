import React from 'react';
import Glide from "@glidejs/glide";
// Required Core Stylesheet
import "@glidejs/glide/src/assets/sass/glide.core.scss";
// Optional Theme Stylesheet
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

import NavBar from '../../navbar/Navbar';
import CarouselItem from './carousel_item/CarouselItem';
import './Carousel.scss'

class Carousel extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            typeEquipment: []
        } 
    }
    
    componentDidMount(){
        new Glide(".glide", {
            type: "carousel",
            perView: 3,
            gap: 50,
            focusAt: 'center',
            starAt: 0,
            autoplay: 1500,
            hoverpause: true,
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
                                <CarouselItem number="jaja"/>
                                <CarouselItem number="ulala"/>
                                <CarouselItem number="hfha"/>
                                <CarouselItem number="fgdf"/>
                                <CarouselItem number="dfgd"/>
                                <CarouselItem number="gfdg"/>
                                <CarouselItem number="fgdfg"/>
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
export default Carousel;