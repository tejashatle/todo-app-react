import { Component } from "react";

class ListTodosComponent extends Component{

    constructor(){
        super()
        this.state = {
            todos: 
            [
                {id: 1, description: "This is first todo.", isCompleted: false, targetDate: new Date()},
                {id: 2, description: "This is second todo.", isCompleted: false, targetDate: new Date()},
                {id: 3, description: "This is third todo.", isCompleted: false, targetDate: new Date()}
            ]
        }
    }

    render(){
        return (
            <div>
                <h1>List Todo</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo => 
                                    <tr  key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.isCompleted.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;