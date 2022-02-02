import React, {Component} from "react";

class Regist extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            salary:'',
            email:''
        }
        this.handleName=this.handleName.bind(this)
        this.handleSalary=this.handleSalary.bind(this)
        this.handleEmail=this.handleEmail.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleName(event){
        this.setState({
            name:event.target.value.toUpperCase()
            
        })
    }
    handleSalary(event){
        this.setState({
            salary:event.target.value
            
        })
    }
    handleEmail(event){
        this.setState({
            email:event.target.value
            
        })
    }
    handleSubmit(event) {  
        alert('You have submitted the input successfully: ' + this.state.name +" "+ this.state.salary+" "+ this.state.email);    
    }  

    render(){
       return( <div>
            <form onSubmit={this.handleSubmit}>
                <label>Name</label><br></br>
                <input type='text' value={this.state.name} onChange={this.handleName}></input><br></br>
                <label>Salary</label><br></br>
                <input type='number' value={this.state.salary} onChange={this.handleSalary}></input><br></br>
                <label>Email</label><br></br>
                <input type='email' value={this.state.email} onChange={this.handleEmail}></input><br></br>
                <button>Submit</button>
            </form>
        </div>)
    }

}

export default Regist