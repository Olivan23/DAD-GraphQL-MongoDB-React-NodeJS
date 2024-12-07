import { gql } from "@apollo/client";

// Consultar todas las personas
export const GET_PERSONAS = gql`
  query GetPersonas {
    mostrar {
      id
      nombre
      apellidos
      edad
      pais
    }
  }
`;

// Crear persona
export const CREATE_PERSONA = gql`
  mutation CreatePersona($post: PostInput!) {
    createPost(post: $post) {
      id
      nombre
      apellidos
      edad
      pais
    }
  }
`;

// Modificar persona
export const UPDATE_PERSONA = gql`
  mutation UpdatePersona($id: String!, $post: PostInput!) {
    updatePost(id: $id, post: $post) {
      id
      nombre
      apellidos
      edad
      pais
    }
  }
`;

// Eliminar persona
export const DELETE_PERSONA = gql`
  mutation DeletePersona($id: String!) {
    deletePost(id: $id)
  }
`;
