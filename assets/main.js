$(function() {

   $.ajax({
    url: 'https://www.codeschool.com/users/185856.json',
    dataType: 'jsonp',
    success: function(response) {
	addCourses(response.courses.completed);
    }
  });

    function addCourses(courses) {
	var $badges = $('#badges');

	courses.forEach(function(course) {

	    var $course = $('<div></div>', {
		'class': 'course'
	    }).appendTo($badges);

	    $('<h3></h3>', {
		text:course.title
            }).appendTo($course);

	    $('<img />', {
		src: course.badge
            }).appendTo($course);
	    
	    $('<a></a>', {
		'class': 'btn btn-primary',
		target: '_blank',
		href: course.url,
		text: 'See Course'
            }).appendTo($course);
	});
    }

});
