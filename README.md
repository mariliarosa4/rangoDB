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
Inside the container bash:

```bash
apt-get update
composer install
apt-get -y install npm
npm install
npm install react-router-dom
php artisan key:generate
```
To configure the database change database info in .env file as:

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=rangodatabase
DB_USERNAME=dbuser
DB_PASSWORD=dbuser

And run still inside container bash:

```bash
php artisan migrate:refresh --seed

```

Access  [http://localhost:8888] to register or login and enjoy the application and [http://localhost] to access PHPmyadmin. 

## Requirements

* [Laravel](https://laravel.com) 
* [React](https://reactjs.org) 
* [Docker](https://www.docker.com/) I'ts my first time, sorry about anything :)
