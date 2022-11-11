import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios';

const ShoppingCart = () => {
    const [sessCart, setSessCart] = useOutletContext();
    const [cartArray, setCartArray] = React.useState([]);
    const [matchedProductData, setMatchedProductData] = React.useState();
    console.log(sessCart);
    // var cartArr = [];
    // console.log(sessCart.data.cart);
    
    let itemId = async (carts) => {
        let cartArr = [];
        for (const productId in carts) {
          cartArr.push(parseInt(productId));
        }
        console.log(cartArr); 
        setCartArray(cartArr);
        await getProductMatches(cartArr);
      };
      
    
    const getProductMatches = async (cartArr) => {
        let body = cartArr;
        console.log(body);
        try {
            const response = await axios.post(`${process.env.REACT_APP_ORIGIN}/api/products/match`, body, 
                {
                    withCredentials: true,
                }
            );
            
            console.log(response.data);
            setMatchedProductData(response.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        itemId(sessCart.data.cart);
        if (matchedProductData) {
            formatItemList();
        }
    }, [sessCart]); 

    let output = [];
    let formatItemList = () => {
        matchedProductData.forEach(dbItem => {
            let cartItem = sessCart.data.cart[dbItem.id];
            sizeInCartItem(cartItem, output, dbItem)
        })
        console.log(output);
        return output;
    } 

    let sizeInCartItem = (itemsFromCart, arr, dbProduct) => {
        for (const size in itemsFromCart) {
            arr.push(
                {
                    id: dbProduct.id,
                    price: dbProduct.unit_price,
                    // image: dbProduct.image1,
                    size: size,
                    quantity: itemsFromCart[size].quantity
                }
            )
        }
    };


    // for (let i = 0; i < matchProductData.length; i++) {
    //     let cartItem = cartArr[matchProductData[i].id]
    // }


    // try {
    //     var itemList = allProductData.map((item) => {
    //         return (
    //             <div>
    //                 <div>
    //                     <img alt='an item of clothing' src={item.image1}/>
    //                 </div>
    //                 <div>
    //                     <p>{item.product_name}</p>
    //                     <p>{item.unit_price}</p>
    //                 </div>
    //             </div>
    //         )
    //     })
    // } catch (error) {
    //     console.log(error);
    // }

    // console.log(cartArray);
    // console.log(allProductData);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {/* {sessCart.data.cart && sizeList} */}
            {/* {allProductData && itemList} */}
        </div>
    )
}

export default ShoppingCart