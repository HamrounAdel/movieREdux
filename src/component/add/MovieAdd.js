import React, { useState } from 'react'
import './MovieAdd.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAdd } from '../../redux/movieSlice';
import { v4 as uuidv4 } from 'uuid';


function MovieAdd() {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const[titles,setTitles]=useState('')
   const[descriptions,setDescriptions]=useState('');
    const[imageSrcs,setImageSrcs]=useState('')
    const[rates,setRates]=useState(null)
    const[genres,setGenres]=useState('')
    const[videoUrls,setVideoUrls]=useState('')

    //test sur title
    const handleTestTitle = (e) => {
      const TitleValue = e.target.value;
      const synb = TitleValue.replace(/[^a-zA-Z0-9]/g, '');
      setTitles(synb );
    };
    //test sur rates: pour accepts only numbers et '.'
    const handleTestRate = (event) => {
      const { value } = event.target;

      const num = value.replace(/[^0-9.]/g, '');
        setRates(num);
      }
      //partie add  movie sur movielist
    const add=()=>{
      const newMovie = {};
      if(titles==='' || genres==='' || descriptions==='' || 
       imageSrcs==='' || rates==='' || videoUrls==='' ) 

       {alert('Champs obligatoires')}
      else{
        newMovie.id=uuidv4();
        newMovie.title=titles;
        newMovie.genre=genres;
        newMovie.checked=false;
        newMovie.description=descriptions;
        newMovie.rate=rates;
        newMovie.sortie=2023;
        newMovie.imageSrc=imageSrcs;
        newMovie.videoUrl=videoUrls;
          dispatch(handleAdd(newMovie ));
       setTitles('');
      setDescriptions('');
      setImageSrcs('');
      setRates('');
      setGenres('');
      setVideoUrls(''); 
      navigate('/movielist');}
      
     }
  return (
  <>
  <h4 style={{color:' rgb(34 197 94)'}}>Add movies</h4><br/>
  
<div style={{display: 'grid', gap: '24px',gridTemplateColumns: 'repeat(4, 1fr)'}}>
  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Title:</p>
  <input  placeholder='entre titre' value={titles}
      onChange={handleTestTitle}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Description:</p>
    <input  placeholder='entre her....' value={descriptions}
      onChange={(e)=>setDescriptions(e.target.value)}/>
  </form><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>imageSrc:</p>
  <input  placeholder='entre her.... ' value={imageSrcs}
      onChange={(e)=>setImageSrcs(e.target.value)}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Rate:</p>
  <input  placeholder='entre her.... ' value={rates}
      onChange={handleTestRate}/>
  </form ><br/>

 
  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>VideoUrl:</p>
  <input  placeholder='entre her.... ' value={videoUrls}
      onChange={(e)=>setVideoUrls(e.target.value)}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Genre:</p>
  <input  placeholder='entre her.... ' value={genres}
      onChange={(e)=>setGenres(e.target.value)}/>
  </form ><br/>
  <button className='btn' onClick={()=>add()} >Add</button>
  
  </div>
    </>
  )
}

export default MovieAdd
