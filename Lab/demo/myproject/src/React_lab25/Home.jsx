import React from "react";
import useUser from "./useUser";

function Home() {
    const { user, setUser } = useUser();

    return (
        <div>
            <h2>Welcome, {user.username}</h2>

            <button onClick={() => setUser(null)}>
                Logout
            </button>
        </div>
    );
}

export default Home;