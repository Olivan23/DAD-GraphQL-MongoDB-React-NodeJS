import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PERSONAS, UPDATE_PERSONA, DELETE_PERSONA } from "./queries";

const PersonList = () => {
  const { loading, error, data } = useQuery(GET_PERSONAS);
  const [updatePersona] = useMutation(UPDATE_PERSONA);
  const [deletePersona] = useMutation(DELETE_PERSONA, {
    refetchQueries: [{ query: GET_PERSONAS }],
  });

  const [editData, setEditData] = useState({
    id: "",
    nombre: "",
    apellidos: "",
    edad: "", // Mantenemos edad como String
    pais: "",
  });

  const handleEdit = (persona) => {
    setEditData({ ...persona, edad: persona.edad ? persona.edad.toString() : "" });
  };

  const handleDelete = (id) => {
    deletePersona({ variables: { id } });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const result = await updatePersona({
        variables: {
          id: editData.id,
          post: {
            nombre: editData.nombre,
            apellidos: editData.apellidos,
            edad: editData.edad, // Mantén como string
            pais: editData.pais,
          },
        },
      });

      console.log('Resultado de la actualización:', result);
      if (result.data.updatePost) {
        alert('Persona actualizada exitosamente');
      }

      setEditData({ id: "", nombre: "", apellidos: "", edad: "", pais: "" });
    } catch (error) {
      console.error("Error al actualizar la persona:", error);
      alert(`Error al actualizar: ${error.message}`);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Personas</h2>
      <ul>
        {data.mostrar.map((persona) => (
          <li key={persona.id}>
            {persona.nombre} {persona.apellidos} - {persona.edad} años, {persona.pais}
            <button onClick={() => handleEdit(persona)}>Editar</button>
            <button onClick={() => handleDelete(persona.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {/* Formulario de edición */}
      {editData.id && (
        <form onSubmit={handleSubmitEdit}>
          <h3>Editar Persona</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={editData.nombre}
            onChange={(e) => setEditData({ ...editData, nombre: e.target.value })}
          />
          <input
            type="text"
            placeholder="Apellidos"
            value={editData.apellidos}
            onChange={(e) => setEditData({ ...editData, apellidos: e.target.value })}
          />
          <input
            type="number"
            placeholder="Edad"
            value={editData.edad}
            onChange={(e) => setEditData({ ...editData, edad: e.target.value.toString() })}
          />
          <input
            type="text"
            placeholder="País"
            value={editData.pais}
            onChange={(e) => setEditData({ ...editData, pais: e.target.value })}
          />
          <button type="submit">Actualizar Persona</button>
        </form>
      )}
    </div>
  );
};

export default PersonList;
