import React from 'react'
import './d_project.css'

const Card = (props) => (
    <div className="card_fs">
      <div className='card_fs_img'>
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
      </div>
      <div className="card-content_fs">
        <div className="card-content_fs1">{ props.date } { " - " } { props.city } { ", " } { props.state }</div>
        <div className="card-content_fs2">{ props.title }</div>
        {/* <div className="card-content_fs1">{ props.content }</div> */}
      </div>
    </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container_fs">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
            date={ card.date }
            city = { card.city }
            state = { card.state }
            imgUrl={ card.imgUrl } />
        ))
      }
    </div>
  );
  
  export default CardContainer;
  
  

