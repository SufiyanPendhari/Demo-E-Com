import React from 'react'
import DropDown from './dropdown';
import '../App.css'


export default function Filter({onChange,onRangeChange,onRatingChange,onFilter,data,Rating,Range}) {
 
    return (
        <div className="left">
            <DropDown data={data} onChange={onChange}/>
            <div className="RangeTitle">Price Range</div>
            <div className="Range" >₹0 to ₹{Range}</div>
            <input className="Range-Picker" type="range" onChange={onRangeChange} />
            <div className="RangeTitle">Rating</div>
            <div className="Range" >{Rating +' &'}  above</div>
            <input className="Range-Picker" type="range" onChange={onRatingChange} />
            <button onClick={onFilter} className="filter-btn">Filter</button>
      </div>
    )
}
