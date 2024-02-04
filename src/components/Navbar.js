import React,{useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { ProductDataContext } from '../context/context';

function Navbar() {
  const { cart } = useContext(ProductDataContext);
  return (
    <div className='bg-blue-500 flex justify-between px-[6vw]  py-2 items-center'>
      <p className='text-white text-[1.8rem] font-semibold'>ShopKart.</p>
      <div className='flex  gap-4'>
     <Link to='/home'>   <ul className='text-white'>Porducts</ul></Link>
     <Link to='/'> <ul className='text-white'>Sign Out</ul> </Link>
      <Link to='/cart'>  <ul><ShoppingCartIcon/></ul>
      <p className='bg-red-500 text-white border-3 rounded-[100%] flex items-center justify-center relative top-[-2rem] left-6'>{cart.items.length}</p> 
      </Link>
      </div>
    </div>
  )
}

export default Navbar