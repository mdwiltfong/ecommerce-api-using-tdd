import React from 'react'

const Register = () => {
  return (
    <div className='register'>
        <div className='profile-image' data-test='profile-image'></div>
        <h2 data-test='header'>Register a new <br/> account below!</h2>
        <form>
            <input
                className='username'
                data-test='username'
                placeholder='Username'
                name='username'
            />
            <input
                className='password'
                data-test='password'
                placeholder='Password'
                name='password'
            />
            <input
                className='confirm-password'
                data-test='confirm-password'
                placeholder='Confirm Password'
                name='confirm-password'
            />
            <br/>
            <input
                type="checkbox" 
                id="remember-me" 
                // checked={formData.isFriendly}
                // onChange={handleChange}
                name="remember-me"
                />
            <label htmlFor='remember-me'>Remember me</label>
            <br/>
            <button data-test='register' className='register-button'>Register</button>
        </form>
    </div>
  )
}

export default Register