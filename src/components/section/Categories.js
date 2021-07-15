import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Products.css'

function Categories(props) {

    return (
        <div id='product'>
         <h1 className='product-title'>{props.title}</h1>
           {
            props.products.map(product =>(
                <div className="card" key={product._id}>
                    <Link to={`/products/${product._id}`}>
                        <img src={product.src} alt=""/>
                    </Link>
                    <div className="content">
                        <h3>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </h3>
                        <span>{product.min_price} EGP ~ {product.max_price} EGP</span>
                        <p>{product.description}</p>
                    </div>
                </div>
            
                ))
           }
        </div>
    )
}

export default Categories
