import React, { ReactElement } from 'react'
import geometry from '../assets/geometry.gif'
import Contact from '../Components/Contact/Contact'
// import world from '../assets/world.gif'
import Title from '../Components/Title/Title'
import Main from '../Layout/Main'


export default function Services(): ReactElement {
    return (
        <Main>
            <div className="home">
                <div className="content-item">
                    <Title
                        title="#SERVICES"
                        description="Today's disruptive landscape requires your software to adapt, just like your organisation needs to."
                        linkTo="/about-us"
                        linkContent="discover who we are" />
                </div>
                <div className="content-item grow">
                    <img className="home-img rotate" src={geometry} alt="" />
                </div>
                <div className="content-item">
                    <Contact />
                </div>
            </div>
        </Main>
    )
}

