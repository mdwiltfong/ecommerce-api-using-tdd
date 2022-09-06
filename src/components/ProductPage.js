import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
// import Tshirt from '../images/Tshirt.jpg'

const ProductPage = () => {
    
    const params = useParams();
    // console.log(params.product)
    const [productData, setProductData] = React.useState([])

    const getProductData = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_ORIGIN}/api/products/${params.product}`);
            const jsonData = await response.json();

            // console.log(jsonData)
            setProductData(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getProductData();
    }, []);

    const [formData, setFormData] = React.useState()

    const handleSubmit = (event) => {
        console.log(event)
        setFormData(event.target.value)
    }
    
    const handleChange = (event) => {
        event.preventDefault()
        console.log(formData);
    }
    
    const delay = () => {
        if (productData.length > 0) {
            console.log(productData.rows[0].image1)
            return true
        } 
    }

    return (
    <div className='container'>
        {delay() && <img src={productData.rows[0].image1} className='tshirt' data-test='tshirt-image' alt=''/>}
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

export default ProductPage