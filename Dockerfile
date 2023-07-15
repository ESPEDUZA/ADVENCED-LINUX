# Utilisation d'une image Node.js pour construire l'application
FROM node:18
# Création du répertoire de l'application
WORKDIR /usr/src/app
# Copie des fichiers package.json et package-lock.json pour installer les dépendances de l'application
COPY package*.json ./
# Installation des dépendances
RUN npm install
# Copie des autres fichiers de l'application
COPY . .
# Construction de l'application pour la production
RUN npm run build
# Utilisation d'un serveur web léger pour servir l'application construite
FROM nginx:stable-alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
# Exposition du port 80 du conteneur
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
