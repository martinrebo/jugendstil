import React, { ReactElement } from 'react'
import circle from '../assets/circle.png'
import Contact from '../Components/Contact/Contact'
// import world from '../assets/world.gif'
import Title from '../Components/Title/Title'


export default function Home(): ReactElement {
    return (
            <div className="home">
                <div className="content-item">                  
                    <Title
                     title="#CREATINGIMPACT"
                     description="We empower organisations to create business impact and seamless digital experiences through technology."
                     linkTo="/services"
                     linkContent="Check out our Services"/>
                </div>
                <div className="content-item">
                    <img className="home-img" src={circle} alt="" />
                </div>
                <div className="content-item">
                   <Contact />
                </div>
            </div>
    )
}
