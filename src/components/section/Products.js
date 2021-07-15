import React, { useContext, useEffect, useState } from 'react'
import '../css/Products.css'
import { DataContext } from './../../App';
import Categories from './Categories';
import axios from 'axios'
import {Link} from 'react-router-dom'


function Products() {
const {products} = useContext(DataContext)
const [data,setData] = useState([])
const [search , setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)    
    }

    useEffect(()=>{
        axios.get('https://3ayez-eh.azurewebsites.net/hot_deals/?lat=31.207719321874073&lon=29.918701945555572&range=1')
        .then(res => {
           // console.log(res.data.message.products)
           setData(res.data.message.products)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
    return (
        <>
        <Categories products={products} title='Categories' />
        <div id='product'>
        <h1 className='product-title'>Hot Deals</h1>
        <div className='input'>
        <input type='text' value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search' />
        <button onClick={handleSubmit}>Search</button>
       </div>
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
                       <span>{product.category}</span>
                       <p>{product.description}</p>
                   </div>
               </div>

           
               ))
          }
       </div>
        </>
    )
}

export default Products
