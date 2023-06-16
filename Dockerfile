FROM node:18-alpine 
ENV NODE ENV=production

WORKDIR /app 

COPY ["package.json", "package-lock.json*", "./" ]

COPY patches ./patches

RUN  npm install 

COPY . .

RUN npm run prod:build 


CMD ["npm", "run", "prod:start"]