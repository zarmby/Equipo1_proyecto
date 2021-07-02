import { useState } from 'react';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import './RegisterElement_modal_form.scss';
import { RegisterEquipmentApiPost } from '../../../../services/utils/Api';
import default_cat from '../../../../assets/img_cat/default_cat.png';

const RegisterElement_modal_form = (props) => {

    const [photo, setPhoto] = useState();
    const [serialNumber, setserialNumber] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [mark, setMark] = useState('');
    const [equipmentdescription, setequipmentdescription] = useState('');
    const [state, setState] = useState('Disponible');
    const [model, setModel] = useState('');
    const [campus, setCampus] = useState('60c57e535507ec3760b2e3ca');
    const [status, setStatus] = useState(true);
    const [enviroment, setEnviroment] = useState("");

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
            document.location.reload(true);
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

    const handleOnChangePhoto = (e) => {
        let preview = document.getElementById('modal_preview_img');
        if (e.target.files.length > 0) {
            setPhoto(e.target.files[0]);
            // Creamos el objeto de la clase FileReader
            let reader = new FileReader();

            // Leemos el archivo subido y se lo pasamos a nuestro fileReader
            reader.readAsDataURL(e.target.files[0]);

            // Le decimos que cuando este listo ejecute el código interno
            reader.onload = function () {
                preview.src = reader.result;
            };
        }
        else {
            preview.src = default_cat;
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

    const handleBlur = (e) => {
        let inputsArray = document.getElementsByClassName('info_container');
        for (let index = 0; index < inputsArray.length; index++) {
            inputsArray[index].className = "info_container";
        }
    }

    return (
        <div id="modal_form_container">
            <h2>Crear nuevo equipo</h2>
            <form id="modal_form" onSubmit={handleSubmit}>
                <div id="first_part">
                    <div id="modal_img_info" className="info_container">
                        <label htmlFor="modal_form_cat_img_text">{props.category}</label>
                        <img id="modal_preview_img" src={props.image} alt="img categoria" />
                        <input
                            id="modal_form_cat_img_text" type="text"
                            className="modal_input" placeholder="URL de una imagen de internet"
                            onChange={(e) => { setPhotoURL(e.target.value) }} value=" "
                            onFocus={handleFocus} onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div id="second_part">
                    <div id="modal_serialNumber_info" className="info_container">
                        <label htmlFor="modal_form_cat_serialNumber">Numero de serie*</label>
                        <input
                            type="text" id="modal_form_cat_serialNumber" required
                            className="modal_input" onChange={(e) => { setserialNumber(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={serialNumber}
                        />
                    </div>
                    <div id="modal_equipmentdescription_info" className="info_container">
                        <label htmlFor="modal_form_cat_equipmentdescription">Descripcion*</label>
                        <input
                            type="text" id="modal_form_cat_equipmentdescription" required
                            className="modal_input" onChange={(e) => { setequipmentdescription(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={equipmentdescription}
                        />
                    </div>
                    <div id="modal_mark_info" className="info_container">
                        <label htmlFor="modal_form_cat_mark">Marca*</label>
                        <input
                            type="text" id="modal_form_cat_mark" required
                            className="modal_input" onChange={(e) => { setMark(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={mark}
                        />
                    </div>
                    <div id="modal_model_info" className="info_container">
                        <label htmlFor="modal_form_cat_model">Modelo*</label>
                        <input
                            type="text" id="modal_form_cat_model" required
                            className="modal_input" onChange={(e) => { setModel(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={model}
                        />
                    </div>
                    <div id="modal_enviroment_info" className="info_container">
                        <label htmlFor="modal_form_cat_enviroment">Ambiente*</label>
                        <input
                            type="text" id="modal_form_cat_enviroment" required
                            className="modal_input" onChange={(e) => { setEnviroment(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={enviroment}
                        />
                    </div>
                    <div id="filter_container">
                    </div>
                </div>
                <input id="modal_submit" type="submit" value="Guardar" />
            </form>
        </div>
    )
}

export default RegisterElement_modal_form;
