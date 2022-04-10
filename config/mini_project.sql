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
  
  SELECT * FROM mini_project.merchant;
  
  CREATE TABLE `mini_project`.`product` (
  `id_product` VARCHAR(45) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `quantity` INT(5) NOT NULL,
  `price` DECIMAL NOT NULL,
  PRIMARY KEY (`id_product`));
  
ALTER TABLE `mini_project`.`product` 
ADD COLUMN `id_merchant` INT NOT NULL AFTER `price`,
ADD INDEX `id_merchant_idx` (`id_merchant` ASC) VISIBLE;
;

ALTER TABLE `mini_project`.`product` 
ADD CONSTRAINT `id_merchant`
  FOREIGN KEY (`id_merchant`)
  REFERENCES `mini_project`.`merchant` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

SELECT * FROM mini_project.product;

SHOW COLUMNS FROM product;