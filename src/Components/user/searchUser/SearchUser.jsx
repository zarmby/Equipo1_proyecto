import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './SearchUser.scss';

const SearchUser = (props) => {

    const input_search = useRef();
    const [userSearched, setUserSearched] = useState("");

    useEffect(() => {
        /*usrRecived.forEach(element => {
            let nameUsr = `${element.username} ${element.lastname} ■ ${element.account}`;
            usrState.push(nameUsr);
        });*/
    }, []);

    const handleFocus = (e) => {
        input_search.current.className = "info_container input_focus";
    }

    const handleBlur = (e) => {
        input_search.current.className = "info_container";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchUser(userSearched);
    }

    const onChangeUserSearch = (e) => {
        setUserSearched(e.target.value);
        /*props.users.map((item)=>(
            (item.includes(userSearched))
            ?( setUsrFounded(true),
                console.log(item)
            )
            : null
        ));
        console.log(usrFounded);*/
    }

    return (
        <div id="search_user_container">
            <form id="user_form" onSubmit={handleSubmit} autoComplete="off">
                <div ref={input_search} id="user_search" className="info_container">
                    <label htmlFor="user_search_input">Escriba el nombre del usuario a consultar</label>
                    <input
                        type="text" id="user_search_input"
                        className="search_input" onChange={onChangeUserSearch}
                        onFocus={handleFocus} onBlur={handleBlur} value={userSearched}
                    />
                    <input type="submit" id="user_search_submit" className="search_input" value="" />
                    {/*
                        (userSearched !== ""/* & !props.users.includes(userSearched)*//*)
                        ?
                            <ul>   
                                {
                                        users.map((item, index) => (
                                            /*(item.includes(userSearched))
                                                ? <li key={index} onClick={()=>{setUserSearched(item)}}>{item}</li>
                                                : null*/
                                                /*
                                            <li key={index} onClick={()=>{setUserSearched(item)}}>{item}</li>
                                        ))
                                    
                                        
                                        }
                            </ul>
                        : null
                    */}
                </div>
            </form>
            {
                
            props.users.forEach(element => {
                let nameUsr = `${element.username} ${element.lastname} ■ ${element.account}`;
                console.log(nameUsr);
            })
            }
        </div>
    );
}

export default SearchUser;