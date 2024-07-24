import React from 'react'
import Title from './Title'
import {Services} from '../Data'
const services = () => {
  return (
    <section className="section services" id="services">
     <Title Title={'Our'} subTitle={'Services'}/>
      <div className="section-center services-center">
        {Services.map((service)=>{
         const {id,icon,title,text} =service
         return(

         
        <article className="service" key={id}>
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">
              {text}
            </p>
          </div>
        </article>)
        })}
       
      </div>
    </section>

  )
}

export default services
