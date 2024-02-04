import React from 'react'

function Cart(props) {
  console.log(props)
  return (
    <div className='h-10 flex p-6 '>
      <div>
        <img src={props.data.image} alt='img' className='h-10'/>
      </div>
      <div>
        <h1>{props.data.title}</h1>
        <p>{props.data.amount}</p>

      </div>
      <div>
         <button className='border-1 border-red-600 rounded-[100%]' onClick={props.remove}>X</button>
      </div>
    </div>
  )
}

export default Cart