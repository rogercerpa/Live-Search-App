const params = window.location.search;
console.log(params);
const urlParams = new URLSearchParams(params),
	videoName = urlParams.get('videoName');
console.log(videoName),
	'sequelize' == videoName &&
		((document.getElementById('activity-image').src =
			'../images/sequelize-logo.jpg'),
		(document.getElementById('activity-link').href =
			'https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=586c8226-e3ea-4955-be08-ab7501814621'),
		(document.getElementById('activity-link1').href =
			'https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=586c8226-e3ea-4955-be08-ab7501814621')),
	'express' == videoName &&
		((document.getElementById('activity-image').src =
			'../images/express-logo.png'),
		(document.getElementById('activity-link').href = '')),
	'MySQL' == videoName &&
		((document.getElementById('activity-image').src =
			'../images/mysql-logo.png'),
		(document.getElementById('activity-link').href =
			'https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=645a8c5f-0b3a-4c25-aaa3-ab58002f0efe'),
		(document.getElementById('activity-link1').href =
			'https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=645a8c5f-0b3a-4c25-aaa3-ab58002f0efe')),
	'Javascript' == videoName &&
		((document.getElementById('activity-image').src =
			'../images/logo-javascript.png'),
		(document.getElementById('activity-link').href = ''));
function getVideo() {
	$.get('/api/' + videoName + 'Table', (a) => {
		console.log(a);
	}).then(function(a) {
		const b = a[0].activity_name,
			c = a[0].main_topic,
			d = a[0].time_location,
			e = a[0].homework,
			f = a[0].hint_comment,
			g = a[0].folder;
		$('.activity-name1').text(b),
			$('.topics1').text(c),
			$('.time-location1').text(d),
			$('.homework1').text(e),
			$('.hint-comment1').text(f),
			$('.gitlab-folder1').attr('href', g);
		const h = a[1].activity_name,
			i = a[1].main_topic,
			j = a[1].time_location,
			k = a[1].homework,
			l = a[1].hint_comment,
			m = a[1].folder;
		$('.activity-name2').text(h),
			$('.topics2').text(i),
			$('.time-location2').text(j),
			$('.homework2').text(k),
			$('.hint-comment2').text(l),
			$('.gitlab-folder2').attr('href', m);
		const n = a[2].activity_name,
			o = a[2].main_topic,
			p = a[2].time_location,
			q = a[2].homework,
			r = a[2].hint_comment,
			s = a[2].folder;
		$('.activity-name3').text(n),
			$('.topics3').text(o),
			$('.time-location3').text(p),
			$('.homework3').text(q),
			$('.hint-comment3').text(r),
			$('.gitlab-folder3').attr('href', s);
		const t = a[3].activity_name,
			u = a[3].main_topic,
			v = a[3].time_location,
			w = a[3].homework,
			x = a[3].hint_comment,
			y = a[3].folder;
		$('.activity-name4').text(t),
			$('.topics4').text(u),
			$('.time-location4').text(v),
			$('.homework4').text(w),
			$('.hint-comment4').text(x),
			$('.gitlab-folder4').attr('href', y);
		const z = a[4].activity_name,
			A = a[4].main_topic,
			B = a[4].time_location,
			C = a[4].homework,
			D = a[4].hint_comment,
			E = a[4].folder;
		$('.activity-name5').text(z),
			$('.topics5').text(A),
			$('.time-location5').text(B),
			$('.homework5').text(C),
			$('.hint-comment5').text(D),
			$('.gitlab-folder5').attr('href', E);
		const F = a[5].activity_name,
			G = a[5].main_topic,
			H = a[5].time_location,
			I = a[5].homework,
			J = a[5].hint_comment,
			K = a[5].folder;
		$('.activity-name6').text(F),
			$('.topics6').text(G),
			$('.time-location6').text(H),
			$('.homework6').text(I),
			$('.hint-comment6').text(J),
			$('.gitlab-folder6').attr('href', K);
		const L = a[6].activity_name,
			M = a[6].main_topic,
			N = a[6].time_location,
			O = a[6].homework,
			P = a[6].hint_comment,
			Q = a[6].folder;
		$('.activity-name7').text(L),
			$('.topics7').text(M),
			$('.time-location7').text(N),
			$('.homework7').text(O),
			$('.hint-comment7').text(P),
			$('.gitlab-folder7').attr('href', Q);
		const R = a[7].activity_name,
			S = a[7].main_topic,
			T = a[7].time_location,
			U = a[7].homework,
			V = a[7].hint_comment,
			W = a[7].folder;
		$('.activity-name8').text(R),
			$('.topics8').text(S),
			$('.time-location8').text(T),
			$('.homework8').text(U),
			$('.hint-comment8').text(V),
			$('.gitlab-folder8').attr('href', W);
		const X = a[8].activity_name,
			Y = a[8].main_topic,
			Z = a[8].time_location,
			_ = a[8].homework,
			aa = a[8].hint_comment,
			ba = a[8].folder;
		$('.activity-name9').text(X),
			$('.topics9').text(Y),
			$('.time-location9').text(Z),
			$('.homework9').text(_),
			$('.hint-comment9').text(aa),
			$('.gitlab-folder9').attr('href', ba);
		const ca = a[9].activity_name,
			da = a[9].main_topic,
			ea = a[9].time_location,
			fa = a[9].homework,
			ga = a[9].hint_comment,
			ha = a[9].folder;
		$('.activity-name10').text(ca),
			$('.topics10').text(da),
			$('.time-location10').text(ea),
			$('.homework10').text(fa),
			$('.hint-comment10').text(ga),
			$('.gitlab-folder10').attr('href', ha);
	});
}
getVideo();
function videoInfo() {}
const searchButton = $('form.topicSearch'),
	userSearch = $('input#vsearch'),
	activityImage = $('#activity-image'),
	activityName = $('.activity-name'),
	activityTopics = $('.topics'),
	activityTime = $('.time-location'),
	activityHw = $('.homework'),
	activityComment = $('.hint.comment'),
	activityFolder = $('.gitlab-folder');
$(document).ready(function() {
	searchButton.on('submit', function(a) {
		a.preventDefault();
		const b = { search: userSearch.val().trim() };
		b.search === sequelize;
	}),
		$.get('/api/user_data').then(function(a) {
			$('.member-name').text(a.email);
		});
});
