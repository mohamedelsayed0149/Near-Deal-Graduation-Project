import React,{useEffect, useState} from 'react'
import '../css/Products.css'
import {Link} from 'react-router-dom'
import '../css/Products.css'
import axios from 'axios';

function Shops() {
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://3ayez-eh.azurewebsites.net/nearby_shops/?lat=31.207719321874073&lon=29.918701945555572&range=50')
        .then(res => {
           // console.log(res.data.message)
            setData(res.data.message)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
    return (
        <div id='product'>
        <h1 className='product-title'>Shops</h1>
          {
           data.map(product =>(
               <div className="card" key={product.id}>
                   <Link to={`/products/${product.id}`}>
                       <img src={product.image_url} alt=""/>
                   </Link>
                   <div className="content">
                       <h3>
                           <Link to={`/products/${product._id}`}>{product.name}</Link>
                       </h3>
                       <p>{product.description}</p>
                       <span>Visits : {product.weekly_views}</span>
                   </div>
               </div>

           
               ))
          }
       </div>
    )
}

export default Shops
