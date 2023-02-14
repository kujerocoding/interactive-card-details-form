import React from 'react'
import { useState} from 'react'

const CardForm = () => {

  const defaultCardValue = {
    cardName: "Jane Appleseed",
    cardNumber: "1234 5678 9123 0000",
    expDateMonth: "01",
    expDateYear: 2001,
    cvc: 123
  }

  const [isCardAdded, setIsCardAdded] = useState(false)

  const [formData, setFormData] = useState(defaultCardValue)

  function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name] : value
      }
    })
  }


  function handleConfirm(e){
    e.preventDefault()
    setIsCardAdded(prevState => !prevState)
  }

  function handleContinue(e){
    e.preventDefault()
    setIsCardAdded(prevState => !prevState)
    setFormData(defaultCardValue)
  }

  const regexCardNumber = /^[\d{4} ]{19}$/g
  const isCardNumberValid = regexCardNumber.test(formData.cardNumber)

  const style = {
    border: isCardNumberValid ?  '1px solid #dedddf' : '1px solid red'
  }

  const cardForm = (
    <form id="cardForm">
              <label htmlFor="cardName">CARDHOLDER NAME</label>
                <input className="card--name"
                name='cardName'  
                id='cardName'  
                type="text" 
                placeholder='e.g. Jane Appleseed'
                onChange={handleChange}
                />
                {formData.cardName === "" && <p className='error--message'>Can't be blank</p>}
              <label htmlFor="cardNumber">CARD NUMBER</label>
                <input className="card--number"  
                name="cardNumber" 
                id="cardNumber" 
                type="text" 
                placeholder='e.g. 1234 5678 9123 0000'
                onChange={handleChange}
                maxLength={19}
                style={style}/>
                {!isCardNumberValid && <p className='error--message'>Wrong format, numbers only</p>}
                {formData.cardNumber === "" && <p className='error--message'>Can't be blank</p>}
              <label htmlFor="expDateMonth">EXP. DATE (MM/YY) &emsp; &emsp;<span>
                <label htmlFor='cvc'>CVC</label></span></label>
                <div className='form--lower'>
                  <input className="form--month" 
                  name="expDateMonth"
                  id="expDateMonth" 
                  type="tel"
                  pattern='/[\d]{2}/'
                  maxLength={2} 
                  placeholder='MM' 
                  onChange={handleChange}/>
                  
                  <input className="form--year" 
                  name="expDateYear" 
                  type="tel" 
                  pattern='/[\d]{4}/'
                  maxLength={4}
                  placeholder='YY'
                  onChange={handleChange}/>
                  <input className="form--cvc" 
                  name="cvc"
                  id="cvc"
                  type="tel" 
                  pattern='/[\d]{3}/'
                  maxLength={3}
                  placeholder='e.g. 123'
                  onChange={handleChange}/>
                  
                </div>
                <div className='month-cvc--message--container'>
                  {formData.expDateMonth === "" && <p className='error--message'>Can't be blank</p>}   
                  {formData.cvc === "" && <p className='error--message'>Can't be blank</p>} 
                </div> 
        </form>
  )

  const cardAdded = (
    <div className='card--added'>
          <img src="./src/assets/images/icon-complete.svg" alt="complete icon" />
          <h1>Thank you!</h1>
          <p>We've added your card details</p>
        </div>
  )

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
        {isCardAdded ? cardAdded : cardForm}
        <button type='submit' form='cardForm' onClick={isCardAdded ? handleContinue : handleConfirm}>{isCardAdded ? "Continue" : "Confirm"}</button>
      </div>
    </>
  )
}

export default CardForm
