import React, { useEffect } from 'react'
// import Greytshirt from '../images/Greytshirt.png'
// import Greyhoodie from '../images/Greyhoodie.png'

const ProductBox = () => {
    
    const [tshirtImage, setTshirtImage] = React.useState([]);
    const [hoodieImage, setHoodieImage] = React.useState([])
    
    console.log(tshirtImage)
    // console.log(hoodieImage)
    
    const getProductImages = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_ORIGIN}/api/products`);
            const jsonData = await response.json();

            // console.log(jsonData)
            setTshirtImage(jsonData[0].image2)
            setHoodieImage(jsonData[1].image2)
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getProductImages();
    }, []);

    const handleClick = () => {
        console.log('Clicked')
    }
    
    // let image = <></>
    // if (tshirtImage) {
    //     <img onClick={handleClick} alt='' src={require(tshirtImage)} className='grey-tshirt' data-test='grey-tshirt-image'/>
    // }
    return (
    <div className='product-box'>
        <img onClick={handleClick} alt='' src={tshirtImage} className='grey-tshirt' data-test='grey-tshirt-image'/>
        <img alt='' src={hoodieImage} className='grey-tshirt' data-test='grey-hoodie-image'/>
    </div>
  )
}


export default ProductBox