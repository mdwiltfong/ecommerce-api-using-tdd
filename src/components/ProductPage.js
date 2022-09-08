import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';

const ProductPage = () => {
    
    const [formData, setFormData] = React.useState()

    const params = useParams();
    // console.log(params.product)
    
    const getProductData = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_ORIGIN}/api/products/${params.product}`);
            return response.json();
        } catch (err) {
            console.error(err.message)
        }
    }

    const query = useQuery(['products'], getProductData);

    if(query.status === "loading") {
        return <div>Loading...</div>
    }

    if(query.status === "error") {
        return <div>Error</div>
    }

    console.log(query.data.rows[0].image2)

    const handleSubmit = (event) => {
        console.log(event)
        setFormData(event.target.value)
    }
    
    const handleChange = (event) => {
        event.preventDefault()
        console.log(formData);
    }

    const htmlString = query.data.rows[0].product_description;

    return (
    <div className='container'>
        <img src={query.data.rows[0].image1} className='tshirt' data-test='tshirt-image' alt=''/>
        <div className='specs'>
            <div dangerouslySetInnerHTML={{__html: htmlString}}/>
            {/* <h2 data-test='title'>Classic</h2>
            <p data-test='price'>$35.00</p>
            <p data-test='p1'>So classy it hurts.</p>
            <p data-test='p2'>100% combed ring-spun cotton</p>
            <p data-test='p3'>Printed on Next Level garment</p>
            <p data-test='p4'>Pre-shrunk</p>
            <p data-test='p5'>Tear-away label</p> */}
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