import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import MovieList from './component/movies/MovieList';
import MovieFilter from './component/search/MovieFilter';
import MovieAdd from './component/add/MovieAdd';


import {Routes ,Route} from 'react-router-dom'
import Navigation from './component/navbar/Navigation';
import { useNavigate } from 'react-router-dom';
import Trailer from './component/Trailer';
import Home from './component/home/Home';
import Profil from './component/profile/Profil';
function App() {
  
 
  const[inputTitle,setInputTitle]=useState('')
   const[inputRate,setInputRate]=useState('')
 
   
 
    
  
  return (
    <>
     <header>
      <Navigation/>
      </header>
    <div className='App'>
    
    
    <br/>
    <div >
        <div> 
          <MovieFilter  setInputTitle={setInputTitle} setInputRate={setInputRate}/>
        </div>
     </div>
    <hr/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/movielist' element={<MovieList  inputTitle={inputTitle} inputRate={inputRate} />}/>
      <Route path='/add'element={<MovieAdd  />}/>
      <Route path='/trailer/:id' element={<Trailer />}/>
      <Route path='/profile' element={<Profil/>}/>
    </Routes>
    <div ></div>  
     <hr/>
     <div>
          
        </div>
    </div>
    </>
  );
}

export default App;
