#use existing image from docker hub
FROM alpine
#Download and install dependency 
RUN apk add --update redis
#Tell the image what to do when its start the container 
CMD [ "redis-server" ]