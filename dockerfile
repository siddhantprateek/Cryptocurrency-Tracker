
FROM node:alpine

WORKDIR "/app/crypto"

COPY package.json "/app/crypto"

RUN npm install

COPY . /app/crypto

CMD ["npm", "start"]