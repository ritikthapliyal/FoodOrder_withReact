import React from 'react'
import "./MealsSummary.css"


export default function MealsSummary(){
  return (
    <section className='meal-summary-container'>
        <h2 className='meal-summary-heading'>Delicious Food, Delivered To You</h2>
        <p className='p1'>
            Choose your favorite meal from our broad selection of available meals
            and enjoy a delicious lunch or dinner at home.
        </p>
        <p className='p2'>
            All our meals are cooked with high-quality ingredients, just-in-time and
            of course by experienced chefs!
        </p>
    </section>
  )
}
