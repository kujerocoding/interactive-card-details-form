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
      <form >
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
            <label htmlFor="name">Number</label>
            <input id="number" type="number" />
            <label htmlFor="cvc">cvc</label>
            <input id="cvc"type="number" />
            <input type="number" min={0} max={99} />
      </form>
    </>
  )
}

export default CardForm
