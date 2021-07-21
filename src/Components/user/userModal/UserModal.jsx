import './UserModal.scss';

const UserModal = (props) =>{

    const handleCloseModal = (object = null, add = false) => {
        /*if(object === null){
            props.close(add);
        }
        else{
            if(object.target.id === 'carousel_modal_contain' || object.target.id === 'carousel_modal_close')
                props.close(add);
        }*/
    } 

    return(
        <div id="user_modal_contain" onClick={(e) => handleCloseModal(e)} >
            <div id="user_modal">
                <span id="user_modal_close" onClick={(e) => handleCloseModal(e)} >X</span>
            </div>
        </div>
    );
} 

export default UserModal;