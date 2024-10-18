import React,{useState} from 'react'
import {SideBar} from './Components/SideBar/SideBar'
import Main from './Components/Main/Main'

const App = () => {

  const [extended, setExtended] = useState(true);

  const sideBarHandler = ()=>{
    setExtended(!extended); 
  }

  return (
    <>
      <SideBar sideBarHandler={sideBarHandler} extended={extended}/>
      <Main sideBarHandler={sideBarHandler} extended={extended}/>
    </>
  )
}

export default App