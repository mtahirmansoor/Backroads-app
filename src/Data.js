import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const  pageLinks =[
    {id:1,href:'#home',text:'home'},
    {id:2,href:'#about',text:'about'},
    {id:3,href:'#services',text:'services'},
    {id:4,href:'#tours',text:'tours'}


];
export const  socialLinks =[
    {id:1,href:'https://www.twitter.com',className:"fab fa-facebook"},
    {id:2,href:'https://www.twitter.com',className:"fab fa-twitter"},
    {id:3,href:'https://www.twitter.com',className:"fab fa-squarespace"}

];
export const  Services =[
    {id:1,icon:'fas fa-wallet fa-fw',text:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',title:'saving money'},
    {id:2,icon:'fas fa-tree fa-fw',text:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',title:'endless hiking'},
    {id:3,icon:'fas fa-socks fa-fw',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',title:'amazing comfort'}

]
export const tour =[
    {
        id:1 ,image:tour1 , date:'august 26th, 2020',title:'Tibet Adventure',text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'
       , location:'china',days:6,cost:2100
    },  {
        id:2 ,image:tour2 , date:'august 26th, 2020',title:'Tibet Adventure',text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'
       , location:'china',days:6,cost:2100
    },  {
        id:3,image:tour3 , date:'august 26th, 2020',title:'Tibet Adventure',text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'
       , location:'china',days:6,cost:2100
    },  {
        id:4,image:tour4 , date:'august 26th, 2020',title:'Tibet Adventure',text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'
       , location:'china',days:6,cost:2100
    }
]