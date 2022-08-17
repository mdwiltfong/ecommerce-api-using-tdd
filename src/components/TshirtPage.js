import React from 'react'
import Tshirt from '../images/Tshirt.jpg'

const TshirtPage = () => {
  
    const [formData, setFormData] = React.useState()

    const handleSubmit = (event) => {
        console.log(event)
        setFormData(event.target.value)
    }
    
    const handleChange = (event) => {
        event.preventDefault()
        console.log(formData);
    }

    return (
    <div className='container'>
        <img src={Tshirt} className='tshirt' data-test='tshirt-image' alt=''/>
        <div className='specs'>
            <h2 data-test='title'>Classic</h2>
            <p data-test='price'>$35.00</p>
            <p data-test='p1'>So classy it hurts.</p>
            <p data-test='p2'>100% combed ring-spun cotton</p>
            <p data-test='p3'>Printed on Next Level garment</p>
            <p data-test='p4'>Pre-shrunk</p>
            <p data-test='p5'>Tear-away label</p>
            <form onSubmit={handleSubmit}>
                <select
                    data-test='size-drop-down'
                    value={formData}
                    onChange={handleChange}
                    >
                    <option value="">-- Choose Size --</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <br/>
                <br/>
                <button data-test='add-to-cart'>Add to Cart</button>
            </form>
        </div>
    </div>
  )
}

export default TshirtPage