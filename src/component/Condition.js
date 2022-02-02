import React, {Component} from "react";

class Condition extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return(<div>Welcome Jagesh</div>)
        }else{
            return(<div>Welcome Guest</div>)
    }
}
}
export default Condition