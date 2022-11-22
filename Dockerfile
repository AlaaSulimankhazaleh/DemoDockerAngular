# first stage of building angular image
FROM     node:current-alpine3.14 as build
RUN  mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/
RUN  npm run build --prod

# final stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN  rm -rf ./*

COPY  --from=build /app/dist/helpdesk .

ENTRYPOINT [ "nginx","-g","daemon off;" ]


