FROM cypress/base:12.1.0
RUN mkdir /app
WORKDIR /app
COPY cypress /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]
