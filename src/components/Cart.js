import React from 'react'

function Cart(props) {
  console.log(props)
  return (
    <div className=' h-36 flex gap-2 p-6 text-[gray] bg-white'>
      <div className='p-2'>
        <img src={props.data.image} alt='img' className='h-24'/>
      </div>
      <div>
        <h1>{props.data.title}</h1>
        <p>$ {props.data.amount}</p>

      </div>
      <div>
         <button className='border-3 border-red-600 text-red-600 rounded-[100%]' onClick={props.remove}><p>x</p></button>
      </div>
    </div>
  )
}

export default Cart