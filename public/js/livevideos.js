const params = window.location.videoName;
const urlParamsObj = getUrlParams(params);

if (urlParamsObj['videoName']) {
	const activityTitle = urlParamsObj['videoName'];
}

console.log(imageName);

const searchButton = $('form.topicSearch');
const userSearch = $('input#vsearch');

const activityImage = $('#activity-image');
const activityName = $('.activity-name');
const activityTopics = $('.topics');
const activityTime = $('.time-location');
const activityHw = $('.homework');
const activityComment = $('.hint.comment');
const activityFolder = $('.gitlab-folder');

function showActivity() {
	$.get('/api/activity/' + videoName, {
		activityTitle : activityTitle
	}).then(function() {});
}

$(document).ready(function() {
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
