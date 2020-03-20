module.exports = (sequelize, DataTypes) => {
	const express = sequelize.define(
		'express',
		{
			activity_name : {
				type      : DataTypes.STRING,
				allowNull : false
			},
			main_topic    : {
				type      : DataTypes.STRING,
				allowNull : false
			},
			time_location : {
				type      : DataTypes.STRING,
				allowNull : false
			},
			homework      : {
				type : DataTypes.BOOLEAN
			},
			hint_comment  : {
				type      : DataTypes.STRING,
				allowNull : false
			},
			folder        : {
				type      : DataTypes.STRING,
				allowNull : false
			}
		},
		{
			freezeTableName : true
		}
	);

<<<<<<< HEAD
const express = sequelize.define("express",
        {
            activity_name: DataTypes.STRING,
            allowNull: false,
            main_topic: DataTypes.STRING,
            time_location: DataTypes.STRING,
            homework: DataTypes.BOOLEAN,
            hint_comment: DataTypes.STRING,
            folder: DataTypes.STRING,

            freezeTableName: true
        })
return express;
    };
=======
	return express;
};
>>>>>>> e5e59fbad39c48b527dee376adad717cf4fda187
