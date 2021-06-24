import { useState } from 'react';
import './CarouselModalForm.scss';

const ModalForm = () => {

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState([]);
    const [filter1, setFilter1] = useState(true);
    const [filter2, setFilter2] = useState(true);
    const [filter3, setFilter3] = useState(true);
    const [filter4, setFilter4] = useState(true);
    const [filter5, setFilter5] = useState(true);
    const [filter6, setFilter6] = useState(true);
    const [filter7, setFilter7] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(photo);
    }

    const handleOnChangePhoto = (e) => {
        setPhoto(e.target.files[0]);
        // Creamos el objeto de la clase FileReader
        let reader = new FileReader();

        // Leemos el archivo subido y se lo pasamos a nuestro fileReader
        reader.readAsDataURL(e.target.files[0]);

        // Le decimos que cuando este listo ejecute el código interno
        reader.onload = function(){
            let preview = document.getElementById('modal_preview'),
                    image = document.createElement('img');

            image.src = reader.result;

            preview.innerHTML = 'Preview';
            preview.append(image);
        };
    }

    return(
        <div id="modal_form_container">
            <form id="modal_form" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => {setName(e.target.value)} } />
                <input type="file" accept="image/png" onChange={(e) => {handleOnChangePhoto(e)} } />
                <label htmlFor="cb_filter_1">Filtro 1<input type="checkbox" id="cb_filter_1" checked value={filter1} onChange={(e)=>{setFilter1(e.value)}}/></label>
                <label htmlFor="cb_filter_2">Filtro 2<input type="checkbox" id="cb_filter_2" checked value={filter2} onChange={(e)=>{setFilter2(e.value)}}/></label>
                <label htmlFor="cb_filter_3">Filtro 3<input type="checkbox" id="cb_filter_3" checked value={filter3} onChange={(e)=>{setFilter3(e.value)}}/></label>
                <label htmlFor="cb_filter_4">Filtro 4<input type="checkbox" id="cb_filter_4" checked value={filter4} onChange={(e)=>{setFilter4(e.value)}}/></label>
                <label htmlFor="cb_filter_5">Filtro 5<input type="checkbox" id="cb_filter_5" checked value={filter5} onChange={(e)=>{setFilter5(e.value)}}/></label>
                <label htmlFor="cb_filter_6">Filtro 6<input type="checkbox" id="cb_filter_6" checked value={filter6} onChange={(e)=>{setFilter6(e.value)}}/></label>
                <label htmlFor="cb_filter_7">Filtro 7<input type="checkbox" id="cb_filter_7" checked value={filter7} onChange={(e)=>{setFilter7(e.value)}}/></label>
                <input type="submit" />
            </form>
            <div id="modal_preview"></div>
            <p>{filter1 ? "Verdadero" : "Falso"}</p>
            <p>{filter2 ? "Verdadero" : "Falso"}</p>
            <p>{filter3 ? "Verdadero" : "Falso"}</p>
            <p>{filter4 ? "Verdadero" : "Falso"}</p>
            <p>{filter5 ? "Verdadero" : "Falso"}</p>
            <p>{filter6 ? "Verdadero" : "Falso"}</p>
            <p>{filter7 ? "Verdadero" : "Falso"}</p>
        </div>
    )
}

export default ModalForm;