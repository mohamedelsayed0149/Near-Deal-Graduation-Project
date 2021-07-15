import React,{useContext, useEffect, useState} from 'react'
import { DataContext } from './../../App';
import {Link} from 'react-router-dom'
//import Colors from './Colors'
import '../css/Details.css'



function Details(props) {
    const id = props.match.params.id
    const productsContext = useContext(DataContext)
    const [prod , setProd] = useState([])
    const [title , setTitle] = useState('')
    const [search , setSearch] = useState('')
    const [new_arr , setNew] = useState([])
    // const [searchProd, setSearchProd] = useState(productsContext)
    /*
    useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  }; */

   useEffect(() => {
       if(id) {
        const result = productsContext;
        const data = result.products.filter( item => {
            return item._id === id
        })
        setProd(data[0].data)
        setTitle(data[0].title)
    }
   }, [id, productsContext])

   useEffect(()=> {
     if(new_arr.length > 0){
       setProd(new_arr)
     }
   },[new_arr, prod])

   const handleSubmit = (e) => {
    e.preventDefault();
    let results = prod.filter((list) => list.name === search)
    console.log(results)
    setNew(results)
    console.log(new_arr)
 }

    return (
        <React.Fragment>
          <h2 className='det-title'>{title}</h2>
          <div className='input'>
           <input type='text' value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search' />
           <button onClick={handleSubmit}>Search</button>
          </div>
          {
              prod.map(item => (
                <div className="details" key={item.id}>
                 <img src={item.image_url} alt={item.name}/>
                  <div className="box">
                    <div className="row">
                        <h2>{item.name}</h2>
                        <p>{item.brand}</p>
                        <span>Offer Price : {item.offer_price} EGP</span>
                    </div>
                    {/*<Colors colors={item.colors}/>*/}
                    <p>{item.description}</p>
                    <Link to="/payment" className="cart" >
                        View More
                    </Link>
                </div>
            </div>
              ))
          }

        </React.Fragment>
    )
}

export default Details
