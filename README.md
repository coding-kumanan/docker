# docker

# What is docker
Containerization Technology:

Docker is a platform that enables the creation and deployment of applications within containers.
Containers are lightweight, portable, and isolated environments that encapsulate an application and its dependencies.
# Key Components:

**Docker Engine**: The core component responsible for creating and running containers.
**Docker Images**: Immutable, portable snapshots containing an application and its dependencies.
**Docker Containers**: Instances of Docker images running as isolated processes.

# Advantages:

**Portability**: Containers run consistently across different environments.
**Efficiency**: Containers share the host OS kernel, reducing resource overhead.
**Isolation**: Containers provide application isolation without the need for a full OS.

# Common Use Cases:

**Microservices**: Docker simplifies the deployment and scaling of microservices.
**DevOps: Facilitates** continuous integration, delivery, and deployment processes.
**Testing and QA**: Consistent environments for development and testing.

# Dockerfile:

A script containing instructions to build a Docker image.
Specifies the base image, dependencies, and steps to set up the application environment.

# Docker Hub:

A cloud-based registry for sharing and storing Docker images.
Users can pull and push images to and from Docker Hub.

# Orchestration:

Tools like Docker Compose and Kubernetes help manage and scale containers in production environments.

### Challenges with servers 

1) Each and every applicaition is highly dependent on the Underlying OS.
2) One VM cannot share the under-utilized resources with the neighbour VM's.
3) Configuration Management [ If app-a works on VM-a, there is no guarantee that app-a works on VM-b ]

Container : This a package with your Application + Pre-requisties + Libraries.
            This package is the container or our artifact.
            If this works on your linux machine, that shoudl any where.

To run container, what should I install ?

    1) You need to have a linux machine.
    2) Install Container Run Time. 
    3) You're good to run your containers.


### Container vs Docker 

    * Container is a package of your application.
    * Docker is a container run-time to run the containers on linux machine. 

# docker notes

### Docker is a container run time.
```
Docker gives us high-level runtime as it uses CONTAINERD as its run-time.
```

### What is a container ?
```
Container is a package of software that contains all the required elements to run your applicaition in any environment
```

### What is Run Time ?

```
To run containers, you need to have a run time and among all, DOCKER is highly used
```

### How to run a container ?

```
$ docker run containerName    ( this runs containers interactively killing your prompt )
$ docker run -d containerName ( this runs containers in the background by detaching from the terminal )
```

### Common docker commands:

```
$ docker ps                          ( shows you the list of all the running containers on your system )
$ docker ps -a                       ( shows you the list of all the containers including the exited ) 
$ docker pull imageName              ( pulls the docker image from the image repository )
$ docker push imageName              ( pushes the docker image to the image repository )
$ docker stop                        ( To stop the container which is running ) 
$ docker exec -it containerName bash ( To enter in to the container )
```

### How a docker container looks like ???

```
* docker.io/docker.io/imageName:version 
(repoName)(uesrName)

--> Examples of repoNames:  docker.io , ecr.io , gcr.io

```


### Volume Mapping :

```
Mounint the local linux directory on the containers directory to achieve directory persistance
```

### Port-Forwarding:

```
$ docker run -p 80:80  -d  nginx

```
### Dynamic Porting:
```
docker run -P  -d httpd
```
### Volume Mapping 

```
docker run -v /home/verma/mysql-data:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=password -d mysql
```

 ### Dockerfile reference :
 ```
 https://docs.docker.com/engine/reference/builder/
 
 ```

### ENTRYPOINT vs CMD

```
 The ENTRYPOINT specifies a command that will always be executed when the container starts. The CMD specifies arguments that will be fed to the ENTRYPOINT.
```

### Both CMD and ENTRYPOINT instructions define what command gets executed when running a container. There are few rules that describe their co-operation.

* Dockerfile should specify at least one of CMD or ENTRYPOINT commands.
* ENTRYPOINT should be defined when using the container as an executable.
* CMD should be used as a way of defining default arguments for an ENTRYPOINT command or for executing an ad-hoc command in a container.
* CMD will be overridden when running the container with alternative arguments.


### How to tag an imageName during build ?

docker build -t docker.io/sanraman/cart:v1 .  

### How to tag an existing image ?

docker tag docker.io/sanraman/cart:v1 imageID 


### What are few of the best practices of DOCKER IMAGING

```
    * Size of the Docker Image has to be as minimal as possible 
    * Securiy of the Images , it should zero to none vulnerabilites as per your organization standard

```


### Important Point :

```
1) Stopping the container means KILLING the container 
2) Starting the container means CREATING a new container
```