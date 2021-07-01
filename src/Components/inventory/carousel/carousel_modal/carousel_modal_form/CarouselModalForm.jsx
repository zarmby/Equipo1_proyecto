import { useState } from 'react';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import './CarouselModalForm.scss';
import { RegisterTypeEquipmentApiPost } from '../../../../../services/utils/Api';
import default_cat from '../../../../../assets/img_cat/default_cat.png';

const ModalForm = (props) => {

    const [photo, setPhoto] = useState();
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const [filterBrand, setFilterBrand] = useState(false);
    const [filterModel, setFilterModel] = useState(false);
    const [filterDescription, setFilterDescription] = useState(false);
    const [filterEnviroment, setFilterEnviroment] = useState(false);
    const [filterSede, setFilterSede] = useState(false);

    const params = [
        name,
        photoURL,
        filterBrand,
        filterModel,
        filterDescription,
        filterEnviroment,
        filterSede
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await RegisterTypeEquipmentApiPost("typeequipments/", params);
            Alertify.success("<b style='color:white;'>Registro completo</b>");
            props.close(null, true);
            props.loading(true)
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
            case 'modal_form_cat_name':
                document.getElementById('modal_name_info').className = "info_container input_focus";
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
            <h2>Crear nueva categoria</h2>
            <form id="modal_form" onSubmit={handleSubmit}>
                <div id="first_part">
                    <div id="modal_img_info" className="info_container">
                        <label htmlFor="modal_form_cat_img_text">Imagen: </label>
                        {/*<input 
                            id="modal_form_cat_img" type="file"
                            accept="image/png" onChange={handleOnChangePhoto} 
                            onFocus={//handleFocus} onBlur={handleBlur}
                        />*/}
                        <img id="modal_preview_img" src={imageExists(photoURL) ? photoURL : default_cat} alt="img categoria" />
                        <input
                            id="modal_form_cat_img_text" type="text"
                            className="modal_input" placeholder="URL de una imagen de internet"
                            onChange={(e) => { setPhotoURL(e.target.value) }} value={photoURL}
                            onFocus={handleFocus} onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div id="second_part">
                    <div id="modal_name_info" className="info_container">
                        <label htmlFor="modal_form_cat_name">Nombre*</label>
                        <input
                            type="text" id="modal_form_cat_name" required
                            className="modal_input" onChange={(e) => { setName(e.target.value) }}
                            onFocus={handleFocus} onBlur={handleBlur} value={name}
                        />
                    </div>
                    <div id="filter_container">
                        <label className="check_contain" htmlFor="cb_filter_Brand">
                            <input type="checkbox" id="cb_filter_Brand" checked={filterBrand} value={filterBrand} onChange={(e) => { setFilterBrand(!filterBrand) }} />
                            <span className="checkmark"></span>
                            <p>Marca</p>
                        </label>
                        <label className="check_contain" htmlFor="cb_filter_model">
                            <input type="checkbox" id="cb_filter_model" checked={filterModel} value={filterModel} onChange={(e) => { setFilterModel(!filterModel) }} />
                            <span className="checkmark"></span>
                            <p>Modelo</p>
                        </label>
                        <label className="check_contain" htmlFor="cb_filter_description">
                            <input type="checkbox" id="cb_filter_description" checked={filterDescription} value={filterDescription} onChange={(e) => { setFilterDescription(!filterDescription) }} />
                            <span className="checkmark"></span>
                            <p>Descripcion</p>
                        </label>
                        <label className="check_contain" htmlFor="cb_filter_enviroment">
                            <input type="checkbox" id="cb_filter_enviroment" checked={filterEnviroment} value={filterEnviroment} onChange={(e) => { setFilterEnviroment(!filterEnviroment) }} />
                            <span className="checkmark"></span>
                            <p>Entorno</p>
                        </label>
                        <label className="check_contain" htmlFor="cb_filter_sede">
                            <input type="checkbox" id="cb_filter_sede" checked={filterSede} value={filterSede} onChange={(e) => { setFilterSede(!filterSede) }} />
                            <span className="checkmark"></span>
                            <p>Sede</p>
                        </label>
                    </div>
                </div>
                <input id="modal_submit" type="submit" value="Guardar" />
            </form>
        </div>
    )
}

export default ModalForm;