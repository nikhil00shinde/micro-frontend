import React, { useEffect, useState } from 'react';
import { currency, getProductById,getProducts } from './product';

function HomeContent() {
  
  const [products,setProducts] = useState([]);


  useEffect(() => {
   getProducts().then(setProducts);
  },[]);


  return (
    <div className='my-10 grid grid-cols-4 gap-5'>
      {console.log("second",products)}
            { 
                products.map((product) => (
                    <div key={product.id}>
                       <img src={product.image} alt={product.name}></img>
                       <div className='flex'>
                           <div className='flex-grow font-bold'>
                                  <a>{product.name}</a>
                           </div>
                           <div className='flex-end'>{currency.format(product.price)}</div>
                       </div>
                        <div className='text-sm mt-4'>{product.description}</div>
                    </div>
                ))
            }

    </div>
  )
}

export default HomeContent