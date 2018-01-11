FROM node:alpine
# Adiciona todo conteudo do diretorio corrente a uma pasta backend
WORKDIR ./backend
COPY package.json ./backend
COPY . .

# Instala dependencias do projeto
RUN cd /backend; \
npm install

CMD ["node", "src/index.js"]