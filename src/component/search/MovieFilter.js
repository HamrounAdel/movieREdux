import React from 'react'



function MovieFilter({setInputTitle,setInputRate}) {

  
  return (
    <>
   
    <div style={{display:'flex',justifyContent:'right'}}>
    
     <input  placeholder='filtre par title....' 
      onChange={(e)=>setInputTitle(e.target.value)}/>
    <br/><br/>
   
    <input  placeholder='filtre par rate ...' 
    onChange={(e)=>setInputRate(e.target.value)}/> 
      <br/>
    </div>
    </>
  )
}

export default MovieFilter
