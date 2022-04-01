create database mini_project;
use mini_project;

CREATE TABLE `mini_project`.`merchant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(255) NULL,
  `join_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `phone_number` VARCHAR(15) NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `mini_project`.`product` (
  `id_product` VARCHAR(45) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `quantity` INT(5) NOT NULL,
  `price` DECIMAL NOT NULL,
  PRIMARY KEY (`id_product`));
