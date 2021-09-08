import '../App.css'
import ProductTile from './ProductTile'

export default function RightSection({data}) {
    return (
        <div className="right">
          {data.map((d,i)=>{
              return <ProductTile key={d.id} title= {d.title} category={d.category} price={d.price} rating={d.rating.rate} image={d.image} />
            })
        }
        </div>
    )
}
