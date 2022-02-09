import React from "react";

class RandomNumber extends React.Component{
    constructor(){
        super()
        this.state =({
         max:15,
         min:1,
         result: 0
        })
    }

    onChangeMin(e){
        let amount =isNaN(e.target.value) ? 1: e.target.value
        this.setState({min : amount})
    }

    onChangeMax(e){
        let amount =isNaN(e.target.value) ? 15: e.target.value
        this.setState({max : amount})
    }

    calculateTheTip(e){
        e.preventDefault()
        let result = Math.floor(Math.random() * (parseInt(this.state.max) - parseInt(this.state.min))) + parseInt(this.state.min)
        this.setState({result})
    }

    render(){
       
        return (
            <>
            <div >
            <h1>Random Number</h1>
            <form onSubmit={(e)=>this.calculateTheTip(e)}>
                <input type ="number" step="1" value ={this.state.min}  onChange={(e)=> this.onChangeMin(e)} ></input>
                <input type ="number" step="1" value ={this.state.max}  onChange={(e)=> this.onChangeMax(e)}></input>
                <button>Random Number</button>
                <h2>Result : {this.state.result}</h2>
            </form>
            </div>
            </>
        )
    }
}

export default RandomNumber