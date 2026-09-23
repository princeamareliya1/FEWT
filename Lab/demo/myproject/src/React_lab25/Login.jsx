import React, { useState } from "react";
import useUser from "./useUser";

function Login() {
    const { setUser } = useUser();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "abcd" && password === "111") {
            setUser({ username: username });
        } else {
            alert("Invalid username or password");
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;