import './CarouselItem.scss';
import { Link } from 'react-router-dom';
import default_cat from '../../../../assets/img_cat/default_cat.png';

const CarouselItem = (props) => {

    const handleOpenModal = () => {
        props.modal();
    }

    return (
        <li className="glide__slide carousel_element">
            <div className="item_content">
                <img src={props.img !== "" ? props.img : default_cat} alt="Imagen" />
                {
                    props.add
                        ?
                        <a href="#" onClick={() => handleOpenModal()}>
                            <h1>{props.name}</h1>
                        </a>
                        :
                        /*<InventoryStock name={props.name}/>*/
                        <Link to={`/InventoryStock?cat=${props.name}&image=${props.img}`}>
                            <h1>{props.name}</h1>
                        </Link>
                }
            </div>
        </li>
    )
}


export default CarouselItem;
