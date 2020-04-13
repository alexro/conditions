FROM node:12-slim as dependencies
WORKDIR /home/node/

RUN apt-get update
RUN apt-get install -y build-essential python
RUN npm install --global npm node-gyp

COPY package.json *package-lock.json *.npmrc ./

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}
RUN npm ci

FROM node:12-slim
WORKDIR /home/node/

COPY --from=dependencies /home/node/node_modules node_modules
COPY . .

ENV PATH="$PATH:/home/node/node_modules/.bin"
ENV NODE_ENV production
ENV PORT 3080

EXPOSE 3080

CMD ["node", "."]