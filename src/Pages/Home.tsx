import React, { ReactElement } from 'react'
import circle from '../assets/circle.png'
import Contact from '../Components/Contact/Contact'
// import world from '../assets/world.gif'
import Title from '../Components/Title/Title'
import Main from '../Layout/Main'


export default function Home(): ReactElement {
    return (
        <Main>
            <div className="home">
                <div className="content-item">
                    <Title
                        title="#CREATING_IMPACT"
                        description="We empower organisations to create business impact and seamless digital experiences through technology."
                        linkTo="/services"
                        linkContent="Check out our Services" />
                </div>
                <div className="content-item grow">
                    <img className="home-img rotate " src={circle} alt="" />
                </div>
                <div className="content-item">
                    <Contact />
                </div>
            </div>
        </Main>
    )
}
