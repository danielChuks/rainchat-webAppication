import { signInWithEmailAndPassword } from '@firebase/auth';
import React, {useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const onHandleSubmit = async (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value
    
    if(password.length < 6 ) {
      setError(true)
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
      console.log(res)


    } catch (error) {
      setError(true)
    }
  }

  

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
                <span className="logo">Rain Chart</span>
                <span className="title"> Sign In</span>
            <form onSubmit={onHandleSubmit}> 
                <input type="email"  placeholder='Enter your email '/ >
                <input type="password"  placeholder='Enter your password'/ >
                <button >Sign In</button>
                {error ? <span>Password must not be less than 6 characters</span>
                : null}
            </form>
            <p>You don't have an accout ? <Link to="/register">Register </Link></p>
        </div>
    </div>
  )
}

export default Login;