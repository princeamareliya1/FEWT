import React, { useState } from 'react'

function Login({handleLogin}) {
    const [user,setUser]= useState("")
    const [pass,setPass] = useState("")
    const submit=(e)=>{
      e.preventDefault();
      if(user === "Darshan" && pass === "541"){
        handleLogin(user,pass);
      }else{
        alert("Invalid username or password!");
      }
    }
  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Name:</label>
        <input type="text" name="" id="" value={user} onChange={(e)=>[setUser(e.target.value)]}/>
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={submit}>Login</button>
      </form>
    </div>
  )
}

export default Login
