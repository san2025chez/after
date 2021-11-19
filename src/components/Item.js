import React from "react";
import styles from "./item.css";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router'

export const Item = ({ id,title, image, description, price,categoryId }) => {


  return(
 <div className="box container my-5">
<div className="ui card">

 <div className="image">
  <img className={image} src={image} alt={title} />
  </div>
  <div className="content">
  <Link to={`/item/${id}`}>  <a className="header">{title}</a></Link>
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

</div>

</div>)
};
