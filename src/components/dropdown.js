import { useState } from 'react'
import '../App.css'

export default function DropDown({data,onChange}) {
    const [Categorydata, setCategorydata] = useState([])
    return (
        <div>
            <div className="DD-title">Category</div>
            <select name="select" className="DropDown" onChange={onChange}>
                <option value="Select">Select</option>
                {
                    data.forEach(element => {
                   if(!Categorydata.includes(element.category)){
                        setCategorydata([...Categorydata,element.category])
                    }
                 })
                }
                {
                    Categorydata.map((data,i)=>{
                        return  <option key={i} value={data}>{data}</option>
                    })
                }
            </select>
        </div>
    )
}
