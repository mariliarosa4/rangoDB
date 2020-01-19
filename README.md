# rangoDB
Application to choose the restaurant of day for DBServer team have lunch together!
Every day at 11:30 a.m. the result will be showed when page refresh.

## Getting Started

Clone the project repository 

```bash
git clone https://github.com/mariliarosa4/rangoDB.git
```

Inside the folder run: 

```bash
docker-compose up -d
```

```bash
cd phpdocker/php-fpm
docker build .
```

```bash
cp env.example .env
docker exec -it rangoDB-php-fpm /bin/bash
```
Edit the .env file with the same database configurantions that docker-compose.yml file.

Inside the container bash:

```bash
apt-get update
composer install
apt-get -y install npm
npm install
npm install react-router-dom
php artisan key:generate
```


```bash
php artisan migrate:refresh --seed

```


Access  [http://localhost:8888] to register or login and enjoy the application and [http://localhost] to access PHPmyadmin. 

## Requirements

* [Laravel](https://laravel.com) 
* [React](https://reactjs.org) 
* [Docker](https://www.docker.com/) I'ts my first time, sorry about anything :)
