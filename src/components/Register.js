import React from 'react'

const Register = () => {
  
    const [registerData, setRegisterData] = React.useState(
        {
            username: '',
            password: '',
            confirmPassword: ''
        }
    )
        // console.log(registerData)
    const submitData = (event) => {
        event.preventDefault();
        
        setRegisterData(
            {
                username: '',
                password: '',
                confirmPassword: '' 
            }
            )

    }
    
    const handleChange = (event) => {
        console.log(event.target.value);
        setRegisterData(prevRegisterData => {
            return {
                ...prevRegisterData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
    <div className='register' data-test='register'>
        <div className='profile-image' data-test='profile-image'></div>
        <h2 data-test='header'>Register a new <br/> account below!</h2>
        <form onSubmit={submitData}>
            <input
                className='username'
                data-test='username'
                placeholder='Username'
                name='username'
                onChange={handleChange}
                value={registerData.username}
            />
            <input
                className='password'
                data-test='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={registerData.password}
            />
            <input
                className='confirm-password'
                data-test='confirm-password'
                placeholder='Confirm Password'
                name='confirmPassword'
                onChange={handleChange}
                value={registerData.confirmPassword}
            />
            {/* <br/> */}
            {/* <input
                type="checkbox" 
                id="remember-me" 
                // checked={formData.isFriendly}
                // onChange={handleChange}
                name="remember-me"
                />
            <label htmlFor='remember-me'>Remember me</label> */}
            <br/>
            <button data-test='register-button' className='register-button'>Register</button>
        </form>
    </div>
  )
}

export default Register