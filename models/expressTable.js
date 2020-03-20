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

	return express;
};
