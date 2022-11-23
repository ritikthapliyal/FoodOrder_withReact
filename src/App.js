import React,{createContext, useReducer} from 'react'
import Header from './Components/Layout/Header'
import MealsSummary from './Components/Meals/MealsSummary'
import Meals from './Components/Meals/Meals'

export const MealContext = createContext()

const initialState = {
  items : [],
  totalAmount: 0,
}

function reducer(currentState,action){

  switch(action.type){
    
    case 'ADD_MEAL':
          return addMeal(currentState,action.payload.data,action.payload.count)    
    
    case 'REMOVE_MEAL':
          const id = action.payload.id
          const index =  currentState.items.findIndex( item => item.id === id)

          const item = currentState.items[index]

          const updatedAmount = currentState.totalAmount - item.price
          let updatedItems

          if(item.count === 1){
            updatedItems = currentState.items.filter( item => item.id !== id)
          }
          else{
            const newItem = {...item,count: item.count-1}
            updatedItems = [...currentState.items]
            updatedItems[index] = newItem  
          }


          console.log(updatedAmount,updatedItems)
          

          return {
            items: updatedItems,
            totalAmount : updatedAmount
          }

    default:
          return currentState
  }

}

function addMeal(currentState,data,count){
          
          const index =  currentState.items.findIndex( item => item.id === data.id)
          count = Number(count)

          if (index === -1){
            currentState.items.push({...data,count:count})
          }
          else{
            currentState.items[index].count += count
          }

          currentState.totalAmount += (data.price * count)
          
          return {...currentState}
}

export default function App() {
  
  const [currentState,dispatch] = useReducer(reducer,initialState)

  return (
    <MealContext.Provider value={{currentState:currentState,dispatch:dispatch}}>
      <Header></Header>
      <MealsSummary></MealsSummary>
      <Meals></Meals>
    </MealContext.Provider>
  )
}
