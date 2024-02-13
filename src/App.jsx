import Product from './Product'
import './App.css'
import { useState } from 'react'
import ProductsApi from './ProductsApi'

function App() {
  const[showProducts,setShowProducts]=useState(true)
  

  return (
    
    <>
    <div className='show'>

    <p><button onClick={()=>{setShowProducts(true)}}>Show Products</button>

      <button onClick={()=>{setShowProducts(false)}}>Hide Products</button>
    </p>
    </div>

    <h1>Products Data Thorough the Api</h1>
   
   { showProducts===(true)?(
      <ProductsApi />

    ):(
      <h1>All Products are Hided</h1>
    )}
    
    
    </>
  )
}

export default App
