const orm = require('../config/orm');

//////call orm functions/////////
const model = {
	all    : (cb) => {
		orm.all('', (res) => {
			cb(res);
		});
	},

	///////variables cols and vals are arrays/////////
	create : (cols, vals, cb) => {
		orm.create('', cols, vals, (res) => {
			cb(res);
		});
	},
	update : (objColVals, condition, cb) => {
		orm.update('', objColVals, condition, (res) => {
			cb(res);
		});
	},
	delete : (condition, cb) => {
		orm.delete('', condition, (res) => {
			cb(res);
		});
	}
};

////export db functions for the controller/////
module.exports = model;
