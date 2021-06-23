import React from 'react';
import Glide from "@glidejs/glide";
import { Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

// Required Core Stylesheet
import "@glidejs/glide/src/assets/sass/glide.core.scss";
// Optional Theme Stylesheet
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

import NavBar from '../../navbar/Navbar';
import CarouselItem from './carousel_item/CarouselItem';
import CarouselModal from './carousel_modal/CarouselModal';
import './Carousel.scss';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeEquipment: [],
            modal: true
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        new Glide(".glide", {
            type: "carousel",
            gap: 50,
            perView: 3,
            breakpoints: {
                550: {
                    gap: 0,
                    perView: 1,
                    peek: {
                        before: 0,
                        after: -80
                    }
                },
                1200: { 
                    perView: 3
                }
            },
            focusAt: 'center',
            starAt: 0,
            autoplay: false,
            hoverpause: true,
            keyboard: true,
            animationDuration: 1000,
            peek: {
                before: -100,
                after: -100
            }
        }).mount({ Breakpoints });
    }

    handleOpenModal() {
        this.setState({ modal: true })
    }

    handleCloseModal() {
        this.setState({ modal: false })
    }


    render() {
        return (
            <div className="carousel_container">
                <NavBar />
                {(this.state.modal) ? <CarouselModal close={this.handleCloseModal} /> : null}
                <div id="carousel_items_contain">
                    <div className="glide">
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                Prev
                            </button>
                        </div>
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <CarouselItem
                                    name="Agregar nueva categoria"
                                    img="https://static.thenounproject.com/png/953211-200.png"
                                    add={true}
                                    modal={this.handleOpenModal}
                                />
                                <CarouselItem
                                    name="Cables"
                                    img="https://img2.freepng.es/20180711/bxc/kisspng-hdmi-electrical-cable-drawing-home-theater-systems-hdmi-cable-5b4670e35dd120.6966459615313430753843.jpg"
                                />
                                <CarouselItem
                                    name="Laptop"
                                    img="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-cartoon-white-laptop-free-button-image_1372158.jpg"
                                />
                                <CarouselItem
                                    name="Teclado"
                                    img="https://i.pinimg.com/736x/96/67/5b/96675b460913d54c4ee0382238144db8.jpg"
                                />
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
