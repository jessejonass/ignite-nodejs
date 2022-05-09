# usando a imagem do node vinda do docker
FROM node

# diretório onde quero que minhas informações estejam contidas no container
WORKDIR /usr/app

# copiar package da raiz para o meu diretório acima - não vai node_modules
# o package json vai instalar e o .dockerignore ignorará a node_modules
COPY package.json ./

# nem todas as imagens vem com yarn - npm é mais confiavel por vir com o node
RUN npm install --legacy-peer-deps

# copia tudo com o . e cola para a raiz com o .
COPY . .

# expoe a porta usada
EXPOSE 3333

# execução do script de dev - separado cada script por array
CMD ["npm", "run", "dev"]
