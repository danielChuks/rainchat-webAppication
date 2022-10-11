import React from 'react'
import Add from "../img/add.png"

function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
                <span className="logo">Rain Chart</span>
                <span className="title"> Register </span>
            <form> 
                <input type="text"  placeholder='Enter your name '/ >
                <input type="email"  placeholder='Enter your email '/ >
                <input type="password"  placeholder='Enter your password'/ >
                <input style={{display: "none"}} type="file" id="file" placeholder="select a file"/> 
                <label htmlFor="file">
                    <img src={Add} alt="ava"/>
                    <span> Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You have an accout ? Login </p>
        </div>

    </div>
  )
}

export default Register