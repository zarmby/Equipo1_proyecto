import React from 'react';
import './SearchUser.scss';
import SearchIcon from '../../../assets/img/search.png';

class SearchUser extends React.Component {
    constructor(props) {
        super(props);
        this.input_search = React.createRef();
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus(e) {
        this.input_search.current.className = "login_input_focus";
    }

    handleBlur(e) {
        this.input_search.current.className = "";
    }

    render() {
        return (
            <div id="search-user-container">
                <div id="user_page">
                    <h1>Informacion de usuario</h1>
                    <div ref={this.input_search} id="user_search">
                        <input type="text" id="user_search_input" placeholder="Escriba el nombre del usuario a consultar" onFocus={this.handleFocus} onBlur={this.handleBlur} />
                        <input type="image" src={SearchIcon} id="user_search_btn" alt="Buscar" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchUser;