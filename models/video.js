///// const mysql = require("mysql");

////////export module
module.exports = (sequelize, DataTypes) => {

///////tables
const sequelizeTable = sequelize.define("sequelize", 
     {
    activity_name: DataTypes.STRING,
    allowNull: false,
    main_topic: DataTypes.STRING,
    time_location: DataTypes.STRING,
    homework: DataTypes.BOOLEAN, 
    hint_comment: DataTypes.STRING,
    folder: DataTypes.STRING
    });

const express = sequelize.define("express", 
     {
    activity_name: DataTypes.STRING,
    allowNull: false,
    main_topic: DataTypes.STRING,
    time_location: DataTypes.STRING,
    homework: DataTypes.BOOLEAN, 
    hint_comment: DataTypes.STRING,
    folder: DataTypes.STRING
    });

const OOP = sequelize.define("OOP", 
     {
    activity_name: DataTypes.STRING,
    allowNull: false,
    main_topic: DataTypes.STRING,
    time_location: DataTypes.STRING,
    homework: DataTypes.BOOLEAN, 
    hint_comment: DataTypes.STRING,
    folder: DataTypes.STRING
    });

const nodejs = sequelize.define("nodejs", 
     {
    activity_name: DataTypes.STRING,
    allowNull: false,
    main_topic: DataTypes.STRING,
    time_location: DataTypes.STRING,
    homework: DataTypes.BOOLEAN, 
    hint_comment: DataTypes.STRING,
    folder: DataTypes.STRING,

////////Do not pluralize table names
    freezesequelize: true, 
    freezeexpress: true, 
    freezeOOP: true, 
    freezenodejs: true 

    });


    
    
////////sync w db
sequelize.sync();
express.sync();
OOP.sync();
nodejs.sync();




////////returns table
return sequelizeTable, express, OOP, nodejs;
   
};