import React from 'react';
import Granim from 'react-granim';
import 'alertifyjs/build/css/alertify.css';
import Loading from '../loading/Loading';
import {SedeApiGet} from '../../services/utils/Api';

import './LoginStyles.scss';
import logo from '../../assets/img/Logo.png';
import LoginForm from './loginform/LoginForm';
import RegisterForm from './registerform/RegisterForm';


class Login extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      "default-state": {
          gradients: [
              ['#212B35', '#DD1F26'],
              ['#DD1F26', '#DD1F26'],
              ['#DD1F26', '#212B35'],
              ['#212B35', '#212B35'],
              ['#212B35', '#212B35'],
          ],
          transitionSpeed: 1000
      },
      loading: true,
      sedes : []
    };

    this.login_register_div = React.createRef();
    this.div_login = React.createRef();
    this.div_register = React.createRef();
    this.child_login = React.createRef();
    this.child_register = React.createRef();
    this.handleRegister = this.handleRegister.bind(this);
    this.handleCancelRegister = this.handleCancelRegister.bind(this);
    this.Loading = this.Loading.bind(this);
    this.Loaded = this.Loaded.bind(this);

    //Alertify.set('notifier','position', 'top-center');
  }

  Loading(){
    this.setState({loading:true}); 
  }
  Loaded(){
    this.setState({loading:false}); 
  }


  async componentDidMount(){
    try{
      const sedesGet = await SedeApiGet("campus/");
      const dataSedes = await sedesGet;
      this.setState({sedes : dataSedes.result.cont.campus})
    }
    catch(e){
      console.log(e);
    }    
    this.Loaded();
    if(this.child_login.current)
      this.child_login.current.cleanInputsChild();
  }

  handleRegister(){
    this.child_register.current.cleanInputsChild();
    let width_container  = this.login_register_div.current.clientWidth;
    this.div_login.current.style.transform = "translateX(-"+width_container+"px)";
    this.div_register.current.style.transform = "translateX(-"+width_container+"px)";
  }
  handleCancelRegister(){
    this.child_login.current.cleanInputsChild();
    let width_container  = this.login_register_div.current.clientWidth;
    this.div_login.current.style.transform = "translateX(0px)";
    this.div_register.current.style.transform = "translateX("+width_container+"px)";
  }

  render(){
    return(
      <div className = "login_container">
        {(this.state.loading) ? <Loading/> : null}
        <Granim id="granim" states={this.state} style={GradStyle} ></Granim>
        <div id="login_back"/>
        <div id = "login_form_container">
          <div id="login_register_container" ref={this.login_register_div}>
            <div className="form_head">
              <img src = {logo} alt="Logo Arkus"></img>
              <span>Inventory Arkus Center</span>
            </div>
            <LoginForm  
              ref = {this.child_login}
              reference = {this.div_login}
              register = {this.handleRegister}
              loading = {this.Loading}
              loaded = {this.Loaded} 
            />
            <RegisterForm
              ref = {this.child_register}
              reference = {this.div_register} 
              cancelRegister = {this.handleCancelRegister}
              sedes = {this.state.sedes}
              loading = {this.Loading}
              loaded = {this.Loaded} 
            />
          </div>
        </div>
      </div>
    );
  }
}

const GradStyle = {
  position: 'absolute',
  display: 'block',
  width: '100%',
  height: '100%',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -10000
}

export default Login;
