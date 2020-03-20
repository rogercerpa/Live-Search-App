module.exports = (sequelize, DataTypes) => {

const OOP = sequelize.define("OOP",
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
        type:DataTypes.STRING,
    },
}, 
{
    freezeTableName: true
});

return OOP;
};

