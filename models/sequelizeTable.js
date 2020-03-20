
////////export module
module.exports = (sequelize, DataTypes) => {

///////tables
    const sequelizeTable = sequelize.define("sequelize",
        {
            activity_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            main_topic: {
                type:DataTypes.STRING,
            },
            time_location: {
                type:DataTypes.STRING,
            },
            homework: {
                type:DataTypes.BOOLEAN,
            },
            hint_comment: {
                type:DataTypes.STRING,
            },
            folder: {
                types:DataTypes.STRING,
            },


////////Do not pluralize table names
freezeTableName: true

});

////////returns table
    return sequelizeTable;

};