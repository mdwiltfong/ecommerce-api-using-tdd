import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';

const ProductPage = () => {
    const [sizeAlert, setSizeAlert] = React.useState(false)
    const [productData, setProductData] = React.useState({
        size: ""
    })
    console.log(productData);

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
    
    if(productData.size === "") {

    }

    

    const query = useQuery(['products'], getProductData);

    if(query.status === "loading") {
        return <div>Loading...</div>
    }

    if(query.status === "error") {
        return <div>Error</div>
    }

    if(query.data.rows.length === 0) {
        return <div>Page not found</div>
    }

    console.log(query.data.rows[0].image2)

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event)
        // setProductData(event.target.value)
    }
    
    const handleChange = (event) => {
        setProductData(event.target.value)
    }

    const htmlString = query.data.rows[0].product_description;

    return (
    <div className='container'>
        <img src={query.data.rows[0].image1} className='tshirt' data-test='tshirt-image' alt=''/>
        <div className='specs'>
            <div dangerouslySetInnerHTML={{__html: htmlString}}/>
            <form onSubmit={handleSubmit}>
                <select
                    id='size'
                    data-test='size-drop-down'
                    value={productData.size}
                    onChange={handleChange}
                    name="size"
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