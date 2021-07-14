import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './SearchUser.scss';

const SearchUser = (props) => {

    const input_search_container = useRef();
    const input_search = useRef();
    const ul_result = useRef();
    const [userSearched, setUserSearched] = useState("");
    const [focusInput, setFocusInput] = useState(false);

    /*useEffect(() => {
        //setUsers(props.users);
        /*usrRecived.forEach(element => {
            let nameUsr = `${element.username} ${element.lastname} ■ ${element.account}`;
            usrState.push(nameUsr);
        });*/
    //}, []);

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
        props.searchUser(userSearched);
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
                            <ul ref={ul_result}>   
                                {
                                    props.users.map((item, index) => (
                                        (item.includes(userSearched))
                                        ? <li key={index} onClick={()=>{setUserSearched(item)}}>{item}</li>
                                        : null
                                    ))
                                }
                            </ul>
                        : null
                    }
                </div>
            </form>
        </div>
    );
}

export default SearchUser;