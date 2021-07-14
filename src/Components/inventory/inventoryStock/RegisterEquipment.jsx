import './RegisterEquipment.scss';
import RegisterElement_modal_form from './RegisterElement_modal_form/RegisterElement_modal_form';

const RegisterEquipment = ((props,ref) => {

  const handleCloseModal = (object = null, add = false) => {
      if(object === null){
          props.close(add);
      }
      else{
          if(object.target.id === 'RegisterEquipment_modal_contain' || object.target.id === 'RegisterEquipment_modal_close')
              props.close(add);
      }
  }

  return (
    <div id="RegisterEquipment_modal_contain">
        <div id="RegisterEquipment_modal">
            <span id="RegisterEquipment_modal_close" onClick={() => handleCloseModal()} >X</span>
            <RegisterElement_modal_form
            image = {props.image}
            category = {props.category}
            code = {props.code}
            close = {handleCloseModal}
            serialnumber = {props.serialnumber}
            description = {props.description}
            mark = {props.mark}
            model = {props.model}
            enviroment = {props.enviroment}
            handleCategory = {props.handleCategory}/>
        </div>
    </div>
  )
});

export default RegisterEquipment;
