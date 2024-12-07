require('dotenv').config(); // Para cargar variables de entorno desde .env
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

//Database Connection
const URL = process.env.MONGO_URI || "mongodb+srv://eliasolivan230802:9UwOkfEUkDWMhXyi@mensajeriacluster.6xuvf.mongodb.net/GraphQL?retryWrites=true&w=majority";
mongoose.connect(
  URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("DB CONNECTED")
);

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server UP & Running *${PORT}`));
  console.log(`http://localhost:${PORT}/graphql`);
};
startServer();
