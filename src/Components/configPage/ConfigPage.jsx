import './ConfigPage.scss';
import IT from './itCrud/ItCrud';
import Navbar from '../navbar/Navbar';
import Loading from '../loading/Loading';
import { useState } from 'react';

const ConfigPage = () => {

    const [loading,setLoading] = useState(true);

    return(
        <div id="configPage_container">
            <Navbar/>
            {(loading) ? <Loading /> : null}
            <div id="configPage_cont">
                <IT loading={setLoading}/>
            </div>
        </div>
    )
}

export default ConfigPage;