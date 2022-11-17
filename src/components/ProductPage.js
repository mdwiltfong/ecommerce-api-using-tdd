import React from 'react'
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const ProductPage = () => {
    const params = useParams();
    // console.log(params)
    // props.setProductParams(params.product);
    const navigate = useNavigate();
    const [sessCart, setSessCart] = useOutletContext();
    const [sizeAlert, setSizeAlert] = React.useState(false);
    const [productData, setProductData] = React.useState({
        size: "",
        quantity: 1,
        productName: params.product,
        // productId: sessCart ? sessCart.data.cart
    })
    // console.log(productData);

    const getProductData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_ORIGIN}/api/products/${params.product}`,
                {
                    withCredentials: true,
                });
            //   console.log(response);
            return response.data;
        } catch (err) {
            console.error(err.message)
        }
    }

    const addToCart = async () => {
        let body = productData;
        try {
            if (body.size === "") {
                return setSizeAlert(true);
            }
            setSizeAlert(false);
            if (!sessCart) {
            const newItemResponse = await axios.post(`${process.env.REACT_APP_ORIGIN}/api/cart`, body, { withCredentials: true });
            if(newItemResponse.status === 201) {
                console.log("First item successfully added to cart");
                // console.log(newItemResponse)
            }
            // console.log(newItemResponse);
            return setSessCart(newItemResponse);
            }
        } catch (err) {
            console.error(err.message);
        }
        try {
            body = {productData, sessCart}
            const response = await axios.get(`${process.env.REACT_APP_ORIGIN}/api/products/${params.product}`,
                    {
                        withCredentials: true,
                    });
                let productId = response.data.rows[0].id;
                // console.log(productId);
            
            // console.log(body);
            if (!(productId in sessCart.data.cart)) {  
                console.log("Item currently not present in cart")  
                const newItemIdResponse = await axios.put(`${process.env.REACT_APP_ORIGIN}/api/cart/addNewItem`, body, { withCredentials: true });
                if(newItemIdResponse.status === 201) {
                    console.log("New item successfully added to cart");
                    console.log(newItemIdResponse);
                    return setSessCart(newItemIdResponse);
                };
            }
        } catch (error) {
            console.log(error)
        }
        try {
            body = {productData}
            const response = await axios.get(`${process.env.REACT_APP_ORIGIN}/api/products/${params.product}`,
                    {
                        withCredentials: true,
                    });
                let productId = response.data.rows[0].id;
                // console.log(productId);
            
            // console.log(body);
            if (productId in sessCart.data.cart) {
                console.log(sessCart.data.cart)
                if (productData.size in sessCart.data.cart[productId]) {
                    console.log('Same size + 1')
                    const sameItemSizeResponse = await axios.put(`${process.env.REACT_APP_ORIGIN}/api/cart/addOneToSize`, body, { withCredentials: true });
                    if(sameItemSizeResponse.status === 201) {
                        console.log("Same size successfully added to cart");
                        console.log(sameItemSizeResponse);
                        return setSessCart(sameItemSizeResponse);
                    };

                }
                console.log("Item size currently not present in cart")  
                const newItemIdSizeResponse = await axios.put(`${process.env.REACT_APP_ORIGIN}/api/cart/addNewSize`, body, { withCredentials: true });
                if(newItemIdSizeResponse.status === 201) {
                    console.log("New item size successfully added to cart");
                    console.log(newItemIdSizeResponse);
                    return setSessCart(newItemIdSizeResponse);
                };
            }
        } catch (error) {
            console.log(error)
        }
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    if (productData.size === "") {

    }

    if (!('product' in params)) {
        navigate('/');
    }

    const query = useQuery(['products'], getProductData);

    if (query.status === "loading") {
        return <div>Loading...</div>
    }

    if (query.status === "error") {
        return <div>Error</div>
    }

    if (query.data.rows.length === 0) {
        return <div>Page not found</div>
    }

    // console.log(query.data.rows[0].image2)

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event)
        // setProductData(event.target.value)
    }

    const handleChange = (event) => {
        setProductData(prevProductData => {
            return {
                ...prevProductData,
                [event.target.name]: event.target.value
            }
        })
    }

    const htmlString = query.data.rows[0].product_description;

    return (
        <div className='container'>
            <img src={query.data.rows[0].image1} className='tshirt' data-test='tshirt-image' alt='' />
            <div className='specs'>
                <div dangerouslySetInnerHTML={{ __html: htmlString }} />
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
                    <br />
                    <br />
                    {sizeAlert && <div>
                        <p data-test='size-alert' className='size-alert'>Please choose a size</p>
                        <br />
                    </div>}
                    <button data-test='add-to-cart' onClick={addToCart}>Add to Cart</button>
                </form>
            </div>
        </div>
    )
}

export default ProductPage