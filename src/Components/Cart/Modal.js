import React, { Fragment,useContext } from 'react'
import ReactDOM from 'react-dom'
import CartItem from './CartItem'
import './Modal.css'
import { MealContext } from '../../App'

export default function Modal(props){

  const mealContext = useContext(MealContext)
  const cartMeals = mealContext.currentState.items
  const Total = mealContext.currentState.totalAmount.toFixed(2)


  const Backdrop = (props)=>{
    return (<div onClick={props.hideOverlay} className='OVERLAY_STYLE'></div>)
  }

  const Overlay = (props) =>{
    return (
              <div className='MODAL_STYLE'>
                {
                  props.Meals.length > 0 && props.Meals.map((meal)=>{ return <CartItem key={meal.id} meal={meal}></CartItem>})
                }
                <div className='buy'>
                  <span className='total_span'>Total : {Total}</span>
                  <div className='button-container'>
                        <button onClick={props.hideOverlay} className='close'>Close</button>
                        <button className='order'>Order</button>
                  </div>
                </div>
          </div>
      )
    }


  const element = document.getElementById('portal')

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop hideOverlay={props.hideOverlay}></Backdrop>,element)}
      {ReactDOM.createPortal(<Overlay Meals={cartMeals} total={Total} hideOverlay={props.hideOverlay}></Overlay>,element)}
    </Fragment>
  )
}
