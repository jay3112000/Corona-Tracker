import React from 'react'
import '../components/cards.css'
const Catalogcards=(props)=>{
    return (
      <>
        <div className='catalog-card'>
        
        <div className='catalog-card-content'>
          <div className='catalog-card-title'>
            <h3>
               {props.state}
            </h3>
          </div>
          <div >

            <h4 >
              Active : 
              {props.affected}
            </h4>
            <h4>
              Recovered : 
              {props.recovered}
            </h4>
            <h4>
              Deaths : 
              {props.deaths}
            </h4>
          </div>
        </div>
      </div>
      </>
    );
}

export default Catalogcards;
