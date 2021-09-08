import React from 'react'
import '../App.css'
import {BsStarHalf,BsStarFill, BsAlarmFill} from 'react-icons/bs'

export default function ProductTile({title,category,price,rating,image}) {

    return (
        <div className="ProductTile">
            <div className="Image"><img src={image}
 alt="" srcSet="" /></div>
            <div className="Title">{title}</div>
            <div className="Category"><span className="in-cat">Category : </span>{category}</div>
            <div className="inline">
                <div className="Price">₹ {price}</div>
                <div className="Rating"><BsStarFill color="#ffc400"/> {rating} / 5.0</div>
            </div>
        </div>
    )
}
