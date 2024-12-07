const Post = require("./persona");
const personaModel = require("./persona");

//Resolvers
const resolvers = {
  Query: {
    mostrar: async () => {
      return await personaModel.find();
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { nombre, apellidos, edad, pais } = args.post; // Asegúrate de desestructurar todos los campos
      const post = await new personaModel({ nombre, apellidos, edad, pais }).save(); // Incluye todos los campos al crear
      return post;
    },
    updatePost: async (parent, args, context, info) => {
      try {
        const { id } = args;
        console.log('ID recibido para actualización:', id); // Asegúrate de que este ID sea el correcto
        const { nombre, apellidos, edad, pais } = args.post;
        const post = await personaModel.findByIdAndUpdate(
          id,
          { nombre, apellidos, edad, pais },
          { new: true }
        );
        return post;
      } catch (error) {
        console.error("Error en la actualización:", error);
        throw new Error("Error al actualizar la persona");
      }
    },
    
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await personaModel.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;
