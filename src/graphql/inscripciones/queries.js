import { gql } from '@apollo/client'

const GET_INSCRIPCIONES =  gql `
    query Query {
    Inscripciones {
        _id
        estado
        fechaIngreso
        fechaEgreso
        proyecto {
          nombre
         estado
        }
        estudiante {
          nombre
          apellido
         correo
        }
    }
    }
`;

export {GET_INSCRIPCIONES}