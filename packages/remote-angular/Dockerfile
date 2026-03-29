FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
COPY packages/shared/package.json packages/shared/
COPY packages/remote-angular/package.json packages/remote-angular/
RUN npm install --workspace=packages/shared --workspace=packages/remote-angular
COPY packages/shared packages/shared
COPY packages/remote-angular packages/remote-angular
RUN npm run build -w packages/shared
RUN npm run build -w packages/remote-angular

FROM nginx:alpine
COPY packages/host/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/remote-angular/dist/remote-angular/browser /usr/share/nginx/html
EXPOSE 80
