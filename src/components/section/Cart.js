import React,{useEffect, useState} from 'react'
import '../css/Products.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Cart() {
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://3ayez-eh.azurewebsites.net/search_nearby_products_by_name/?lat=31.207719321874073&lon=29.918701945555572&range=1')
        .then(res => {
            //console.log(res.data.message.products)
            setData(res.data.message.products)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
    return (
        <div id='product'>
        <h1 className='product-title'>All Products</h1>
          {
           data.map(product =>(
               <div className="card" key={product.id}>
                   <Link>
                       <img src={product.image_url} alt={product.name}/>
                   </Link>
                   <div className="content">
                       <h3>
                           <Link to={`/products/${product._id}`}>{product.name}</Link>
                       </h3>
                       <p>{product.category}</p>
                       <span>Views : {product.views}</span>
                       <p>{product.description}</p>
                   </div>
               </div>

           
               ))
          }
       </div>
    )
}

export default Cart
