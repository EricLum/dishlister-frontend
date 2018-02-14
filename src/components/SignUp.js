import React from 'react'

const SignUp = (props) => {
  return (
    <div className= 'SignUp blue darken-3'>
      <form onSubmit={props.handleSignUp} className='login'>
        <input type='text' placeholder='Username'></input>
        <input type='password' placeholder='Password'></input>
        <input type='submit'></input>
      </form>
  </div>)
}

export default SignUp
