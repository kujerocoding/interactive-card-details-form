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
      <div>
        <form>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" />
              <label htmlFor="name">Number</label>
              <input id="cardNumber" type="number" />
              <label htmlFor="cvc">cvc</label>  
              <input id="month" type="number" />
              <input id="year" type="number" />
              <input id="cvc"type="number" />
              <button>Confirm</button>
        </form>
      </div>
    </>
  )
}

export default CardForm
