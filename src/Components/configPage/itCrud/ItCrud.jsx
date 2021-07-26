import { useState, useEffect } from 'react';
import './ItCrud.scss';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { ApiGet, RegisterITApiPost, DeleteITApiDelete } from '../../../services/utils/Api';
import deleteIcon from '../../../assets/img/delete_icon.png';

const IT = (props) => {
    /*const input_mail_IT_container = useRef();
    const input_name_IT_container = useRef();*/

    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [IT, setIT] = useState([]);

    useEffect(() => {
        getIT().then(() => props.loading(false));
    }, [])

    const getIT = async () => {
        try {
            let res = await ApiGet("IT");
            let aux = res.result.cont.user;
            setIT(aux);
        }
        catch (e) {
            console.log(e);
        }
    }

    const cleanInputs = () => {
        setName("");
        setMail("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let params = [
            name,
            mail
        ]
        props.loading(true);
        try {
            await RegisterITApiPost("IT/", params);
            Alertify.success("<b style='color:white;'>Registro completo</b>");
            cleanInputs();
            getIT();
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
        props.loading(false);
    }

    const handleDeleteIT = async (id) => {
        Alertify.confirm('Borrar IT', '¿Esta seguro de querer borrar esta persona de IT?', 
            async function(){ 
                props.loading(true);
                try {
                    await DeleteITApiDelete("IT", id);
                    Alertify.success("<b style='color:white;'>Borrado exitosamente</b>");
                    getIT();
                }
                catch (e) {
                    Alertify.error(`<b style='color:white;'>${e}</b>`);
                }
                props.loading(false);
             }, 
            function(){ Alertify.error("<b style='color:white;'>Operacion cancelada<b>")});
    }

    const handleFocus = (e) => {
        switch (e.target.id) {
            case 'IT_name_input':
                document.getElementById('IT_name_info').className = "info_container input_focus";
                break;
            case 'IT_mail_input':
                document.getElementById('IT_mail_info').className = "info_container input_focus";
                break;
            default:
                document.getElementById('IT_submit').className = "info_container input_focus";
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
        <div id="IT_container">
            <h1>Miembros de IT</h1>
            <form id="form_IT" onSubmit={handleSubmit}>
                <div id="IT_name_info" className="info_container">
                    <label htmlFor="IT_name_input" id="IT_name_label">Nombre</label>
                    <input
                        type="text" id="IT_name_input"
                        maxLength="50" required onFocus={handleFocus} onBlur={handleBlur}
                        value={name} onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div id="IT_mail_info" className="info_container">
                    <label htmlFor="IT_mail_input" id="IT_mail_label">Correo electronico</label>
                    <input
                        type="email" id="IT_mail_input" placeholder="Correo electronico con dominio de arkusnexus"
                        maxLength="50" pattern="[A-Za-z0-9._%+-]+@arkusnexus.com"
                        required onFocus={handleFocus} onBlur={handleBlur}
                        value={mail} onChange={(e) => { setMail(e.target.value) }}
                    />
                </div>
                <input id="IT_submit" type="submit" value="Guardar" className="btn_submit" />
            </form>
            {
                (IT.length > 0)
                ?
                <div className="table_contain">
                        <table id="table_IT" border="1">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Nombre</th>
                                    <th>Correo electronico</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    IT.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.ITname}</td>
                                            <td>{item.ITemail}</td>
                                            <td>
                                                <img
                                                    src={deleteIcon} alt="Eliminar" id="IT_delete"
                                                    onClick={() => handleDeleteIT(item._id)}
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
                <h3>Sin personas en IT.</h3>
            }
        </div>
    )
}

export default IT;