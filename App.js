import React from 'react';
import Navmenu from './Nav'
import List from './list'
import './App.css';

// const menuitem= { link: '#', title:'Home', isActive:false}
// const menuitem1= { link:'#', title:'Services', isActive:true}
// const menuitem2= { link:'#', title:'Contact', isActive:false}
let tab=[{ link: '#dsfsdsdfsdscsd', title:'Home', isActive:false},
{ link:'#kkkkkkkkkkk', title:'Services', isActive:true},
 { link:'#', title:'Contact', isActive:false}]


function App() {
  return (
    <div className="App">
      <List item={tab}/>
      {/* <Navmenu  className='class-services' item={menuitem1}/>
      <Navmenu item={menuitem2}/>
<List/> */}
    </div>
  );
}

export default App;
