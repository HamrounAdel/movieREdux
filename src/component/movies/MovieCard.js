import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaTrashAlt,FaCheck, FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { handleDelet,handlecheck } from '../../redux/movieSlice';
import { useDispatch } from 'react-redux';
function MovieCard({el}) {
  const dispatch=useDispatch()
    console.log('dfg',el)

  return (
    <div>
      <Card style={{ width: '18.2rem' ,height:'40rem'}}>
   
   <img variant="top" src={el.imageSrc }
    style={{width:'290px',height:'350px'}}/>
      <Card.Body>
        <Card.Title>
        <span style={{ color: el.checked ? 'red' : 'black' }}>{el.title}  </span>
           <FaTrashAlt style={{color:'red'}} onClick={()=>dispatch(handleDelet(el.id))}/>
           <FaCheck  style={{color:'green'}} onClick={()=>dispatch(handlecheck(el.id))} />
        </Card.Title>
        
        <Card.Text>
        
        Description:{el.description}<br/>
        Rate:{el.rate}<br/>
        <Link to={`/trailer/${el.id}`} > plus d'information<FaCheckCircle/> </Link>
        </Card.Text>
      </Card.Body>
      
    </Card>
    </div>
  )
}

export default MovieCard
