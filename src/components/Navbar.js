import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='bg-blue-500 flex justify-between px-[6vw]  py-2 items-center'>
      <p className='text-white text-[1.8rem] font-semibold'>ShopKart.</p>
      <div className='flex  gap-4'>
     <Link to='/home'>   <ul className='text-white'>Porducts</ul></Link>
     <Link to='/'> <ul className='text-white'>Sign Out</ul> </Link>
      <Link to='/cart'>  <ul><ShoppingCartIcon/></ul>
      </Link>
      </div>
    </div>
  )
}

export default Navbar