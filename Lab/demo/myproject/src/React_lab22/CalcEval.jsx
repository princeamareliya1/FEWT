import React, { useState } from 'react'

function CalcEval() {
    const [expression,setExpression] = useState("")
    const [result,setResult] = useState("")
    const addValue = (value) => {
        setExpression(expression + value)
    }
    const calculate= ()=>{
        setResult(eval(expression))
    }
    const clear = () => {
        setExpression("")
        setResult("")
    }
  return (
    <div>
        <h1>Calculator</h1>
        <input type="text" value={expression} readOnly/>
        <h2>Result : {result}</h2>
        <div>
            <button onClick={()=>{addValue("7")}}>7</button>
            <button onClick={()=>{addValue("8")}}>8</button>
            <button onClick={()=>{addValue("9")}}>9</button>
            <button onClick={()=>{addValue("/")}}>/</button>    
        </div>
        <div>
            <button onClick={()=>{addValue("4")}}>4</button>
            <button onClick={()=>{addValue("5")}}>5</button>
            <button onClick={()=>{addValue("6")}}>6</button>
            <button onClick={()=>{addValue("*")}}>*</button>
        </div>
        <div>
            <button onClick={()=>{addValue("1")}}>1</button>
            <button onClick={()=>{addValue("2")}}>2</button>
            <button onClick={()=>{addValue("3")}}>3</button>
            <button onClick={()=>{addValue("-")}}>-</button>
        </div>
        <div>
            <button onClick={()=>{addValue("0")}}>0</button>
            <button onClick={()=>{addValue(".")}}>.</button>
            <button onClick={()=>{addValue("%")}}>%</button>
            <button onClick={()=>{addValue("+")}}>+</button>
        </div>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
    </div>
  )
}

export default CalcEval
