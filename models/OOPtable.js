module.exports = (sequelize, DataTypes) => {

const OOP = sequelize.define("OOP",
{
    activity_name: DataTypes.STRING,
    allowNull: false,
    main_topic: DataTypes.STRING,
    time_location: DataTypes.STRING,
    homework: DataTypes.BOOLEAN,
    hint_comment: DataTypes.STRING,
    folder: DataTypes.STRING,


    freezeOOP: true,
});

return OOP;
};