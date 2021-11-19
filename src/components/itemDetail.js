import React from 'react'
import {useNavigate} from 'react-router'

export function ItemDetail({ id,title, image, description, price,categoryId }) {
    const  navigation = useNavigate();
    const volver= ()=> {
      navigation('/')
    }
    return (<div className="box">
    <div className="ui card">
    
     <div className="image">
      <img className={image} src={image} alt={title} />
      </div>
      <div className="content">
       <a className="header">{title}</a>
        <div className="meta">
          <span className="date">{categoryId}</span>
        </div>
        <div className="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
      <button onClick={volver}>Volver</button>
    </div>
    </div>)
   
  }
  