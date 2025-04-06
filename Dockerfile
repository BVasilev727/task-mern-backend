#Official Node.js image
FROM node:22
#Set working dir
WORKDIR /app
#Copy the application files into the working dir
COPY . /app
#Install application dependencies
RUN npm install
#Entry point
EXPOSE 8000
CMD ["npm","start"]