import './CarouselModal.scss';
import ModalForm from './carousel_modal_form/CarouselModalForm';

const CarouselModal = (props) =>{

    const handleCloseModal = (object) => {
        if(object.target.id === 'carousel_modal_contain' || object.target.id === 'carousel_modal_close')
            props.close()
    } 

    return(
        <div id="carousel_modal_contain" onClick={(e) => handleCloseModal(e)} >
            <div id="carousel_modal">
                <span id="carousel_modal_close" onClick={(e) => handleCloseModal(e)} >X</span>
                <ModalForm />
            </div>
        </div>
    );
} 

export default CarouselModal;