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
              <input className="card--name" id="name" type="text" placeholder='e.g. Jane Appleseed'/>
              <label htmlFor="name">CARD NUMBER</label>
              <input className="card--number"  id="cardNumber" type="number" placeholder='e.g. 1234 5678 9123 0000'/>
              <label htmlFor="cvc">EXP. DATE (MM/YY) &emsp;<span>CVC</span></label>
                <div className='form--lower'>
                <input className="form--month" id="month" type="number" placeholder='MM' />
                <input className="form--year" id="year" type="number" placeholder='YY'/>
                <input className="form--cvc" id="cvc"type="number" placeholder='e.g. 123'/>
                </div>  
              <button>Confirm</button>
        </form>
      </div>
    </>
  )
}

export default CardForm
