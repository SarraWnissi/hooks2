
import './App.css';
import MoviesList from './components/MoviesList';
import Navigation from './components/Navigation';
import { moviesInitial } from './data';
import MovieCarousel from './components/MovieCarousel';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import FilterByRate from './components/FilterByRate';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState(moviesInitial);
  const [searchValue,setSearchValue]= useState("");
  const [searchByRating, setSearchByRating] = useState(0);
  return (
    <div className="App">
<Navigation movies={movies} setMovies={setMovies} setSearchValue={setSearchValue}/>


<Routes>

<Route/>
</Routes>

<MovieCarousel movies={movies.slice(0, 10)} />
<FilterByRate setSearchByRating={setSearchByRating}/>
<MoviesList title="upcoming movies" movies = {movies.filter ((el)=> el.releaseDate < "May 15, 2006" && el.title.toLowerCase().includes(searchValue.toLowerCase()))}/>
<MoviesList title="latest movies" movies = {movies.filter ((el)=> el.releaseDate > "May 15, 2006" && el.title.toLowerCase().includes(searchValue.toLowerCase()))}/>
<MoviesList title="all movies" movies = {movies.filter ((el)=>el.title.toLowerCase().includes(searchValue.toLowerCase())&& el.rate>=searchByRating)}/>
    
    </div>
  );
}

export default App;
