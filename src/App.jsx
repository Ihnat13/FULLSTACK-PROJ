import React, {Component} from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/main/menu.jsx'
import About from './components/about/about.jsx'
const App = () => {
  return (
    <div>
    <nav  class="navbar navbar-expand-lg navbar-light bg-light sticky-top bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img class="img-fluid img-thumbnail" width="100" height="100" src="../../FULLSTACK PROJ/img/logo.png" alt=""></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <NavLink to='/'>Головна</NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Меню</a>
              </li>
              <li class="nav-item">
               <NavLink to='/about'>Про нас</NavLink>
              </li>
            </ul>
          </div>
            <a class="nav-link" href="#">Корзина</a>
        </div>
      </nav>

    <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>

    </div>
)
}


export default App