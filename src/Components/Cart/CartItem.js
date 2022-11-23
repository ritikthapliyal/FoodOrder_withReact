import React, { useContext } from 'react'
import './CartItem.css'
import { MealContext } from '../../App'




export default function CartItem({meal}){
    
    const mealContext = useContext(MealContext)

    const onDecrement = () => {
        mealContext.dispatch({type:'REMOVE_MEAL',payload:{id:meal.id}})
    }

    const onIncrement = () => {
        mealContext.dispatch({type:'ADD_MEAL',payload:{data:meal,count:1}})
    }

    const count = meal.count
    const overall = (meal.price * count).toFixed(2)

    return (
        <div className='cart-item'>
            <div className='about-item'>
                <h2>{meal.name}</h2>
                <h3>Price : {meal.price}</h3>
            </div>
            <div className='about-purchase'>
                <label>Quantity </label>
                <span className='quantity'>x {count}</span>
                <h2>= {overall}</h2>
                <div className='add-subs-container'>
                    <button onClick={onDecrement} className='subs'>-</button>
                    <button onClick={onIncrement} className='add'>+</button>
                </div>
            </div>
        </div>
    )
}
