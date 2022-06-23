import './App.css';
import React, {useState} from 'react'
const Tour = ({id,image,info,price,name, removeTour})=> {
    const [readMore, setReadMore]= useState(false)
    return <div className="tour">
        <img src ={image} alt={name}></img>
        <footer>
          <div className="tour-info" >
              <h4>{name}</h4>
              <h4 className='tour-price'>{price} $</h4>
              </div> 
              <div>
                  <p className='info'>
                    { readMore ? info: `${info.substring(0,200)}...`
                    }  
                   <button className='moreless' onClick={()=> setReadMore(!readMore)}>
                       {readMore ? 'show less': 'read more'}
                   </button>
                  </p>
                  <button className='deletebtn' onClick={()=>removeTour(id) }> not interested</button>
              </div>
        </footer>
    </div>

}

export default Tour