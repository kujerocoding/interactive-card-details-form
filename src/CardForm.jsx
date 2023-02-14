import React from 'react'
import { useState} from 'react'

const CardForm = () => {

  const defaultCardValue = {
    cardName: "Jane Appleseed",
    cardNumber: "1234 5678 9123 0000",
    cvc: 123,
    expDateMonth: "01",
    expDateYear: 2001
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
    const formDataArr = Object.values(formData)
    const isFilled = formDataArr.every(item => item !== "")
    if(isFilled && defaultCardValue.cardName !== formData.cardName){
      setIsCardAdded(prevState => !prevState)
    }else{
      return;
    }
    
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
                id='cardName'  
                name='cardName'  
                onChange={handleChange}
                placeholder='e.g. Jane Appleseed'
                type="text" 
                />
                {formData.cardName === "" && <p className='error--message'>Can't be blank</p>}
              <label htmlFor="cardNumber">CARD NUMBER</label>
                <input className="card--number"  
                id="cardNumber" 
                maxLength={19}
                name="cardNumber" 
                onChange={handleChange}
                placeholder='e.g. 1234 5678 9123 0000'
                style={style}
                type="text" 
                />
                {!isCardNumberValid && <p className='error--message'>Wrong format, numbers only</p>}
                {formData.cardNumber === "" && <p className='error--message'>Can't be blank</p>}
              <label htmlFor="expDateMonth">EXP. DATE (MM/YY) &emsp; &emsp;<span>
                <label htmlFor='cvc'>CVC</label></span></label>
                <div className='form--lower'>
                  <input className="form--month" 
                  id="expDateMonth" 
                  maxLength={2} 
                  name="expDateMonth"
                  onChange={handleChange}
                  pattern='/[\d]{2}/'
                  placeholder='MM' 
                  type="tel"
                  />
                  
                  <input className="form--year" 
                  maxLength={4}
                  name="expDateYear" 
                  onChange={handleChange}
                  pattern='/[\d]{4}/'
                  placeholder='YY'
                  type="tel" 
                  />
                  <input className="form--cvc" 
                  id="cvc"
                  maxLength={3}
                  name="cvc"
                  onChange={handleChange}
                  pattern='/[\d]{3}/'
                  placeholder='e.g. 123'
                  type="tel" 
                  />
                  
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
        <div className='attribution'>
            <p>Challenge by <a href="https://www.frontendmentor.io/home" target="_blank">Frontend Mentor.</a> Coded by kujerocoding</p>
      </div>
      </div>
      
    </>
  )
}

export default CardForm
