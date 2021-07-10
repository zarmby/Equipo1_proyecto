import './CarouselItem.scss';
import { Link } from 'react-router-dom';
import default_cat from '../../../../assets/img_cat/default_cat.png';


const CarouselItem = (props) => {

    const handleOpenModal = (item = null) => {
        props.modal(item);
    }

    const imageExists = (image_url) => {
        var http = new XMLHttpRequest();

        try {
            http.open('HEAD', image_url, false);
            http.send();
            return http.status !== 404;
        }
        catch (e) {
            return http.status === 404;
        }
    }

    const getImage = () => {
        if (props.add) {
            return props.data.imagen;
        }
        else {
            if (props.data.imagen === "")
                return default_cat;
            else {
                if (imageExists(props.data.imagen))
                    return props.data.imagen;
                else
                    return default_cat;
            }

        }
    }

    return (
        <li className="glide__slide carousel_element" id={`carousel_item_${props.data.tename}`}>
            <div className="item_content" id={`cat_content_${props.data.tename}`} >
                <img className='item_img'
                    src={getImage()}
                    alt="Imagen" id={`cat_img_${props.data.tename}`} />
                {
                    props.edit ?
                        <img src={props.edit} alt="editar" title="Editar categoria"
                            className="cat_editar_icon" id={`cat_editar_${props.data.tename}`}
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
                        /*<InventoryStock name={props.name}/>*/
                        <Link onClick={() => props.openInventory(props.data.imagen, props.data.tename, props.data._id)}>
                            <h1>{props.data.tename}</h1>
                        </Link>
                }
            </div>
        </li>
    )
}


export default CarouselItem;
