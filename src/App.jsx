import React from 'react'
import Header from './component/Header/Header'
import { Route, Routes } from 'react-router'
import ViewProducts from './component/ViewProducts/ViewProducts'
import AddProducts from './component/AddProducts/AddProducts'
import './App.css'
import Editproducts from './component/Editproducts/Editproducts'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ViewProducts />} />
        <Route path='/add_products' element={<AddProducts />} />
        <Route path='/editproducts/:id' element={<Editproducts />} />
      </Routes>
    </>
  )
}

export default App