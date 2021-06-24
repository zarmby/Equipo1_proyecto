import './CarouselItem.scss';
import {Link} from 'react-router-dom';

const CarouselItem = (props) => {

    const handleOpenModal = () => {
        props.modal();
    }

    return(
        <li className="glide__slide carousel_element">
            <div className="item_content">
                <img src={props.img} alt="Imagen" />
                {
                    props.add 
                    ?
                        <a href="#" onClick={()=>handleOpenModal()}>
                            <h1>{props.name}</h1>
                        </a>
                    :
                        <Link to={`/InventoryStock?cat=${props.number}`}>
                            <h1>{props.name}</h1>
                        </Link>
                }
            </div>
        </li>
    )
}


export default CarouselItem; 