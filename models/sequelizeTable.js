
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
            folder: DataTypes.STRING,


////////Do not pluralize table names
            freezesequelize: true,

});

////////returns table
    return sequelizeTable;

};