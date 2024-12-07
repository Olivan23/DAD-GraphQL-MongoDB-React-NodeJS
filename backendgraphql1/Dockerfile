# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código al contenedor
COPY . .

# Exponer el puerto en el que corre tu aplicación
EXPOSE 4000

# Definir el comando para ejecutar la aplicación
CMD ["npm", "start"]
