import { useEffect, useState } from 'react'
import './App.css'


 
function Product(){
     const [name,setName]=useState('Samsung');
     const [price,setPrice]=useState(50000);

     useEffect(()=>{
        console.log("Componenet Mounted");
        return ()=>{
            console.log('Component Unmounted')
        }
     },[name,price])

    return(
        <div className="Product">
            <h3>Brand Name: {name}</h3>
            <h3>Model: XYZ</h3>
            <h3>Price: {price}</h3>
            <button onClick={()=>{setName("Appel")}}>Change Product Name</button>
            <button onClick={()=>{setPrice(80000)}}>Change Price</button>
        </div>
    )
}

export default Product