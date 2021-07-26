import { useEffect, useRef, useState } from 'react';
import './SedeCrud.scss';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import deleteIcon from '../../../assets/img/delete_icon.png';
import { ApiGet,  RegisterSedeApiPost, DeleteSedeApiDelete  } from '../../../services/utils/Api';

const Sede = (props) => {
    const [name, setName] = useState("");
    const [sedes, setSedes] = useState([]);
    const sede_name_contain = useRef();

    useEffect(()=>{
        getSedes().then(()=>props.loading(false));
    },[]);
    
    const getSedes = async () => {
        try {
            let res = await ApiGet("campus");
            let aux = res.result.cont.campus;
            setSedes(aux);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleFocus = () =>{
        sede_name_contain.current.className = "info_container input_focus";
    }

    const handleBlur = () =>{
        sede_name_contain.current.className = "info_container";
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let params = [
            name
        ]
        props.loading(true);
        try {
            await RegisterSedeApiPost("campus/", params);
            Alertify.success("<b style='color:white;'>Registro completo</b>");
            setName("");
            getSedes();
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
        props.loading(false);
    }

    const handleDeleteSede = (id)=>{
        Alertify.confirm('Borrar sede', '¿Esta seguro de querer borrar esta sede?', 
            async function(){ 
                props.loading(true);
                try {
                    await DeleteSedeApiDelete("campus", id);
                    Alertify.success("<b style='color:white;'>Borrada exitosamente</b>");
                    getSedes();
                }
                catch (e) {
                    Alertify.error(`<b style='color:white;'>${e}</b>`);
                }
                props.loading(false);
             }, 
            function(){ Alertify.error("<b style='color:white;'>Operacion cancelada<b>")}
        );
    }

    return(
        <div id="sede_container">
            <h1>Sedes</h1>
            <form id="form_sede" onSubmit={handleSubmit}>
                <div id="sede_name_info" className="info_container" ref={sede_name_contain}>
                    <label htmlFor="sede_name_input" id="sede_name_label">Nombre</label>
                    <input
                        type="text" id="sede_name_input"
                        maxLength="50" required onFocus={handleFocus} onBlur={handleBlur}
                        value={name} onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <input id="sede_submit" type="submit" value="Guardar" className="btn_submit" />
            </form>
            {
                (sedes.length > 0)
                ?
                <div className="table_contain">
                        <table id="table_sede" border="1">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Nombre</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sedes.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.campusname}</td>
                                            <td>
                                                <img
                                                    src={deleteIcon} alt="Eliminar" id="IT_delete"
                                                    onClick={() => handleDeleteSede(item._id)}
                                                    title="Eliminar IT"
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
            </div>
        :
            <h3>Sin sedes.</h3>
        }
        </div>
    )
}

export default Sede;