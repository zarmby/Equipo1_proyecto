import './CarouselItem.scss';
import { Link } from 'react-router-dom';
import default_cat from '../../../../assets/img_cat/default_cat.png';

const CarouselItem = (props) => {

    const handleOpenModal = (item = null) => {
        props.modal(item);
    }

    return (
        <li className="glide__slide carousel_element" id = {`carousel_item_${props.data.tename}`}>
            <div className="item_content" id= {`cat_content_${props.data.tename}`} >
                <img src={props.data.imagen !== "" ? props.data.imagen : default_cat} alt="Imagen" id= {`cat_img_${props.data.tename}`} />
                {
                    props.edit ? 
                        <img src={props.edit} alt="editar" title="Editar categoria"
                        className="cat_editar_icon" id= {`cat_editar_${props.data.tename}`} 
                        onClick={() => handleOpenModal(props.data)}
                        /> 
                    : null
                }
                {
                    props.add
                        ?
                            <a href="#" onClick={() => handleOpenModal()}>
                                <h1>{props.data.tename}</h1>
                            </a>
                        :
                            <Link to={`/InventoryStock?cat=${props.data.tename}&image=${props.data.imagen}`}>
                                <h1>{props.data.tename}</h1>
                            </Link>
                }
            </div>
        </li>
    )
}


export default CarouselItem;
