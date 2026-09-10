import { useEffect, useState } from "react";

function UseEffectHook() {
    const [sec , setSec] = useState(0)
    useEffect(()=>{setTimeout(()=>{setSec(sec +1)},1000)} , [sec])
    return (
        <div>
            <h1>SECOND = {sec}</h1>
        </div>
    )
}

export default UseEffectHook