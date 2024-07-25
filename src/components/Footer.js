import React from 'react'
import { pageLinks,socialLinks } from '../Data'

const footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">
    {pageLinks.map((links)=>{
      const {footer_id,footer_href,text} = links
          return(
 <li key={footer_id}>
 <a href={footer_href} className="footer-link"> {text} </a>
</li>
          );})}
    </ul>
    <ul className="footer-icons">
      {socialLinks.map((link)=>{
        const {id,href,className} =link
        return(
          <li key={id}>
          <a href={href} target="_blank" rel='noreferrer' className="footer-icon"
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
