import React from 'react'

const CartItem = (props) => {
    
    let increment = () => {
        if (props.quantity > 0) {
            let currentQuantity = props.quantity++;

        } 
    }
    
    

    return (
        <div>
            <div className='cart-tile'>
                <div className='image-and-description'>
                    <div>
                        <img alt='an item of clothing' src={props.image} />
                    </div>
                    <div>
                        <p>{props.productName}</p>
                        <p>{props.size}</p>
                        <p>{props.price}</p>
                    </div>
                </div>
                <div className='quantity-price'>
                    <div className='minus-quantity-plus'>
                        <div>
                            <img alt='minus sign' src={"/images/Minus.png"} />
                        </div>
                        <div>
                            <p>{props.quantity}</p>
                        </div>
                        <div>
                            <img alt='plus sign' src={"/images/Plus.png"} />
                        </div>
                    </div>
                    <div className='price-remove'>
                        <p>${props.totalItemPrice}.00</p>
                        <img alt='remove sign' src={"/images/X.png"} />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem