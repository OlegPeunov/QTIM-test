import React from 'react';
import { Routes, Route, Link} from 'react-router-dom'
import FullCardPage from './FullCardPage';

function Card(props) {
  
  function sendId(){
    props.clickHandler(props._id)
  }
 
  return (
    <>
      <Link to="/FullCard"><article className="hentry" id={props._id} onClick={sendId}>
        <header className="entry-header">
          <div class="entry-thumbnail">
            <img style={{ backgroundImage: `url(${props.link})` }} className="place-card__image" />
          </div>
          <div className="entry-thumbnail"></div>
          <h2 className="entry-title"><a  rel="bookmark">{props.title}</a></h2>
          <a className='portfoliotype'>{props.description}</a>
        </header>
      </article></Link>
          
    </>
    
  );
  }
    
  export default Card;