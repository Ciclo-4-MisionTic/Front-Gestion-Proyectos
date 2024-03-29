import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
import { EDITAR_PERFIL } from 'graphql/usuarios/mutations';
import useFormData from 'hooks/useFormData';
import { uploadFormData } from 'utils/uploadFormData';
import { useUser } from 'context/userContext';
import { GET_USUARIO } from 'graphql/usuarios/queries';
import { toast } from 'react-toastify';
import {Link } from 'react-router-dom';

const EditarProfile = () => {
  const [editFoto, setEditFoto] = useState(false);
  const { form, formData, updateFormData } = useFormData();
  const { userData, setUserData } = useUser();

  // falta capturar error de mutacion
  const [editarPerfil, { data: dataMutation, loading: loadingMutation }] =
    useMutation(EDITAR_PERFIL);

  // falta capturar error de query
  const {
    data: queryData,
    loading: queryLoading,
    refetch,
  } = useQuery(GET_USUARIO, {
    variables: {
      _id: userData._id,
    },
  });

  useEffect(() => {
    if (dataMutation) {
      setUserData({ ...userData, foto: dataMutation.editarPerfil.foto });
      toast.success('Perfil modificado con exito');
      refetch();
    }
  }, [dataMutation]);

  const submitForm = async (e) => {
    e.preventDefault();

    const formUploaded = await uploadFormData(formData);

    editarPerfil({
      variables: {
        _id: userData._id,
        campos: formUploaded,
      },
    });
  };

  if (queryLoading) return <div>Loading...</div>;

  return (
    <div className='p-10 flex flex-col items-center justify-center w-full'>
      <div className='self-start' >
                <Link to='/perfil'>
                <i className='fas fa-arrow-left flechaRegresar' />
                </Link>
              </div>
      <h1 className='titulo'>Editar Perfil</h1>
      <form className='letraMediana' ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <Input
          defaultValue={queryData.Usuario.nombre}
          label='Nombre'
          name='nombre'
          type='text'
          required
        />
        <Input
          defaultValue={queryData.Usuario.apellido}
          label='Apellido'
          name='apellido'
          type='text'
          required
        />
        <Input
          defaultValue={queryData.Usuario.identificacion}
          label='Identificación'
          name='identificacion'
          type='text'
          required
        />
        {/* {queryData.Usuario.foto && !editFoto ? (
          <div className='flex flex-col items-center'>
            <img
              className='h-32'
              src={queryData.Usuario.foto}
              alt='Foto Usuario'
            />
            <button
              type='button'
              onClick={() => setEditFoto(true)}
              className='bg-indigo-300 p-1 my-2 rounded-md text-white'
            >
              Cambiar imagen
            </button>
          </div>
        ) : (
          <div>
            <Input label='Foto' name='foto' type='file' required />
            <button
              type='button'
              onClick={() => setEditFoto(false)}
              className='bg-indigo-300 p-1 my-2 rounded-md text-white'
            >
              Cancelar
            </button>
          </div>
        )} */}
        <ButtonLoading
          text='Confirmar'
          loading={loadingMutation}
          disabled={false}
        />
      </form>
    </div>
  );
};

export default EditarProfile;