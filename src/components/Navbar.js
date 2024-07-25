import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks } from '../Data'
import { socialLinks } from '../Data'
const navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* <!-- left this comment on purpose --> */}
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((links)=>{
          return(
 <li key={links.id}>
 <a href={links.href} className="nav-link"> {links.text} </a>
</li>
          );})}
       

 
      </ul>

      <ul className="nav-icons">
      {socialLinks.map((links)=>{
       const {href,id,className}=links;
          return(
 <li key={id}>
 <a href={href} target="_blank" rel="noreferrer" className="nav-icon"> <i className={className}></i> </a>
</li>
          );})}
       
        
      </ul>
    </div>
  </nav>
  )
}

export default navbar
