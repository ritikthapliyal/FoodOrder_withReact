import React, { useState } from 'react'
import "./MealForm.css"

export default function MealForm(props){
  
  const [count,setCount] = useState(1)

  const valid = (event)=> {
    
    event.preventDefault()
    props.onMealSelected(count)
    setCount(1)
  }
  
  return (
    <form onSubmit={valid}>
        <div className='input_'>
          <label>Quantity :</label>
          <input onChange={(e)=>{setCount(e.target.value)}}S type='number' min='1' max='5' step='1' value={count}>
          </input>
        </div>
        <button className='add-to-cart'>Add to Cart</button>
    </form>
  )
}
