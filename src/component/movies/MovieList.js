import React, { useState } from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import {  useSelector } from 'react-redux'
function MovieList({inputTitle,inputRate}) {
  const movie=useSelector(state=>state.Movie)
  const [sort,setSort]=useState('all')
  return (
    <div>
      <div>
        <button type='button'  onClick={()=>setSort('all')} >ALL</button>
        <button  type='button' onClick={()=>setSort('done')}>DONE</button>
        <button  type='button' onClick={()=>setSort('notyet')}>NOTYET</button>
        <hr/>
      </div>
    <div className='grid-container'>
      
      { movie.length>0 && sort==='all'?
      movie.filter((el)=> (el.title.toLowerCase().includes (inputTitle.toLowerCase().trim()))&& el.rate>=inputRate)
      .map((el)=>  <MovieCard  el={el}/>):null}

       { movie.length>0 && sort === 'done'?
      movie.filter(el=>el.checked === true).filter((el)=>(el.title.toLowerCase().includes(inputTitle.toLowerCase().trim()))
      && el.rate>=inputRate)
      .map((el)=><MovieCard  el={el}/>):null}

       { movie.length>0 && sort === 'notyet'?
      movie.filter(el=>el.checked === false).filter((el)=> (el.title.toLowerCase().includes(inputTitle.toLowerCase().trim()))
      && el.rate>=inputRate)
      .map((el)=><MovieCard  el={el}/>):null}
    
    </div>
    </div>
  )
}

export default MovieList
