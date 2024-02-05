#BaseImage As node installed alpine
FROM node:14-alpine

#Defines working directory inside alpine 
WORKDIR /usr/app

#first copy the package.json for dependency installation. 
COPY ./package.json ./

#run npm install for install dependency. 
RUN npm install

#copy the index file and rest of the files
COPY ./ ./

#entry point command 
CMD [ "npm", "start" ]