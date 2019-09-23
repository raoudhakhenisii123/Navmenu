import React from 'react';

import Navmenu from './Nav'


const List=({item})=>{
   return( <div className='nav-items'>
    {item.map((el,index)=> <Navmenu x={el}  key={index} />)}
   </div>)}
export default List;