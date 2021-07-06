import './CarouselModal.scss';
import ModalForm from './carousel_modal_form/CarouselModalForm';

const CarouselModal = (props) =>{

    const handleCloseModal = (object = null, add = false) => {
        if(object === null){
            props.close(add);
        }
        else{
            if(object.target.id === 'carousel_modal_contain' || object.target.id === 'carousel_modal_close')
                props.close(add);
        }
    } 

    return(
        <div id="carousel_modal_contain" onClick={(e) => handleCloseModal(e)} >
            <div id="carousel_modal">
                <span id="carousel_modal_close" onClick={(e) => handleCloseModal(e)} >X</span>
                <ModalForm close={handleCloseModal} loading={props.loading} item = {props.item} />
            </div>
        </div>
    );
} 

export default CarouselModal;