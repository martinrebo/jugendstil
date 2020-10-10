import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'



export default function Footer(): ReactElement {

    const styles = {
        link: {
            paddingRight: 10,
            paddingLeft: 10,
            textDecoration: "none",
            fontWeight: 700,
            color: "#fff"
        },
        span: {
            color: "#af4bf2",
            fontWeight: 700
        }

    }
    return (
        <div className="footer">
            <Link style={styles.link} to="/"> HOME </Link>
            <span style={styles.span}> | </span>
            <Link style={styles.link} to="/services">  SERVICES  </Link>
            <span style={styles.span}> | </span>
            <Link style={styles.link} to="/about-us"> ABOUT US </Link>
        </div>
    )
}
