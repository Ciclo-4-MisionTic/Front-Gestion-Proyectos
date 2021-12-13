import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_INSCRIPCIONES } from 'graphql/inscripciones/queries'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ButtonLoading from 'components/ButtonLoading';
import { Enum_EstadoInscripcion } from 'utils/enums';
import { EDITAR_INSCRIPCION, CREAR_INSCRIPCION } from 'graphql/inscripciones/mutations';


const IndexInscripciones = () => {
    const {data, error,loading} = useQuery(GET_INSCRIPCIONES);

    useEffect(() =>{
    },[data]);
     
    useEffect(()=>{
        if(error){
            toast.error("Error consultando las inscripciones")
        }
    },[error])

    if(loading) return <div>Cargando....</div>
    return (
            <div>
                <div className='titulo'> Datos Inscripcion:</div>
                
                <table className='tabla'>
                <thead>
                    <tr>
                    <th>Estado</th>
                    <th>FechaIngreso</th>
                    <th>FechaEgreso</th>
                    <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.Inscripciones ? (
                        <>
                            {data.Inscripciones.map((u) => { 
                                return (
                                    <tr key={u._id}>
                                    <td>{u.FechaEgreso}</td>
                                    <td>{u.FechaIngreso}</td>
                                    <td>{Enum_EstadoInscripcion[u.estado]}</td>
                                    <td>
                                        <Link to={`/inscripciones/editar/${u._id}`}>
                                            <i className='fas fa-pen  lapizEditar' />
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

    );
};

export default IndexInscripciones