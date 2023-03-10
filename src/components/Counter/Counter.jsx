import { Component } from 'react';
import './counter.css';
import PropType from "prop-types";


class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }

    render() {
    return (
      <div className="App">
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <span className="count">{ this.state.counter }</span>
        <div><button className='reset' onClick={this.reset}>Reset</button></div>
      </div>
    );
  }

  reset(){
    this.setState({counter: 0})
  }

   increment(by){   
   // console.log(`Parent Increment called ${by}`); 
        this.setState(    
            (prevState) => {
           return {counter: prevState.counter + by}
        })
    }

    decrement(by){   
    //console.log(`Parent Decrement called ${by}`); 
        this.setState(  
            (prevState) => {
           return {counter: prevState.counter - by}
        })
    }
}


class CounterButton extends Component {

    //no need of this since we are calling parent methods directly
    // constructor(){
    //     super();
    //     this.state = {
    //         counter: 0
    //     }

    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }

   // render = () => {
    render(){

       // const css = {fontSize: "50px", padding: "15px 10px"}
        return (
            <div className="counter">
            <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            {/*<span className="count">{ this.state.counter }</span>*/}
            </div>
        );
    }

    //no need of this since we are calling parent methods directly
    //increment = () => {
    // increment(){    
    //     this.setState(
            
    //         (prevState) => {
    //         return {counter: prevState.counter + this.props.by}
    //     });

    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement(){    
    //     this.setState(
            
    //         (prevState) => {
    //         return {counter: prevState.counter - this.props.by}
    //     });

    //     this.props.decrementMethod(this.props.by);
    // }

}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropType.number
}



export default Counter