import './CarouselItem.scss';
import { Link } from 'react-router-dom';
import default_cat from '../../../../assets/img_cat/default_cat.png';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { DeleteTypeEquipmentApiDelete } from '../../../../services/utils/Api';


const CarouselItem = (props) => {

    const handleOpenModal = (item = null) => {
        props.modal(item);
    }

    const handleDelete = () => {
        Alertify.confirm('Eliminar tipo de equipo', '¿Esta seguro de elimar este tipo de equipo?', 
            async function() {
                try {
                    await DeleteTypeEquipmentApiDelete("typeequipments/", false,props.data._id);
                    Alertify.success("<b style='color:white;'>Eliminado correctamente</b>");
                    props.loading(true)
                    setTimeout(function(){document.location.reload(true);}, 200);
                }
                catch (e) {
                    Alertify.error(`<b style='color:white;'>${e}</b>`);
                }
            },
            function(){}
        );
    }

    const handleErrorImg = (e)=>{
        e.target.src = default_cat;
    }

    const getImage = () => {
        if (props.add) {
            return props.data.imagen;
        }
        else {
            if (props.data.imagen === "")
                return default_cat;
            else {
                return props.data.imagen;
            }

        }
    }

    return (
        <li className="glide__slide carousel_element" id={`carousel_item_${props.data.tename}`}>
            <div className="item_content" id={`cat_content_${props.data.tename}`} >
                <img className='item_img'
                    src={getImage()}  onError={(e)=>handleErrorImg(e)}
                    alt="Imagen" id={`cat_img_${props.data.tename}`} />
                {
                    props.edit ?
                        <span  title="Editar categoria" 
                            className="cat_edit_container" 
                            onClick={() => handleOpenModal(props.data)}>
                            <img src={props.edit} alt="editar"
                                className="cat_edit_icon" 
                                id={`cat_editar_${props.data.tename}`}
                            />
                        </span>
                        : null
                }                
                {
                    props.delete ?
                        <span  title="Eliminar categoria" 
                            className="cat_delete_container" 
                            onClick={handleDelete}>
                            <img src={props.delete} alt="eliminar"
                                className="cat_delete_icon" 
                                id={`cat_eliminar_${props.data.tename}`}
                            />
                        </span>
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
