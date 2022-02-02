import React, {Component} from "react";

class Calculate extends Component{
    constructor(){
        super()
        this.state={
            count:0

        }
    }
    increase(){
        this.setState({
            count : this.state.count + 1
        })
    }
    
    render(){
        return(<div> <h1>You have clicked {this.state.count} times</h1><br></br>
            <button onClick={()=>this.increase()}>click me</button></div> )
    }
}
export default Calculate