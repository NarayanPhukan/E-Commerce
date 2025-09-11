import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    const [latestProduct, setLatestProducts] = useState([])

    useEffect( ()=> {
        setLatestProducts(products.slice(0,10))
    },[])
    // console.log(products)

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores adipisci veritatis. Ullam repudiandae natus molestiae sed, omnis at expedita velit enim doloremque laborum molestias, deserunt maxime. Numquam, aliquid quam.</p>
        </div>

        

    </div>
  )
}

export default LatestCollection