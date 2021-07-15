import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css'
import Logo from "../../Images/Logo.png";


function About() {
    return (
        
        <div class="about__container  bd-grid">
            <div class="about__data">
                <span class="section-subtitle about__initial">About Us</span>
                <h2 class="section-title about__initial">WHY TO CHOOSE US ?</h2>
                <p class="about__description">We do everything in our power to delight our clients, fellow employees, and other stakeholders, judging the success of our day by whether we helped make others’ lives easier, more productive and more enjoyable.</p>
                <Link to="#" class="button">Explore history</Link>
            </div>

            <img src={Logo} alt="" class="about__img" />
        </div>
        
    )
}

export default About
