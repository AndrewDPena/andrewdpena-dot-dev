# syntax=docker/dockerfile:1

# One place to change the Node version for every stage.
ARG NODE_VERSION=24

# ---- Stage 1: install dependencies ----
FROM node:${NODE_VERSION}-slim AS deps
WORKDIR /app
# Copy only the package files first so Docker can cache this layer:
# dependencies are reinstalled only when these two files change.
COPY package.json package-lock.json ./
RUN npm ci

# ---- Stage 2: build the app ----
FROM node:${NODE_VERSION}-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Stage 3: the image that actually runs ----
FROM node:${NODE_VERSION}-slim AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# The standalone output contains server.js plus only the node_modules it needs.
# Static assets and public/ are copied in alongside it so server.js can serve them.
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Run as the unprivileged "node" user that ships with the official image.
USER node
EXPOSE 3000
CMD ["node", "server.js"]
