import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Start from './components/Start';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/getstart' element={<Start/>}/>
      </Routes>
    </div>
  )
}

export default App
