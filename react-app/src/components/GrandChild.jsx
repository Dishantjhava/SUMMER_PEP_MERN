import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

function GrandChild() {

    const [user, setUser] = useState('');

    const {name, setName} = useContext(UserContext);

    return (


        <div style={{border: '1px solid blue', padding: '10px'}}>

            <input type="text" placeholder="Enter your name"  onChange={(e) => setUser(e.target.value)}/>
            <button onClick={() => setName(user)}>Set Name</button>
            <p>This is GrandChild component</p>
            <p>Hello: {name}</p>
        </div>
    )
}

export default GrandChild;