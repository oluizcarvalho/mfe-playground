FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
COPY packages/shared/package.json packages/shared/
COPY packages/host/package.json packages/host/
RUN npm install --workspace=packages/shared --workspace=packages/host
COPY packages/shared packages/shared
COPY packages/host packages/host
RUN npm run build -w packages/shared
RUN npm run build -w packages/host

FROM nginx:alpine
COPY packages/host/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/host/dist/host/browser /usr/share/nginx/html
EXPOSE 80
