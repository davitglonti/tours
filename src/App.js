import React, {useState, useEffect} from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours]= useState([]);


  const removeTour= (id)=> {
    const newTours= tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
   try {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours)
   }  catch(error) {
    setLoading(false)
   }
  }
  useEffect(()=>{
fetchTours()
  },[])
  if(loading){
    return(
      <div> 
        <Loading />
      </div>
    )
  }
  if(tours.length=== 0){
    return <div>
      <h2> no tours left</h2>
     
    </div>
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
