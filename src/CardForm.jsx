import React from 'react'

const CardForm = () => {
  return (
    <>
      <div className='card--container'>
        <div className='center'>
            <div className='card--front'>
            </div>
            <div className='card--back'>
            </div>
        </div>
      </div>
      <div className='form--container'>
        <form>
              <label htmlFor="name">CARDHOLDER NAME</label>
              <input id="name" type="text" />
              <label htmlFor="name">CARD NUMBER</label>
              <input id="cardNumber" type="number" />
              <label htmlFor="cvc">EXP. DATE (MM/YY) &emsp;<span>CVC</span></label>
                <div>
                <input className="form--month" id="month" type="number" />
                <input className="form--year" id="year" type="number" />
                <input className="form--cvc" id="cvc"type="number" />
                </div>  
              <button>Confirm</button>
        </form>
      </div>
    </>
  )
}

export default CardForm
