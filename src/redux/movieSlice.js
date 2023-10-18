import {createSlice} from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid';
export const movieSlice=createSlice({

    name:'Movie',
    initialState:[
        {id:uuidv4(),title: 'John Wick: Chapitre 4 ', 
        genre:'Action',checked:false,
    description:`John Wick: Chapitre 4 est un film d'action
     américain réalisé par Chad Stahelski et sorti en 2023.`,
    rate:7.8,sortie:2023,
    imageSrc:'./images/film1.jpg',
    videoUrl:'https://tse2.mm.bing.net/th?id=OMB2.1IRRxpPEEGxHlQ&pid=15.1'},

    {id:uuidv4(),title:'La Petite Sirène ' ,
    genre:'fantastique musical',checked:false,
    description:'La Petite Sirène est un film musical fantastique américain réalisé par Rob Marshall et sorti en 2023.',
    rate:7.2,sortie:2023,
    imageSrc:'./images/film2.jpg',
    videoUrl:'https://tse4.mm.bing.net/th?id=OMB2.kqhD1j12nYlzKQ&pid=15.1'},
 
    {id:uuidv4(),title:'Fast and Furious 10' ,
    genre:'Action',checked:false,
    description:'Fast and Furious 10 ou Rapides X au Québec (Fast X) est un film action américain réalisé par Louis Leterrier et sorti en 2023',
    rate:2.9,sortie:2023,
    imageSrc:'./images/film3.jpg',
    videoUrl:'https://tse2.mm.bing.net/th?id=OMB2.1IRRxpPEEGxHlQ&pid=15.1'},

    {id:uuidv4(),title: 'Oppenheimer',
    
    genre:'Action',checked:true,
    description:'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.',
    rate:8.5,sortie:2023,
    imageSrc:'./images/film4.jpg',
    videoUrl:'https://tse2.mm.bing.net/th?id=OMB2.1IRRxpPEEGxHlQ&pid=15.1'},

    {id:uuidv4(),title:'Tyler Rake 2' ,
    genre:'Action',checked:false,
      description:'Ayant échappé de peu à la mort, intrépide mercenaire Tyler Rake revient pour une nouvelle mission périlleuse : extraire de prison la famille un impitoyable gangster.',
      rate:6.5,sortie:2023,
      imageSrc:'./images/film5.jpg',
      videoUrl:'https://tse2.mm.bing.net/th?id=OMB2.1IRRxpPEEGxHlQ&pid=15.1'},

    {id:uuidv4(),title:'Equalizer 3' ,
    genre:'Action',checked:true,
    description:'Equalizer 3 ou Le justicier 3 au Québec, est un film action américain réalisé par Antoine Fuqua et sorti en 2023.',
    rate:7,sortie:2023,
    imageSrc:'./images/film6.jpg',
    videoUrl:'https://tse2.mm.bing.net/th?id=OMB2.1IRRxpPEEGxHlQ&pid=15.1'},

    ],
    reducers:{
       //partie  delete movie
     handleDelet:(state,action)=>{
        return state.filter((el)=>el.id !==action.payload)
     },
     //partie ajout movie
     handleAdd:(state,action)=>{
        const  newMovie=action.payload
        state.push(newMovie)
     },
     //partie checked movie
     handlecheck:(state,action)=>{
        return state.map((el)=> el.id===action.payload?{...el,checked: !el.checked}  : el)
     }

    }
})
export const { handleDelet,handleAdd,handlecheck}=movieSlice.actions;
export default movieSlice.reducer