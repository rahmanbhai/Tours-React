import { useEffect, useState } from "react";
import Loading from './Loading';
import Tours from './Tours';
import "./index.css";

function App(){

  const url = "https://course-api.com/react-tours-project";

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id!==id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tour = await response.json();
    setLoading(false);
    setTours(tour);
  }

  useEffect(()=>{
    fetchTours();
  },[])

  if(loading){
    return(
      <Loading />
    )
  }

  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={()=> fetchTours()}>refresh</button>
        </div>
      </main>
    )
  }

  return(
    <>
    <main>
        <Tours tours={tours} removeTour={removeTour}/>
    </main>
    </>
  )
}

export default App;