import React from 'react'
import { useState } from 'react'

const CardForm = () => {

  const [isCardAdded, setIsCardAdded] = useState(false)

  const [formData, setFormData] = useState({
    cardName: "Jane Appleseed",
    cardNumber: "1234 5678 9123 0000",
    expDateMonth: "01",
    expDateYear: 2001,
    cvc: 123
  })

  function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name] : value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setIsCardAdded(prevState => !prevState)
  }



  return (
    <>
      <div className='card--container'>
        <div className='center'>
            <div className='card--front'>
                <img src="./src/assets/images/card-logo.svg" alt="" />
                <h4>{formData.cardNumber}</h4>
                <p>{formData.cardName}<span>{formData.expDateMonth}/{formData.expDateYear}</span></p>
            </div>
            <div className='card--back'>
              <p>{formData.cvc}</p>
            </div>
        </div>
      </div>
      <div className='form--container'>
        <div className='card--added'>
          <img src="./src/assets/images/icon-complete.svg" alt="complete icon" />
          <h1>Thank you!</h1>
          <p>We've added your card details</p>
        </div>
        <form onSubmit={handleSubmit}>
              <label htmlFor="cardName">CARDHOLDER NAME</label>
              <input className="card--name"
              name='cardName'  
              id='cardName'  
              type="text" 
              placeholder='e.g. Jane Appleseed'
              onChange={handleChange}/>
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input className="card--number"  
              name="cardNumber" 
              id="cardNumber" 
              type="number" 
              placeholder='e.g. 1234 5678 9123 0000'
              onChange={handleChange}/>
              <label htmlFor="expDateMonth">EXP. DATE (MM/YY) &emsp;<span>
                <label htmlFor='cvc'>CVC</label></span></label>
                <div className='form--lower'>
                <input className="form--month" 
                name="expDateMonth"
                id="expDateMonth" 
                type="number" 
                placeholder='MM' 
                onChange={handleChange}/>
                <input className="form--year" 
                name="expDateYear" 
                type="number" 
                placeholder='YY'
                onChange={handleChange}/>
                <input className="form--cvc" 
                name="cvc"
                id="cvc"
                type="number" 
                placeholder='e.g. 123'
                onChange={handleChange}/>
                </div>  
              
        </form>
        <button>Confirm</button>
      </div>
    </>
  )
}

export default CardForm
