import React from 'react'

function Map_demo() {
    const name = ["Darshan","university","rajkot","gujarat"];
    
  return (
    <div>
        <ul>
            {name.map((name,index)=>(
                <li key={index}>{name}</li>
            ))}
        </ul>    
    </div>
  )
}

export default Map_demo
