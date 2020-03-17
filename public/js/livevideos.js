$(document).ready(function() {
	const searchButton = $('form.topicSearch');
	const userSearch = $('input#vsearch');

	searchButton.on('submit', function(event) {
		event.preventDefault();
		const topic = {
			search : userSearch.val().trim()
		};
		if (topic.search === sequelize) {
			return;
		}
	});

	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get('/api/user_data').then(function(data) {
		$('.member-name').text(data.email);
	});
});
