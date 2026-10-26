import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import access from "./Access"
import Todo from "./Todo";
import Access from './Access';
import { Header } from './layout/Header';
import { Trending } from './layout/Trending';
import { Events } from './layout/Events';
import { Babies } from './pages/Babies';
import { Toddlers } from './pages/Toddlers';
import { Kids } from './pages/Kids';
import { Momslife } from './pages/Momslife';
import Layout from './layout/Layout';
import "./assets/css/Style.css"
import "./assets/css/media.css"



const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Babies />} />
          <Route path="/Toddlers" element={<Toddlers />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Momslife" element={<Momslife />} />


          <Route path='/access' element={<Access />} />
          <Route path='/todo' element={<Todo />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App


