import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PERSONA, GET_PERSONAS } from "./queries";

const AddPerson = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    pais: "",
  });

  const [createPersona] = useMutation(CREATE_PERSONA, {
    refetchQueries: [{ query: GET_PERSONAS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPersona({ variables: { post: formData } });
    setFormData({ nombre: "", apellidos: "", edad: "", pais: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Apellidos"
        value={formData.apellidos}
        onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
      />
      <input
        type="text"
        placeholder="Edad"
        value={formData.edad}
        onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
      />
      <input
        type="text"
        placeholder="País"
        value={formData.pais}
        onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
      />
      <button type="submit">Agregar Persona</button>
    </form>
  );
};

export default AddPerson;
