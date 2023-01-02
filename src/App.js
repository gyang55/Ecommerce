

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component.jsx'

const Shop = () => {
  return (
    <div>
      <h1>I am SHOP</h1>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
      </Route>

    </Routes>
  )
}
