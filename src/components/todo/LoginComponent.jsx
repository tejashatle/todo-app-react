import { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: 'codetej',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

       // this.handleUsernameChange = this.handleUsernameChange.bind(this)
       // this.handlePasswordChange = this.handlePasswordChange.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.loginClicked = this.loginClicked.bind(this)
    }

     handleChange(event){
       //console.log(this.state);
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    // handleUsernameChange(event){
    //    // console.log(event.target.value);
    //     this.setState({ 
    //         username: event.target.value
    //     })
    // }

    // handlePasswordChange(event){
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    loginClicked(){

        if(this.state.username === 'codetej' & this.state.password === 'password'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
             //console.log("Success")
             this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({
            //     hasLoginFailed : false,
            //     showSuccessMessage: true
            // })
        }
        else{
            //console.log("Failed")    
            this.setState({
                hasLoginFailed : true,
                showSuccessMessage: false
            })
        } 
        //console.log(this.state)
    }

    render(){
        return(
            <div className="login-component">
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-danger">Invalid Credentials</div>}
                    {/* {this.state.showSuccessMessage && <div>Login Sucessful</div>} */}
                    {/* <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage} /> */}
                    Enter Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Enter Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;