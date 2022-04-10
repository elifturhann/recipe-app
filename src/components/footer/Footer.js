import React from 'react'
import designSvg from "../../assets/design.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-div'>
    <a href="https://github.com/elifturhann"
    target="_blank"
    rel="noopener noreferrer"
    style={{textDecoration: "none"}}   
    >
    <code className='brand'>{"<Elif/>"}</code>
    </a>
    <img src={designSvg} 
    alt="design"
    style={{width: "40px", margin:"0 ,25px 0 10px" }} 
    />
    <span> Copyright {new Date().getFullYear()}</span>
   
    </div>
  )
}

export default Footer;