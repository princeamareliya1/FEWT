import B from './B'
import React, { useState } from 'react'

function A(props) {
  const [input,setInput] = useState("")
  return (
    <>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <B name={props.name} setName={props.setName} input={input}/>
    </>
  )
}

export default A
