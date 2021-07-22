import { useRef, useState, useEffect } from 'react';
import './SearchUser.scss';

const SearchUser = (props) => {

    const input_search_container = useRef();
    const input_search = useRef();
    const ul_result = useRef();
    const [users, setUsers] = useState([]);
    const [userSearched, setUserSearched] = useState("");
    const [focusInput, setFocusInput] = useState(false);

    useEffect(()=>{
        setUsers(props.users.sort());
    },[]);

    const handleFocus = (e) => {
        input_search_container.current.className = "info_container input_focus";
        setFocusInput(true);
    }

    const handleBlur = (e) => {
        input_search_container.current.className = "info_container";
        setFocusInput(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let us = userSearched;
        if(ul_result.current)
            if(ul_result.current.hasChildNodes())
                us = ul_result.current.firstChild.innerHTML;

        setUserSearched(us);
        props.searchUser(us);
    }

    const onChangeUserSearch = (e) => {
        setUserSearched(e.target.value);
    }

    return (
        <div id="search_user_container">
            <form id="user_form" onSubmit={handleSubmit} autoComplete="off">
                <div ref={input_search_container} id="user_search" className="info_container">
                    <label htmlFor="user_search_input">Escriba el nombre del usuario a consultar</label>
                    <input
                        type="text" id="user_search_input" ref={input_search}
                        className="search_input" onChange={onChangeUserSearch}
                        onFocus={handleFocus} onBlur={handleBlur} value={userSearched}
                    />
                    <input type="submit" id="user_search_submit" className="search_input" value="" />
                    {
                        (userSearched !== "" & !props.users.includes(userSearched))
                        ?
                            //(focusInput)?
                                <ul ref={ul_result}>   
                                    {
                                        /*users.map((item, index) => (
                                            (item.toLowerCase().includes(userSearched.toLowerCase()))
                                            ? <li key={index} onClick={()=>setUserSearched(item)}>{item}</li>
                                            : null//<p>{ul_result.current.clientWidth}</p>
                                        ))*/
                                        /*(users.length>0)
                                            ?
                                                users.map((item, index) => (
                                                    <li key={index} onClick={()=>setUserSearched(item)}>{item}</li>
                                                ))
                                            :
                                                <li>nada</li>*/
                                        users.map((item, index) => (
                                            (item.toLowerCase().includes(userSearched.toLowerCase()))
                                            ? <li key={index} onClick={()=>setUserSearched(item)}>{item}</li>
                                            : null
                                        ))
                                    }
                                </ul>
                            //:null
                        : null
                    }
                </div>
            </form>
        </div>
    );
}

export default SearchUser;