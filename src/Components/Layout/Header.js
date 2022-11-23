import React,{Fragment, useState} from 'react'
import './Header.css'
import CartButton from '../Cart/CartButton'
import Modal from '../Cart/Modal'

export default function Header(){

  const [displayOverlay,setDisplayOverlay] = useState(false)

  const showOverlay = () => {
    setDisplayOverlay(true)
  }

  const hideOverlay = () => {
    setDisplayOverlay(false)
  }

  return (
    <Fragment>
            <div className='h1-container'>
              <h1 className='react-meals'>React Meals</h1>
            </div>
            <div className='cart-button-container'>
              <CartButton showOverlay={showOverlay}></CartButton>
              { displayOverlay && <Modal hideOverlay={hideOverlay}></Modal>}
            </div>
        <div className='image-container'>
        </div>
    </Fragment>
  )
}
