import React, {Component} from "react";
import { Link } from "react-router-dom";


class WelcomeComponent extends Component{
    render(){
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">Welcome {this.props.params.name}. You can access your Todo List <Link to="/todos">here</Link>.</div>
            </div>
        )
    }
}

export default WelcomeComponent;