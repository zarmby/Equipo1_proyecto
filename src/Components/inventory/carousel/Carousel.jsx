import React, { useEffect,  useState } from 'react';
import Glide from "@glidejs/glide";
import { Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

// Required Core Stylesheet
import "@glidejs/glide/src/assets/sass/glide.core.scss";
// Optional Theme Stylesheet
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

import NavBar from '../../navbar/Navbar';
import CarouselItem from './carousel_item/CarouselItem';
import CarouselModal from './carousel_modal/CarouselModal';
import Loading from '../../loading/Loading';
import { ApiGet } from '../../../services/utils/Api';
import './Carousel.scss';

const Carousel = (props) => {

    const [loading ,setLoading] = useState(true);
    const [modal ,setModal] = useState(false);
    const [typeEquipment ,setTypeEquipment] = useState([]);

    var Glider = new Glide(".glide", {
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
        peek: {
            before: -100,
            after: -100
        }
    });

    useEffect(() => {
        getTypeEquipment().then(()=>{
            Glider.mount({Breakpoints});
        });

        setLoading(false);
    },[])

    const getTypeEquipment = async() => {
        try {
            const TEGet = await ApiGet("typeequipments/");
            const dataTE = await TEGet.result.cont.typeequipment;
            console.log(dataTE);
            setTypeEquipment(dataTE);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleOpenModal = () => {
        setModal(true);
    }

    const handleCloseModal = (add) => {
        if(add){
            getTypeEquipment();
            document.location.reload(true);
        }
        setModal(false);
    }

    return (
        <div className="carousel_container">
            <NavBar />
            {(loading) ? <Loading /> : null}
            {(modal) ? <CarouselModal close={handleCloseModal} /> : null}
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
                                modal={handleOpenModal}
                            />
                            {typeEquipment.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    name= {item.tename}
                                    img={item.imagen}
                                />
                            ))}
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
    );
}



export default Carousel;
