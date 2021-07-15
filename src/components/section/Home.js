import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import home_logo  from "../../Images/img.png";
import movil  from "../../Images/movil-app.png";
import app1  from "../../Images/app1.png";
import app2  from "../../Images/app2.png";


function Home() {
    return (
        <>
                <div className="home__container bd-container bd-grid">
                    <div className="home__data">
                        <h1 className="home__title">Go Shopping Now.</h1>
                        <h2 className="home__subtitle">Find out the nearst brand's<br/>collections to your place.</h2>
                        <Link to="/products" className="button">Eplore Now</Link>
                    </div>
    
                    <img src={home_logo} alt="" className="home__img" />
                </div>

                <div className="app__container bd-grid">
                    <div className="app__data">
                        <span className="section-subtitle app__initial">Services</span>
                        <h2 className="section-title app__initial">App is aviable</h2>
                        <p className="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                        <div className="app__stores">
                            <Link to="#"><img src={app1} alt="" className="app__store" /></Link>
                            <Link to="#"><img src={app2} alt="" className="app__store" /></Link>
                        </div>
                    </div>

                    <img src={movil} alt="" className="app__img" />
                </div>
      </>
    )
}

export default Home
