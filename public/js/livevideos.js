//gets the URL and makes it available to use
const params = window.location.search;
console.log(params);
const urlParams = new URLSearchParams(params);
//gives us the name of the video that was clicked on
const videoName = urlParams.get('videoName');
console.log(videoName);

//change the image display on the website based on the video selected
if (videoName == 'sequelize') {
	document.getElementById('activity-image').src =
		'../images/sequelize-logo.jpg';
	document.getElementById('activity-link').href =
		'https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=586c8226-e3ea-4955-be08-ab7501814621';
}

if (videoName == 'express') {
	document.getElementById('activity-image').src = '../images/express-logo.png';
	document.getElementById('activity-link').href = '';
}

if (videoName == 'MySQL') {
	document.getElementById('activity-image').src = '../images/mysql-logo.png';
	document.getElementById('activity-link').href =
		'https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=645a8c5f-0b3a-4c25-aaa3-ab58002f0efe';
}

if (videoName == 'Javascript') {
	document.getElementById('activity-image').src =
		'../images/logo-javascript.png';
	document.getElementById('activity-link').href = '';
}

// this will gather all the data from this activity and make it available to be added to the results website
function getVideo() {
	$.get('/api/' + videoName + 'Table', (data) => {
		console.log(data);
	}).then(function(data) {
		//activity 1
		const actName1 = data[0].activity_name;
		const actTopics1 = data[0].main_topic;
		const actTime1 = data[0].time_location;
		const actHw1 = data[0].homework;
		const actComment1 = data[0].hint_comment;
		const actFolder1 = data[0].folder;
		$('.activity-name1').text(actName1);
		$('.topics1').text(actTopics1);
		$('.time-location1').text(actTime1);
		$('.homework1').text(actHw1);
		$('.hint-comment1').text(actComment1);
		$('.gitlab-folder1').attr('href', actFolder1);
		//activity 2
		const actName2 = data[1].activity_name;
		const actTopics2 = data[1].main_topic;
		const actTime2 = data[1].time_location;
		const actHw2 = data[1].homework;
		const actComment2 = data[1].hint_comment;
		const actFolder2 = data[1].folder;
		$('.activity-name2').text(actName2);
		$('.topics2').text(actTopics2);
		$('.time-location2').text(actTime2);
		$('.homework2').text(actHw2);
		$('.hint-comment2').text(actComment2);
		$('.gitlab-folder2').attr('href', actFolder2);
		//activity 3
		const actName3 = data[2].activity_name;
		const actTopics3 = data[2].main_topic;
		const actTime3 = data[2].time_location;
		const actHw3 = data[2].homework;
		const actComment3 = data[2].hint_comment;
		const actFolder3 = data[2].folder;
		$('.activity-name3').text(actName3);
		$('.topics3').text(actTopics3);
		$('.time-location3').text(actTime3);
		$('.homework3').text(actHw3);
		$('.hint-comment3').text(actComment3);
		$('.gitlab-folder3').attr('href', actFolder3);
		//activity 4
		const actName4 = data[3].activity_name;
		const actTopics4 = data[3].main_topic;
		const actTime4 = data[3].time_location;
		const actHw4 = data[3].homework;
		const actComment4 = data[3].hint_comment;
		const actFolder4 = data[3].folder;
		$('.activity-name4').text(actName4);
		$('.topics4').text(actTopics4);
		$('.time-location4').text(actTime4);
		$('.homework4').text(actHw4);
		$('.hint-comment4').text(actComment4);
		$('.gitlab-folder4').attr('href', actFolder4);
		//activity 5
		const actName5 = data[4].activity_name;
		const actTopics5 = data[4].main_topic;
		const actTime5 = data[4].time_location;
		const actHw5 = data[4].homework;
		const actComment5 = data[4].hint_comment;
		const actFolder5 = data[4].folder;
		$('.activity-name5').text(actName5);
		$('.topics5').text(actTopics5);
		$('.time-location5').text(actTime5);
		$('.homework5').text(actHw5);
		$('.hint-comment5').text(actComment5);
		$('.gitlab-folder5').attr('href', actFolder5);
		//activity 6
		const actName6 = data[5].activity_name;
		const actTopics6 = data[5].main_topic;
		const actTime6 = data[5].time_location;
		const actHw6 = data[5].homework;
		const actComment6 = data[5].hint_comment;
		const actFolder6 = data[5].folder;
		$('.activity-name6').text(actName6);
		$('.topics6').text(actTopics6);
		$('.time-location6').text(actTime6);
		$('.homework6').text(actHw6);
		$('.hint-comment6').text(actComment6);
		$('.gitlab-folder6').attr('href', actFolder6);
		//activity 7
		const actName7 = data[6].activity_name;
		const actTopics7 = data[6].main_topic;
		const actTime7 = data[6].time_location;
		const actHw7 = data[6].homework;
		const actComment7 = data[6].hint_comment;
		const actFolder7 = data[6].folder;
		$('.activity-name7').text(actName7);
		$('.topics7').text(actTopics7);
		$('.time-location7').text(actTime7);
		$('.homework7').text(actHw7);
		$('.hint-comment7').text(actComment7);
		$('.gitlab-folder7').attr('href', actFolder7);
		//activity 8
		const actName8 = data[7].activity_name;
		const actTopics8 = data[7].main_topic;
		const actTime8 = data[7].time_location;
		const actHw8 = data[7].homework;
		const actComment8 = data[7].hint_comment;
		const actFolder8 = data[7].folder;
		$('.activity-name8').text(actName8);
		$('.topics8').text(actTopics8);
		$('.time-location8').text(actTime8);
		$('.homework8').text(actHw8);
		$('.hint-comment8').text(actComment8);
		$('.gitlab-folder8').attr('href', actFolder8);
		//activity 9
		const actName9 = data[8].activity_name;
		const actTopics9 = data[8].main_topic;
		const actTime9 = data[8].time_location;
		const actHw9 = data[8].homework;
		const actComment9 = data[8].hint_comment;
		const actFolder9 = data[8].folder;
		$('.activity-name9').text(actName9);
		$('.topics9').text(actTopics9);
		$('.time-location9').text(actTime9);
		$('.homework9').text(actHw9);
		$('.hint-comment9').text(actComment9);
		$('.gitlab-folder9').attr('href', actFolder9);
		//activity 10
		const actName10 = data[9].activity_name;
		const actTopics10 = data[9].main_topic;
		const actTime10 = data[9].time_location;
		const actHw10 = data[9].homework;
		const actComment10 = data[9].hint_comment;
		const actFolder10 = data[9].folder;
		$('.activity-name10').text(actName10);
		$('.topics10').text(actTopics10);
		$('.time-location10').text(actTime10);
		$('.homework10').text(actHw10);
		$('.hint-comment10').text(actComment10);
		$('.gitlab-folder10').attr('href', actFolder10);
	});
}

getVideo();

function videoInfo() {}

const searchButton = $('form.topicSearch');
const userSearch = $('input#vsearch');

const activityImage = $('#activity-image');
const activityName = $('.activity-name');
const activityTopics = $('.topics');
const activityTime = $('.time-location');
const activityHw = $('.homework');
const activityComment = $('.hint.comment');
const activityFolder = $('.gitlab-folder');

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
