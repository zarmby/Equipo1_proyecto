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
<<<<<<< HEAD
      super(props);
=======
        super(props);
        this.state = {
            typeEquipment: []
        } 
>>>>>>> origin/sp3-ft-002
    }

    componentDidMount(){
        new Glide(".glide", {
            type: "carousel",
            perView: 3,
            gap: 50,
            focusAt: 'center',
            starAt: 0,
<<<<<<< HEAD
            autoplay: 2000,
            hoverpause: false,
            keyboard: true,
=======
            autoplay: 1500,
            hoverpause: true,
            keyboard: true, 
>>>>>>> origin/sp3-ft-002
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
<<<<<<< HEAD
                                <li className="glide__slide"><img class="carousel-Item" src="https://images-na.ssl-images-amazon.com/images/I/61U5WlgRiPL._AC_SY355_.jpg"></img></li>
                                <li className="glide__slide"><h1>1</h1></li>
                                <li className="glide__slide"><h1>2</h1></li>
                                <li className="glide__slide"><h1>3</h1></li>
                                <li className="glide__slide"><h1>4</h1></li>
                                <li className="glide__slide"><h1>5</h1></li>
=======
                                <CarouselItem number="jaja"/>
                                <CarouselItem number="ulala"/>
                                <CarouselItem number="hfha"/>
                                <CarouselItem number="fgdf"/>
                                <CarouselItem number="dfgd"/>
                                <CarouselItem number="gfdg"/>
                                <CarouselItem number="fgdfg"/>
>>>>>>> origin/sp3-ft-002
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
<<<<<<< HEAD

export default Carrousel;
=======
export default Carousel;
>>>>>>> origin/sp3-ft-002
