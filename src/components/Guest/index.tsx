import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import { Link } from "react-router-dom";

const Guest = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div>
            {isLogin ? <Login /> : <Register />}
            <button onClick={()=>setIsLogin(prevState => !prevState)}>{isLogin ? 'str' : 'stl'}</button>
            <h1>Perehod</h1>
            <Link to="/"> Guest </Link>
            <Link to="/profile"> profile </Link>
            <button><Link to="/profile"> GO TO Profile </Link></button>
        </div>
    )
}

export default Guest