FROM node:16-alpine3.14

WORKDIR "/usr/src/app"
COPY ./ ./
RUN npm install
CMD ["npm", "run", "start"]
