import React from 'react'
import List from './list'
import './App.css';
// import './App.js';


const Navmenu=({x})=>{
 return(
     <div>

     <a className="menu"
 style={{color: x.isActive?'#bbO9d':'black'}}
 
 href={x.link}>
   { x.title}
         
</a>

{x.isActive ? (<ul className="class-list">
    <li>for entrepreneurs</li>
    <li>for students</li>
    <li>for hoppyists</li>
    
    </ul>) : null
}
</div>
)
}


export default  Navmenu;