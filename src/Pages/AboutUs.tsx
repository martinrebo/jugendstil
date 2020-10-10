import React, { ReactElement } from 'react'
import geometry2 from '../assets/geometry2.gif'
import Contact from '../Components/Contact/Contact'
// import world from '../assets/world.gif'
import Title from '../Components/Title/Title'
import Main from '../Layout/Main'


export default function AboutUs(): ReactElement {
    return (
        <Main>
            <div className="home">
                <div className="content-item">
                    <Title
                        title="#ABOUT_US"
                        description="We help businesses master the digital reinvention of the industry and unlock new revenue streams "
                        linkTo="/"
                        linkContent="Contact us" />
                </div>
                <div className="content-item grow">
                    <img className="home-img rotate" src={geometry2} alt="" />
                </div>
                <div className="content-item">
                    <Contact />
                </div>
            </div>
        </Main>
    )
}
