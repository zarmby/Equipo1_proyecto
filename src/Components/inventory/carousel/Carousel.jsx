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
                                <li className="glide__slide"><a href="/InventoryList"><img  class="carousel-Item" src="https://www.steren.com.mx/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/21332c2a7/mouse-inalambrico-1000-dpi.jpg"></img></a></li>
                                <li className="glide__slide"><a href="/InventoryList"><img class="carousel-Item" src="https://fptecnologi.com/wp-content/uploads/2020/04/laptop-hp-pavilion-15-cs0003la-D_NQ_NP_858909-003.jpg"></img></a></li>
                                <li className="glide__slide"><img class="carousel-Item" src="https://static.vecteezy.com/system/resources/previews/002/215/742/non_2x/keyboard-gaming-with-black-color-and-cartoon-flat-style-desktop-computer-keyboard-for-e-sport-gaming-with-top-view-isolated-on-white-background-icon-technology-design-illustration-vector.jpg"></img></li>
                                <li className="glide__slide"><img class="carousel-Item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWf45rkLrlV6ZhbBENoMOwj0BnGAN8IWBRg&usqp=CAU"></img></li>
                                <li className="glide__slide"><img class="carousel-Item" src="https://www.officedepot.com.mx/medias/85814.jpg-515ftw?context=bWFzdGVyfHJvb3R8ODU2NDh8aW1hZ2UvanBlZ3xoMjcvaDM3Lzk1OTUyMTAyMDMxNjYuanBnfGY5ZTkwYmJhZDVlMjdlZmJkOGU2OTJlNjlmZGUxYzQwNjYwZDE4Y2FiY2U5OGFhMjYxMjY4Y2FjNGZkMzhjZmM"></img></li>
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
