import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_USUARIOS } from 'graphql/usuarios/queries'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_EstadoUsuario, } from 'utils/enums';
import PrivateRoute from 'components/PrivateRoute';
import { Enum_Rol } from 'utils/enums';


const IndexUsuarios = () => {
    const {data,error,loading} = useQuery(GET_USUARIOS);

    useEffect(()=>{
    },[data]);

    useEffect(()=>{
        if(error){
            toast.error("Error consultando los usuarios")
        }
    },[error])

    if(loading) return <div>Cargando....</div>
    return (
        <PrivateRoute roleList={[ "LIDER", "ADMINISTRADOR"]}>
            <div>
                <div className='titulo'> Datos Usuarios:</div>
                <table className='tabla'>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Identificación</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Ver</th>
                    <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.Usuarios ? (
                        <>
                            {data.Usuarios.map((u) => {
                                return (
                                    <tr key={u._id}>
                                    <td>{u.nombre}</td>
                                    <td>{u.apellido}</td>
                                    <td>{u.correo}</td>
                                    <td>{u.identificacion}</td>
                                    <td>{Enum_Rol[u.rol]}</td>
                                    <td>{Enum_EstadoUsuario[u.estado]}</td>
                                    <td>
                                    <Link to={`/usuarios/verUsuario/${u._id}`}>
                                            <i className='fas fa-eye  ver usuario' />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/usuarios/editar/${u._id}`}>
                                            <i className='fas fa-pen  lapizEditarOscuro' />
                                        </Link>
                                    </td>

                                </tr>
                            );
                        })}
                        </>
                 ) : (
                    <div>No autorizado</div>
                 )}
                </tbody>
                </table>
            </div>
        </PrivateRoute>
    );
};

export default IndexUsuarios