FROM phpdockerio/php72-fpm:latest

WORKDIR "/application"

RUN apt-get update
RUN apt-get install npm
RUN npm install
RUN npm install react-router-dom

# Install selected extensions and other stuff
RUN apt-get update \
    && apt-get -y --no-install-recommends install  php7.2-mysql php-redis \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*