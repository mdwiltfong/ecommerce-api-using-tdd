import React from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
    let navigate = useNavigate()
    React.useEffect(() => {
        navigate('/');
    })

    return (
    <div>Redirect</div>
  )
}

export default Redirect