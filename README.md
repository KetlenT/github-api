Prerequisites
-----

I assume you have installed Docker and it is running.

See the [Docker website](http://www.docker.io/gettingstarted/#h_installation) for installation instructions.

Build
-----

Steps to build a Docker image:

1. Clone this repo

        git clone this project

2. Build the image

        docker-compose up - build

    This will take a few minutes.

3. Check  container 
          
        docker ps

6. Once everything has started up, you should be able to access.

        open http://localhost:3000/
