import React from 'react'
import { useState } from 'react'

const CardForm = () => {

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


  //console.log(formData)


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
        <form>
              <label htmlFor="name">CARDHOLDER NAME</label>
              <input className="card--name"
              name='cardName'  
              type="text" 
              placeholder='e.g. Jane Appleseed'
              onChange={handleChange}/>
              <label htmlFor="name">CARD NUMBER</label>
              <input className="card--number"  
              name="cardNumber" 
              type="number" 
              placeholder='e.g. 1234 5678 9123 0000'
              onChange={handleChange}/>
              <label htmlFor="cvc">EXP. DATE (MM/YY) &emsp;<span>CVC</span></label>
                <div className='form--lower'>
                <input className="form--month" 
                name="expDateMonth"
                id="month" 
                type="number" 
                placeholder='MM' 
                onChange={handleChange}/>
                <input className="form--year" 
                name="expDateYear"
                id="year" 
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
              <button>Confirm</button>
        </form>
      </div>
    </>
  )
}

export default CardForm
