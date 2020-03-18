
DROP DATABASE EXISTs liveSearch_db;
CREATE DATABASE liveSearch_db;
USE liveSearch_db;

CREATE TABLE sequelize
(
    id int NOT NULL
    AUTO_INCREMENT,
	activity_name varchar
    (255) NOT NULL,
    main_topic varchar
    (255) NOT NULL,
    time_location varchar
    (255) NOT NULL,
	homework BOOLEAN DEFAULT false,
    hint_comment varchar
    (255)NULL,
    folder varchar
    (255) NOT NULL,
	PRIMARY KEY
    (id)
);

    CREATE TABLE express
    (
        id int NOT NULL
        AUTO_INCREMENT,
	activity_name varchar
        (255) NOT NULL,
    main_topic varchar
        (255) NOT NULL,
    time_location DECIMAL
        (10,4) NULL,
	homework BOOLEAN DEFAULT false,
    hint_comment varchar
        (255)NULL,
    folder varchar
        (255) NOT NULL,
	PRIMARY KEY
        (id)
);

        CREATE TABLE OOP
        (
            id int NOT NULL
            AUTO_INCREMENT,
	activity_name varchar
            (255) NOT NULL,
    main_topic varchar
            (255) NOT NULL,
    time_location DECIMAL
            (10,4) NULL,
	homework BOOLEAN DEFAULT false,
    hint_comment varchar
            (255)NULL,
    folder varchar
            (255) NOT NULL,
	PRIMARY KEY
            (id)
);

            CREATE TABLE nodejs
            (
                id int NOT NULL
                AUTO_INCREMENT,
	activity_name varchar
                (255) NOT NULL,
    main_topic varchar
                (255) NOT NULL,
    time_location varchar
                (255) NOT NULL,
	homework BOOLEAN DEFAULT false,
    hint_comment varchar
                (255)NULL,
    folder varchar
                (255) NOT NULL,
	PRIMARY KEY
                (id)
);

                CREATE TABLE javascript
                (
                    id int NOT NULL
                    AUTO_INCREMENT,
	activity_name varchar
                    (255) NOT NULL,
    main_topic varchar
                    (255) NOT NULL,
    time_location DECIMAL
                    (10,4) NULL,
    
	homework BOOLEAN DEFAULT false,
    hint_comment varchar
                    (255)NULL,
    folder varchar
                    (255) NOT NULL,
	PRIMARY KEY
                    (id)
);
