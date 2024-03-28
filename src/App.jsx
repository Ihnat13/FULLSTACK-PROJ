import React, {Component} from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/menu.jsx'
import Main from './components/main/Main.jsx'
import MainLayout from './components/mainLayout/mainLayout.jsx'
import About from './components/about/about.jsx'

const App = () => {
  return (
    <Routes>
      <Route to='/' element={<MainLayout/>}/>
      <Route index element={<Main />} />
      <Route to='/about' element={<About/>}/>
      <Route to='/menu' element={<Menu/>}/>
    </Routes>    
)
}


export default App


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>
//     <nav  className="navbar navbar-expand-lg navbar-light bg-light sticky-top bg-dark">
//         <div className="container">
//           <a classNameName="navbar-brand" href="#">
//             <img className="img-fluid img-thumbnail" width="100" height="100" src="../../FULLSTACK PROJ/img/logo.png" alt=""></img>
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//               <NavLink to='/'>Головна</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to='/menu'>Меню</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to='/about'>Про нас</NavLink>
//               </li>
//             </ul>
//           </div>
//             <a className="nav-link" href="#">Корзина</a>
//         </div>
//       </nav>
//       <Outlet/>

//       <footer className="bg-dark text-light py-4">
//         <div className="container text-center">
//           <p>© 2024 Піца Кафе. Усі права захищені.</p>
//         </div>
//       </footer>

//     </div>,
//     children:[{
//       index: true,
//       element: <Main/>
//     },
//     {
//       path: "about",
//       element: <About />
//   },
//   {
//     path: "/menu",
//     element: <Menu />
// },]
// },

//   {
//       path: "*",
//       element: <div>No such page</div>
//   }
// ])