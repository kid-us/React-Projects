import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        {/* <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/tv/:id" element={<TvDetail />}></Route>
        <Route exact path='/movies' element={<Movies />}></Route>
        <Route exact path='/movies/:genre' element={<MovieGenre />}></Route>
        <Route exact path='/tvs' element={<Tvs />}></Route>
        <Route exact path='/tvs/:genre' element={<TvGenre />}></Route>
        <Route exact path='/search/:media/:query' element={<Search />}></Route>
        <Route path='/404' element={<Page404 />}></Route>
        <Route path='*' element={<Navigate to="/404" />} ></Route> */}
      </Routes>
    </>
  )
}

export default App
