import React from "react";

function Propsdemo(){
    return(
        <div>
            <Child name="Prince" age={18}/>
        </div>
    )
}
function Child({name,age}){
    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
        </div>
    )
}

export default Propsdemo