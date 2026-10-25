import React,{useState} from 'react';

function UserStatus(){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    let text;
    if(isLoggedIn){
        text = "Welcome User";
    }else{
        text = "Please Login";
    }

    return(
        <>
            <h2>{text}</h2>
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn?"Logout":"Login"}
            </button>
        </>
    )
}

export default UserStatus;