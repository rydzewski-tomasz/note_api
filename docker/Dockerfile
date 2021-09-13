FROM node:16-alpine as base

LABEL maintainer="Tomasz Rydzewski"
EXPOSE 3000
ENTRYPOINT ["/entrypoint.sh"]

COPY .  /note_api

WORKDIR /note_api

RUN rm -rf Makefile *.md docker *.yml *.txt .dockerignore .git*

# Install node packages
RUN npm install
RUN npm run build

FROM base as dev
COPY docker/entrypoint.sh /entrypoint.sh
