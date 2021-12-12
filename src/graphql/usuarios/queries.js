<<<<<<< HEAD
import {gql} from '@apollo/client';

const GET_USUARIOS = gql`
query Usuarios {
  Usuarios {
    _id
    nombre
    apellido
    identificacion
    correo
    estado
    rol
  }
}
`;

const GET_USUARIO = gql`
query Usuario($id: String!) {
  Usuario(_id: $id) {
    _id
    nombre
    apellido
    identificacion
    correo
    estado
    rol
  }
}
`;

export {GET_USUARIOS, GET_USUARIO};
=======
import { gql } from '@apollo/client'

const GET_USUARIOS = gql `
    query Usuarios {
    Usuarios {
        _id
        nombre
        apellido
        correo
        estado
        identificacion
        rol
    }
}
`;
const GET_USUARIO = gql`
    query Usuario($_id: String!) {
    Usuario(_id: $_id) {
        _id
        nombre
        apellido
        correo
        estado
        identificacion
        rol
    }
}
`;

export {GET_USUARIOS, GET_USUARIO}
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
