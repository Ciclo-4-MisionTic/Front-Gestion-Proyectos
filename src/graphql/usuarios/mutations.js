<<<<<<< HEAD
import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation EditarUsuario(
=======
import {gql} from '@apollo/client'

const EDITAR_USUARIO = gql`
mutation EditarUsuario(
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
    $_id: String!
    $nombre: String!
    $apellido: String!
    $identificacion: String!
    $correo: String!
    $estado: Enum_EstadoUsuario!
  ) {
    editarUsuario(
      _id: $_id
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
      estado: $estado
    ) {
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol
<<<<<<< HEAD
=======

>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
    }
  }
`;

<<<<<<< HEAD
export { EDITAR_USUARIO };
=======
export { EDITAR_USUARIO }
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
