//  create-recipe-details-page
$(document).ready(function() {

$('.videoImage').on('click', function(event) {
	event.preventDefault();
	var video = $(this).attr("data-video")
	console.log(video);
	console.log($(this));
	// console.log('hello');
	// var recipeName = $('#searchtext').val().trim();
	window.location.href =
		'livevideos?videoName=' + video
		// encodeURIComponent($('#activity-image-on-index-html').val().trim());
		// console.log("testing");
});
})
// get code to send the name of the image user clicks on to the livevideos.html 
// to show all info for that video












// $(document).ready(function() {
//     const clickSubjectImageButton = $('#activity-image-on-index-html');
//     // const logoHome = $('#liveSearch-logo');

//     clickSubjectImageButton.on('click', function(event) {
//         function captureSQLdataFromImageSelected(activity_name, main_topic, time_location, homework,
//             hint_comment, folder) {
//             $.post("/api/home", {
//               activity_name: activity_name,
//               main_topic: main_topic,
//               time_location: time_location,
//               homework: homework,
//               hint_comment: hint_comment,
//               folder: folder
//             })
//               .then(function(data) {
//                 window.location.replace("/livevideos");
//               })
//               .catch(handleLoginErr);
//           }
        
//     });

