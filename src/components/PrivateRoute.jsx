import { useUser } from 'context/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol)) {
    return children;
  }

<<<<<<< HEAD
  return <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>;
=======
  return <div className='text-9xl text-cafe-default '>No estás autorizado para ver este sitio.</div>;
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
};

export default PrivateRoute;