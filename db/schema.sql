
DROP DATABASE if EXISTs liveSearch_db;
CREATE DATABASE liveSearch_db;
USE liveSearch_db;

CREATE TABLE sequelize
(
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
    id int NOT NULL AUTO_INCREMENT,
	activity_name varchar(255) NOT NULL,
    main_topic varchar(255) NOT NULL,
    time_location varchar(255) NOT NULL,
	homework BOOLEAN DEFAULT false,
    hint_comment varchar(255)NULL,
    folder varchar(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE express
(
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
    id int NOT NULL AUTO_INCREMENT,
	activity_name varchar (255) NOT NULL,
    main_topic varchar(255) NOT NULL,
    time_location varchar(255) NOT NULL,
	homework BOOLEAN DEFAULT false,
    hint_comment varchar(255)NULL,
    folder varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE OOP
(
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
    id int NOT NULL AUTO_INCREMENT,
	activity_name varchar(255) NOT NULL,
    main_topic varchar(255) NOT NULL,
    time_location varchar(255) NOT NULL,
	homework BOOLEAN DEFAULT false,
    hint_comment varchar(255)NULL,
    folder varchar(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE nodejs
(
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
    id int NOT NULL AUTO_INCREMENT,
	activity_name varchar(255) NOT NULL,
    main_topic varchar(255) NOT NULL,
    time_location varchar(255) NOT NULL,
	homework BOOLEAN DEFAULT false,
    hint_comment varchar(255)NULL,
    folder varchar(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE javascript
(
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
    id int NOT NULL AUTO_INCREMENT,
	activity_name varchar(255) NOT NULL,
    main_topic varchar(255) NOT NULL,
    time_location varchar(255) NOT NULL,
    homework BOOLEAN DEFAULT false,
    hint_comment varchar(255)NULL,
    folder varchar(255) NOT NULL,
	PRIMARY KEY(id)
);

