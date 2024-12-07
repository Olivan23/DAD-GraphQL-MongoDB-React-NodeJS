# Usa una imagen base de Node.js
FROM node:18

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Expone el puerto 3000 (por defecto para aplicaciones React en desarrollo)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
