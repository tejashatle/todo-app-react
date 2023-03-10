import { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import {Navigate} from 'react-router-dom';

class AuthenticatedRoute extends Component{
    render(){
            if(AuthenticationService.ifUserLoggedIn()){
                return {...this.props.children}
            }else{
                return <Navigate to="/login" />
            } 
    }
}

export default AuthenticatedRoute;