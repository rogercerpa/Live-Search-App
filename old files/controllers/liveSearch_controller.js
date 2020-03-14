const express = require('express');
const router = express.Router();
const liveSearch = require('../models/liveSearch');

router.get('/', (req, res) => {
	liveSearch.all(function(data) {
		let liveSearchObj = {
			videos : data
		};
		console.log(liveSearchObj);
		res.render('index', liveSearchObj);
	});
});

module.exports = router;
