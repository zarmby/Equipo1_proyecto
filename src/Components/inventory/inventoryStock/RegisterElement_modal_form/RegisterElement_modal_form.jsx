import { useState } from 'react';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import './RegisterElement_modal_form.scss';
import { RegisterEquipmentApiPost } from '../../../../services/utils/Api';
import ScannerC from '../../Scanner/ScannerC'
import default_cat from '../../../../assets/img_cat/default_cat.png';

const RegisterElement_modal_form = (props) => {

    const [camera, setCamera] = useState(false);

    const [photo, setPhoto] = useState();
    const [serialNumber, setserialNumber] = useState(props.serialnumber);
    const [mark, setMark] = useState(props.mark);
    const [equipmentdescription, setequipmentdescription] = useState(props.description);
    const [state, setState] = useState('Disponible');
    const [model, setModel] = useState(props.model);
    const [campus, setCampus] = useState('60c57e535507ec3760b2e3ca');
    const [status, setStatus] = useState(true);
    const [enviroment, setEnviroment] = useState(props.enviroment);

    const [idTypeEquipment, setIdtypeequipment] = useState(props.code);
    const [filterBrand, setFilterBrand] = useState(false);
    const [filterModel, setFilterModel] = useState(false);
    const [filterDescription, setFilterDescription] = useState(false);
    const [filterEnviroment, setFilterEnviroment] = useState(false);
    const [filterSede, setFilterSede] = useState(false);

    const params = [
        idTypeEquipment,
        serialNumber,
        state,
        equipmentdescription,
        model,
        mark,
        campus,
        status,
        enviroment
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await RegisterEquipmentApiPost("equipments/", params);
            Alertify.success("<b style='color:white;'>Registro completo</b>");
            props.close(null, true);
            props.handleCategory(props.category,props.image,props.code)
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
            console.log(e);
        }
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

    const handleFocus = (e) => {
        switch (e.target.id) {
            case 'modal_form_cat_serialNumber':
                document.getElementById('modal_serialNumber_info').className = "info_container input_focus";
                break;
            case 'modal_form_cat_mark':
                document.getElementById('modal_mark_info').className = "info_container input_focus";
                break;
            case 'modal_form_cat_equipmentdescription':
                document.getElementById('modal_equipmentdescription_info').className = "info_container input_focus";
                break;
            case 'modal_form_cat_model':
                document.getElementById('modal_model_info').className = "info_container input_focus";
                break;
            case 'modal_form_cat_enviroment':
                document.getElementById('modal_enviroment_info').className = "info_container input_focus";
                break;
            /*case 'modal_form_cat_img':
                document.getElementById('modal_img_info').className = "info_container input_focus";
                break;*/
            case 'modal_form_cat_img_text':
                document.getElementById('modal_img_info').className = "info_container input_focus";
                break;
            default:
                document.getElementById('modal_submit').className = "input_focus";
                break;
        }
    }

    const handleScanner = (sn) =>{
      setserialNumber(sn)
    }

    const handleCamera = () => {
      setCamera(!camera)
    }

    const handleBlur = (e) => {
        let inputsArray = document.getElementsByClassName('info_container');
        for (let index = 0; index < inputsArray.length; index++) {
            inputsArray[index].className = "info_container";
        }
    }

    return (
        <div id="modal_form_container">
            {camera ? <ScannerC handleScanner = {handleScanner} handleCamera = {handleCamera}/> : null}
            {camera ? <span id="RegisterEquipment_Scanner_close" onClick={() => handleCamera()}>X</span> : null}
            {!camera ?
              <div>
              <h2>Crear nuevo equipo</h2>
              <form id="modal_form" onSubmit={handleSubmit}>
                <div id="first_part">
                    <div id="modal_img_info" className="info_container">
                        <label htmlFor="modal_form_cat_img_text">{props.category}</label>
                        <img id="modal_preview_img" src={props.image} alt="img categoria" />
                    </div>
                </div>
                <div id="second_part">
                    <div id="modal_serialNumber_info" className="info_container">
                        <label htmlFor="modal_form_cat_serialNumber">Numero de serie*</label>
                        <input
                            type="text" id="modal_form_cat_serialNumber" required
                            className="modal_input" onChange={(e) => { setserialNumber(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={serialNumber} maxLength="50"
                        />
                        <spam class="scaner-icon">
                          <i class="fas fa-camera fa-2x scaner-icon-img" onClick={() => handleCamera()}></i>
                        </spam>
                    </div>
                    <div id="modal_equipmentdescription_info" className="info_container">
                        <label htmlFor="modal_form_cat_equipmentdescription">Descripcion*</label>
                        <input
                            type="text" id="modal_form_cat_equipmentdescription" required
                            className="modal_input" onChange={(e) => { setequipmentdescription(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={equipmentdescription} maxLength="150"
                        />
                    </div>
                    <div id="modal_mark_info" className="info_container">
                        <label htmlFor="modal_form_cat_mark">Marca*</label>
                        <input
                            type="text" id="modal_form_cat_mark" required
                            className="modal_input" onChange={(e) => { setMark(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={mark} maxLength="50"
                        />
                    </div>
                    <div id="modal_model_info" className="info_container">
                        <label htmlFor="modal_form_cat_model">Modelo*</label>
                        <input
                            type="text" id="modal_form_cat_model" required
                            className="modal_input" onChange={(e) => { setModel(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={model} maxLength="50"
                        />
                    </div>
                    <div id="modal_enviroment_info" className="info_container">
                        <label htmlFor="modal_form_cat_enviroment">Ambiente*</label>
                        <input
                            type="text" id="modal_form_cat_enviroment" required
                            className="modal_input" onChange={(e) => { setEnviroment(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={enviroment} maxLength="20"
                        />
                    </div>
                    <div id="filter_container">
                    </div>
                </div>
                <input id="modal_submit" type="submit" value="Guardar" />
            </form>
            </div> : null}
        </div>
    )
}

export default RegisterElement_modal_form;
