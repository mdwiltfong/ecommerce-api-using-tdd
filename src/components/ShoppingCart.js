import React, { useEffect } from 'react'
import CartItem from './CartItem';
import { useOutletContext } from 'react-router-dom'
import axios from 'axios';
import { nanoid } from 'nanoid';

const ShoppingCart = () => {
    const [sessCart, setSessCart] = useOutletContext();
    // const [cartArray, setCartArray] = React.useState([]);
    const [finalOutput, setFinalOutput] = React.useState([]);
    console.log(sessCart);

    let itemId = async (carts) => {
        let cartArr = [];
        for (const productId in carts) {
            cartArr.push(parseInt(productId));
        }
        console.log(cartArr);
        // setCartArray(cartArr);
        await getProductMatches(cartArr);
    };


    const getProductMatches = async (cartArray) => {
        let body = cartArray;
        console.log(body);
        try {
            const response = await axios.post(`${process.env.REACT_APP_ORIGIN}/api/products/match`, body,
                {
                    withCredentials: true,
                }
            );

            console.log(response.data);
            formatItemList(response.data)
            // setMatchedProductData(response.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        itemId(sessCart.data.cart);
        // if (matchedProductData) {
        //     formatItemList();
        // }
    }, [sessCart]);

    let output = [];
    let formatItemList = (matchedProductData) => {
        matchedProductData.forEach(dbItem => {
            let cartItem = sessCart.data.cart[dbItem.id];
            sizeInCartItem(cartItem, output, dbItem)
        })
        // console.log(output);
        setFinalOutput(output)
        // return output;
    }

    let sizeInCartItem = (itemsFromCart, arr, dbProduct) => {
        for (const size in itemsFromCart) {
            arr.push(
                {
                    id: dbProduct.id,
                    productName: dbProduct.product_name,
                    price: dbProduct.unit_price,
                    image: dbProduct.image3,
                    size: size,
                    quantity: itemsFromCart[size].quantity,
                    totalItemPrice: parseInt(dbProduct.unit_price) * parseInt(itemsFromCart[size].quantity)
                }
            )
        }
    };
    let grandTotal;
    if(finalOutput){
        grandTotal = finalOutput.reduce((grandTotal, currentValue) => grandTotal + currentValue.totalItemPrice, 0)
    }
    

    try {
        console.log(finalOutput)
        var itemList = finalOutput.map((item) => {
            return (
                <CartItem
                    setSessCart={setSessCart}
                    sessCart={sessCart}
                    key={nanoid()}
                    productName={item.productName}
                    price={item.price}
                    size={item.size}
                    quantity={item.quantity}
                    image={item.image}
                    totalItemPrice={item.totalItemPrice}
                    id={item.id}
                />
            )
        })
    } catch (error) {
        console.log(error);
    }

    // console.log(cartArray);
    // console.log(allProductData);

    return (
        <div className='shopping-cart'>
            <h2>Shopping Cart</h2>
            {finalOutput && itemList}
            {finalOutput.length > 0 && <div>
                <div className='subtotal-price'>
                    <p>Subtotal</p>
                    {finalOutput && <p>${grandTotal}.00</p>}
                </div>
                <div className='checkout'>
                    <p className='checkout-text'>Checkout</p>
                </div>
            </div>}
            {itemList.length === 0 && <h3>Your Cart Is Empty</h3>}
        </div>
    )
}

export default ShoppingCart