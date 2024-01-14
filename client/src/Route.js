import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './components/home/Home.js'
import Player from './components/player/Player.js'
import Errorpage from './components/errorpage/Errorpage.js'
import Search from './components/search/Search.js'
import Library from './components/library/Library.js'
import Login from './components/login/Login.js'

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/search' element={ <Search /> } />
        <Route path='/library' element={ <Library/> } />
        <Route path='/player' element={ <Player/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='*' element={ <Errorpage /> } />
      </Routes>
    </>
  )
}

export default Rout;