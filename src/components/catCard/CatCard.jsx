import React from 'react'
import './CatCard.scss'
import { Link } from "react-router-dom";
const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
    <div className='CatCard'>
        <img src={item.img} alt={item.title} />
        <span className='desc'>{item.desc}</span>
        <span className="title">{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCard