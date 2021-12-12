import React from 'react';
import ReactLoading from 'react-loading';

<<<<<<< HEAD
const ButtonLoading = ({ disabled, loading, text }) => {
  return (
    <button
      disabled={disabled}
      type='submit'
      className='bg-indigo-700 text-white font-bold text-lg py-3 px-6  rounded-xl hover:bg-indigo-500 shadow-md my-2 disabled:opacity-50 disabled:bg-gray-700'
=======
const ButtonLoading = ({ disabled, loading, text, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type='submit'
      className='bg-moradoOscuro-dark text-white font-bold text-lg py-3 px-6  rounded-xl hover:bg-moradoOscuro-light shadow-md my-2 disabled:opacity-50 disabled:bg-gray-700'
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
    >
      {loading ? <ReactLoading type='spin' height={30} width={30} /> : text}
    </button>
  );
};

export default ButtonLoading;