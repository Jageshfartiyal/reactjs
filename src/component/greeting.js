import React from 'react'

const calculate=(props)=>{
    if(props.op==='add'){
        return <h1>The result is {props.a+props.b} </h1>
    }else if(props.op==='minus'){
        return <h1>The result is {this.a-this.b} </h1>
    }
}

export default calculate