import React, { useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { ProductDataContext } from '../context/context';

function Card(props) {
  const { setSelectedProductData, addToCart } = useContext(ProductDataContext);
  const navigate = useNavigate();

  function handleAddToCart() {
    addToCart(props.data);
  }

  function handleCardClick() {
    setSelectedProductData(props.data);
    navigate(`/product`);
  }

  return (
    <div className='w-64 text-[rgb(82,81,81)] overflow-hidden flex flex-col bg-white shadow-md h-96'>
      <img onClick={handleCardClick} src={props.data.image} alt='img' className='h-2/3 w-full' />
      <div className='px-3 flex flex-col gap-1'>
        <p className='text-sm'>{props.data.title}</p>
        <p className='text-[.9rem]'>${props.data.amount}</p>
        <p className='bg-green-700 text-white w-fit px-[2px] text-[.7rem]'>{props.data.rating}</p>
      </div>

      <div className='text-[#525151] px-3 mt-auto flex justify-between py-2'>
        <FavoriteIcon />
        <AddShoppingCartIcon onClick={handleAddToCart} />
      </div>
    </div>
  );
}

export default Card;
