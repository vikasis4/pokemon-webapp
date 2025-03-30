FROM node:23-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM node:23-alpine as runner
WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

CMD [ "node","server.js" ,"--hostname", "0.0.0.0"]
