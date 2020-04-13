FROM node:12-slim as dependencies
WORKDIR /home/node/

RUN apt-get update
RUN apt-get install -y build-essential python
RUN npm install --global npm node-gyp

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}
RUN npm ci
RUN npm run build

FROM node:12-slim
WORKDIR /home/node/

COPY --from=dependencies /home/node/node_modules node_modules
COPY --from=dependencies /home/node/build build

ENV PATH="$PATH:/home/node/node_modules/.bin"
ENV NODE_ENV production
ENV PORT 3081

EXPOSE 3081

ENTRYPOINT ["npx", "serve", "-s", "build"]