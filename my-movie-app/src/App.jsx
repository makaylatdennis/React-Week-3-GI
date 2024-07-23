import { useState } from 'react'
import Search from './search/search'
import { Route, Routes } from "react-router-dom";
import Movie from './search/movie';


function App() {

  return (
    <Routes>
    <Route path="/" element={<Search />} />
    <Route path="movie/:id" element={<Movie />} />
  </Routes>
  )
}

export default App
