import { useEffect ,useState} from 'react';
import './App.css';
import {FiFilter} from 'react-icons/fi'
import Filter from './components/filter';
import RightSection from './components/RightSection';

function App() {
  const [data, setData] = useState([])
  const [category, setCategory] = useState('Select')
  const [Prime, setPrime] = useState([])
  const [Range, setRange] = useState(500)
  const [Rating, setRating] = useState(2.5)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setData(json) 
              setPrime(json)})
    return () => {
      // fetch('https://fakestoreapi.com/products')
      //       .then(res=>res.json())
      //       .then(json=>console.log(json))
    }
  }, [])

  window.addEventListener('resize',(e)=>{
    if(window.innerWidth>=1025){
      document.querySelector('.left').style.display="block"
    } else{
      document.querySelector('.left').style.display="none"
    }
  })

  const onChange = (e) =>{
    setCategory(e.target.value)
  }

  const onRangeChange = (e) => {
    setRange(e.target.value*10)
  }
  const onRatingChange = (e) => {
    setRating(e.target.value/20)
  }
  
  const onFilter= ()=>{
    
    let Finaldata;
    if(category!=="Select"){
      Finaldata = Prime.filter((d)=>d.category===category)
    }else{
      Finaldata = Prime
    }
    setData(Finaldata.filter((d)=>d.price<Range && d.rating.rate>Rating))
  }

  const onClicked = () => {
    if(document.querySelector('.left').style.display==="none"){
      document.querySelector('.left').style.display="block"
    } else{
      document.querySelector('.left').style.display="none"
    }
  }
  return (
    <div className="App">
      <div className="Heading" >
        My Store
        <div className="menu" onClick={onClicked}><FiFilter/></div>
      </div>
      <div className="Body">
        <Filter onChange={onChange} onRangeChange={onRangeChange} onRatingChange={onRatingChange}
        onClicked={onClicked} onFilter={onFilter} data={data} Rating={Rating} Range={Range}/>
        <RightSection data={data}/>
      </div>
    </div>
  );
}

export default App;
