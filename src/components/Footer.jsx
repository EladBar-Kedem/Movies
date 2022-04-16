import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/pageCount';

const Footer = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decrement())} className='footerBtn'>previos</button>
      <button onClick={() => dispatch(increment())} className='footerBtn'>next</button>
    </div>
  )
}

export default Footer
