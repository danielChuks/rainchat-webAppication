import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
                <span className="logo">Rain Chart</span>
                <span className="title"> Register </span>
            <form> 
                <input type="email"  placeholder='Enter your email '/ >
                <input type="password"  placeholder='Enter your password'/ >
                <button>Sign In</button>
            </form>
            <p>You don't have an accout ? Register </p>
        </div>

    </div>
  )
}

export default Login;