import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Test from './components/include/Test'
import HomePage from './components/main/HomePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" exact={true} element={<HomePage/>}/>
        <Route path="/" exact={true} element={<Test/>}/>
      </Routes>      
    </>
  )
}

export default App
