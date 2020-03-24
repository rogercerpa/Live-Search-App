module.exports = (sequelize, DataTypes) => {
	const nodejs = sequelize.define(
		'nodejs',
		{
			activity_name : {
				type      : DataTypes.STRING,
				allowNull : false
			},
			main_topic    : {
				type : DataTypes.STRING
			},
			time_location : {
				type : DataTypes.STRING
			},
			homework      : {
				type : DataTypes.BOOLEAN
			},
			hint_comment  : {
				type : DataTypes.STRING
			},
			folder        : {
				type : DataTypes.STRING
			}
		},
		{
			freezeTableName : true
		}
	);
	return nodejs;
};
