import './ConfigPage.scss';
import IT from './itCrud/ItCrud';
import Sede from './sedeCrud/SedeCrud';
import Navbar from '../navbar/Navbar';
import Loading from '../loading/Loading';
import { useState } from 'react';
import { useEffect } from 'react';

const ConfigPage = () => {

    const [loading, setLoading] = useState(true);
    const IDAdmon = "60f8df9e96f4eb00156a8353";

    useEffect(() => {
        let loggedUser = window.localStorage.getItem('UserLogged');
        let UserLogged = JSON.parse(loggedUser)
        if (UserLogged.IDrole !== IDAdmon)
            window.location.href = '/user';
    }, [])

    return (
        <div id="configPage_container">
            <Navbar />
            {(loading) ? <Loading /> : null}
            <div id="configPage_cont">
                <IT loading={setLoading} />
                <Sede loading={setLoading} />
            </div>
        </div>
    )
}

export default ConfigPage;