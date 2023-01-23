import Tour from './Tour';

function Tours(props){
  return(
    <>
    <section>
    <div className="title">
      <h1>Our Tours</h1>
      <div className="underline"></div>
    </div>
    <div>
      {props.tours.map((tour)=>{
        return <Tour key={tour.id} {...tour} removeTour={props.removeTour}/>
      })}
    </div>
    </section>
    </>
  )
}

export default Tours;