import React from 'react'
import { pageLinks,socialLinks } from '../Data'

const footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">
    {pageLinks.map((links)=>{
      const {id,href,text} = links
          return(
 <li key={id}>
 <a href={href} className="footer-link"> {text} </a>
</li>
          );})}
    </ul>
    <ul className="footer-icons">
      {socialLinks.map((link)=>{
        const {id,href,className} =link
        return(
          <li>
          <a href={link} target="_blank" className="footer-icon"
            ><i className={className}></i
          ></a>
        </li>
        );
      })}
     
     
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default footer
