import React, {Component}  from "react";

class Mike extends Component{
    constructor(){
        super()
        this.state={
            message : "Click to enter the browser"
        }

    }
    change(){
        this.setState({
            message : "You can exit the browser now"
        })
    }

    render(){
        return (
            <div><h1>{this.state.message}</h1>
            <button onClick={()=>this.change()}>Subscribe</button></div>
        )}
}
export default Mike