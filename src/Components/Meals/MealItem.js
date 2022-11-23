import React, { useContext } from 'react'
import "./MealItem.css"
import tag from "../../Assets/dollar-tag.png"
import tray from "../../Assets/tray.png"
import about from "../../Assets/about.png"
import MealForm from './MealForm'
import { MealContext } from '../../App'



export default function MealItem(props){

  const price = `$${props.meal.price.toFixed(2)}`
  const mealContext = useContext(MealContext)
  

  const onMealSelectedHandler = (count) =>{
    mealContext.dispatch({type:'ADD_MEAL',payload:{data : props.meal,count:count}})
  } 

  
  return (
    <div className='mealitem-container'>
      <div className='meals'>
          <div className='common'>
            <img className='tray' src={tray}></img>
            <h2>{props.meal.name}</h2>
          </div>
          <div className='common'>
            <img className='about' src={about}></img>
            <p>{props.meal.description}</p>
          </div>
          <div className='common'>
            <img className='tag' src={tag}></img>
            <h3>{price}</h3>
          </div>
      </div>
      <MealForm mealid={props.meal.id} onMealSelected={onMealSelectedHandler}></MealForm>
    </div>
  )
}
