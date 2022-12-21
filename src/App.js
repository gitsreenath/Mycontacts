import React from 'react'
import { Routes,Route } from 'react-router'
import { Link } from 'react-router-dom'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import Notfound from './Pages/Notfound'
import Nav from './Components/Nav'

const App = () => {
  return (
    <>
    
    <Nav/>
    

<Routes>
  
  <Route path='/' element={<Home/>}/>
  <Route path='/Favorites' element={<Favorites/>}/>
  <Route path='/*' element={<Notfound/>}></Route>
</Routes>
    </>

  )
}

export default App