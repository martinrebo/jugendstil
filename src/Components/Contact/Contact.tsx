import React, { ReactElement } from 'react'
import './contact.css'



export default function Contact(): ReactElement {

    const handleOnClick = () => {
       console.log("Button Clicked")
    };
    return (
        <button className="btn" onClick={handleOnClick}>
           CONTACT
        </button>
    )
}
