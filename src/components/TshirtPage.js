import React from 'react'
import Tshirt from '../images/Tshirt.jpg'

const TshirtPage = () => {
  return (
    <div>
        <img src={Tshirt} className='tshirt' data-test='tshirt-image' alt=''/>
        <div>
            <h2 data-test='title'>Classic</h2>
            <p data-test='price'>$35.00</p>
            <p data-test='p1'>So classy it hurts.</p>
            <p data-test='p2'>100% combed ring-spun cotton</p>
            <p data-test='p3'>Printed on Next Level garment</p>
            <p data-test='p4'>Pre-shrunk</p>
            <p data-test='p5'>Tear-away label</p>
        </div>
    </div>
  )
}

export default TshirtPage