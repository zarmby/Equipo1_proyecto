import React, { useEffect, useState } from 'react';
import Glide from "@glidejs/glide";
import { Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

// Required Core Stylesheet
import "@glidejs/glide/src/assets/sass/glide.core.scss";
// Optional Theme Stylesheet
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

import NavBar from '../../navbar/Navbar';
import CarouselItem from './carousel_item/CarouselItem';
import CarouselModal from './carousel_modal/CarouselModal';
import InventoryStock from '../inventoryStock/InventoryStock'
import Loading from '../../loading/Loading';
import { ApiGet } from '../../../services/utils/Api';
import AddCat from '../../../assets/img_cat/add_cat.png';
import edit from '../../../assets/img/edit.png';
import './Carousel.scss';

const Carousel = (props) => {

    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [typeEquipment, setTypeEquipment] = useState([]);
    const [ISDisplay, setISDisplay] = useState(false);
    const [image, setImage] = useState("");
    const [typeCategory, setTypeCategory] = useState("");
    const [code, setCode] = useState("");

    const handleShowInventory = (image,typeCategory,code) => {
        setISDisplay(true);
        setImage(image);
        setTypeCategory(typeCategory);
        setCode(code);
    }

    const [itemSelect, setItemSelect] = useState([]);

    var Glider = new Glide(".glide", {
        type: "carousel",
        perView: 3,
        breakpoints: {
            550: {
                gap: 0,
                perView: 1,
                peek: {
                    before: 0,
                    after: 0
                }
            },
            1200: {
                perView: 3
            }
        },
        focusAt: 'center',
        starAt: 0,
        keyboard: true,
        peek: {
            before: -100,
            after: -100
        }
    });

    const ElementAddCat = {
        tename: "Agregar nueva categoria",
        imagen: AddCat
    }

    useEffect(() => {
        getTypeEquipment().then(() => {
            Glider.mount({ Breakpoints });
        });

        setLoading(false);
    }, [])

    const getTypeEquipment = async () => {
        try {
            const TEGet = await ApiGet("typeequipments/");
            const dataTE = await TEGet.result.cont.typeequipment;
            setTypeEquipment(dataTE);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleOpenModal = (item) => {
        setModal(true);
        setItemSelect(item);
    }

    const handleCloseModal = (add) => {
        if (add) {
            getTypeEquipment();
            document.location.reload(true);
        }
        setModal(false);
    }

    return (
        <div className="carousel_container">
            <NavBar />
            {ISDisplay == true ? <InventoryStock
              image = {image}
              typeCategory ={typeCategory}
              code = {code}/> : <div id="carousel_items_contain">
                  <div className="glide">
                      <div className="glide__arrows" data-glide-el="controls">
                          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                              Prev
                          </button>
                      </div>
                      <div className="glide__track" data-glide-el="track">
                          <ul className="glide__slides">
                              <CarouselItem
                                  data={ElementAddCat}
                                  add={true}
                                  modal={handleOpenModal}
                              />
                              {(typeEquipment.length > 0) ?typeEquipment.map((item, index) => (
                                  <CarouselItem
                                      key={index}
                                      data={item}
                                      edit={edit}
                                      modal={handleOpenModal}
                                      openInventory = {handleShowInventory}
                                  />
                              )) : null}
                          </ul>
                      </div>
                      <div className="glide__arrows" data-glide-el="controls">
                          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                              Next
                          </button>
                      </div>
                  </div>
              </div>}
            {(loading) ? <Loading /> : null}
            {(modal) ? <CarouselModal close={handleCloseModal} loading={setLoading} item = {itemSelect} /> : null}
        </div>
    );
}



export default Carousel;
