import React from 'react';
import { useRef, useState} from 'react';
import './SearchUser.scss';

const SearchUser = (props) => {

    const input_search_container = useRef();
    const input_search = useRef();
    const ul_result = useRef();
    const [userSearched, setUserSearched] = useState("");
    const [focusInput, setFocusInput] = useState(false);

    const handleFocus = (e) => {
        input_search_container.current.className = "info_containerR input_focusR";
        setFocusInput(true);
      }

    const handleBlur = (e) => {
        input_search_container.current.className = "info_containerR";
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
      <div id="search_user_containerR">
          <form id="user_form" onSubmit={handleSubmit} autoComplete="off">
              <div ref={input_search_container} id="user_search" className="info_containerR">
                  <label htmlFor="user_search_input">Asignado</label>
                  <input
                      type="text" id="user_search_input" ref={input_search}
                      className="search_inputR" onChange={onChangeUserSearch}
                      onFocus={handleFocus} onBlur={handleBlur} value={userSearched}
                  />
                  {
                      (userSearched !== "" & !props.users.includes(userSearched))
                      ?
                          //(focusInput)?
                              <ul ref={ul_result}>
                                  {
                                      props.users.map((item, index) => (
                                          (item.toLowerCase().includes(userSearched.toLowerCase()))
                                          ? <li key={index} onClick={()=>setUserSearched(item)}>{item}</li>
                                          : null//<p>{ul_result.current.clientWidth}</p>
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
