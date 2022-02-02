import React, {Component} from "react";

class Example extends Component{
    constructor(props){
        super(props);
        this.state={
            message:'hello all'
        }
    }
    
    render(){
        return (
        <div>
            <div>
                {this.state.message} 
            </div>
            <button onClick={this.clear()}>CLICK ME</button>
        </div>
        )
    }
}
export default Example