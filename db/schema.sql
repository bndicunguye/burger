
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  buger_name varchar(30) NOT NULL,
  devoured boolean,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);