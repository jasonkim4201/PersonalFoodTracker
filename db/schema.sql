DROP DATABASE IF EXISTS foodsEaten_db;

CREATE DATABASE foodsEaten_db;

USE foodsEaten_db;

CREATE TABLE foodEaten (
  id INTEGER(5) NOT NULL AUTO_INCREMENT,
  meal VARCHAR (100) NOT NULL,
  home_cooked BOOLEAN DEFAULT TRUE,
  is_vegetarian BOOLEAN DEFAULT FALSE,
  has_leftovers BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (id)
);
