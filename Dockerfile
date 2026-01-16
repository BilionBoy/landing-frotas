# =======================
# BUILD
# =======================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Instala deps com legacy peer deps
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# =======================
# NGINX STATIC SERVER
# =======================
FROM nginx:alpine

# Vite normalmente gera dist/
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
