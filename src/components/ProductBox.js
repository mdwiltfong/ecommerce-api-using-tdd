import React from 'react'
import Greytshirt from '../images/Greytshirt.png'
import Greyhoodie from '../images/Greyhoodie.png'

const productBox = () => {
  return (
    <div className='product-box'>
        <img alt='' src={Greytshirt} className='grey-tshirt' data-test='grey-tshirt-image'/>
        <img alt='' src={Greyhoodie} className='grey-tshirt' data-test='grey-hoodie-image'/>
    </div>
  )
}

export default productBox