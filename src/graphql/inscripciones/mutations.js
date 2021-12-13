import {gql} from '@apollo/client'

const EDITAR_INSCRIPCION = gql `
mutation EditarInscripcion($estado: Enum_EstadoInscripcion!) {
  editarInscripcion(estado: $estado) {
    _id
    estado
    proyecto {
      nombre
    }
  }
}
`;

const CREAR_INSCRIPCION = gql `
mutation CrearInscripcion($estado: Enum_EstadoInscripcion!, $proyecto: String!, $estudiante: String!) {
  crearInscripcion(estado: $estado, proyecto: $proyecto, estudiante: $estudiante) {
    _id
    estado
  }
}
`;

export { EDITAR_INSCRIPCION, CREAR_INSCRIPCION };

