import React from 'react'
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const ProductPage = (props) => {
    const params = useParams();
    // console.log(params)
    // props.setProductParams(params.product);
    const navigate = useNavigate();
    const [sessCart, setSessCart] = useOutletContext();
    const [sizeAlert, setSizeAlert] = React.useState(false);
    const [productData, setProductData] = React.useState({
        size: "",
        quantity: 1,
        productName: params.product
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

    // let cart = {id1:
    //     { 
    //       small: {
    //         quantity: 1
    //       },
    //       medium: {
    //         quantity: 2
    //       }
    //     },
    //     id2:
    //     {
    //       large: {
    //         quantity:3
    //       }
    //     }
    //   }

//       let newItem = 
//       {
//         [productId]: {
//             [productData.size]: {
//                 quantity: [productData.quantity]
//             }
//         }
//       };
// let updatedCart = {...cart, ...newItem}

// let totalItems = 0;        
// for (let i = 0; i < cart.length; i++) {
// let unitCount = 0;
// totalItems += unitCount;
// for (let j = 0; j < cart.id.length; j++) {
//   unitCount += cart[i][j].quantity;
// }
// console.log(totalItems);
// }

    const addToCart = async () => {
        try {
            const body = productData;
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
            console.log(newItemResponse);
            return setSessCart(newItemResponse);
            }
            const response = await axios.get(`${process.env.REACT_APP_ORIGIN}/api/products/${params.product}`,
                {
                    withCredentials: true,
                });
            let productId = response.data.rows.id;
            for (let i = 0; i < sessCart.data.cart.length; i++) {
                if (sessCart.data.cart[i] !== productId) {
                    const newItemResponse = await axios.post(`${process.env.REACT_APP_ORIGIN}/api/cart`, body, { withCredentials: true });
                    if(newItemResponse.status === 201) {
                        console.log("New item successfully added to cart");
                    }; 
                console.log(newItemResponse);
                return setSessCart(newItemResponse);
                };
            };
            // const existingItemResponse = await axios.put(`${process.env.REACT_APP_ORIGIN}/api/cart/${params.product}`, sessCart, { withCredentials: true });
            // console.log(existingItemResponse);
            // setSessCart(existingItemResponse);
        } catch (err) {
            console.error(err.message);
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