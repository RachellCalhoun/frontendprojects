var name = "Rachell Calhoun"
var role = "Web Ninja"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var work = {
	"jobs": [{
		"employer": "abc company",
		"title": "super alphabeter",
		"location": "kalamazoo",
		"dates": "2/24/2000 - 2/24/2006",
		"description": " Morbi eleifend tortor nec metus dignissim, quis sagittis lectus euismod. Donec ut convallis velit, vitae scelerisque velit. Aliquam lacinia, ex quis porttitor euismod, odio mi accumsan leo, et mollis nunc ipsum condimentum augue. Sed condimentum ultrices leo non pellentesque. Integer quis arcu arcu. "
	},
	{
		"employer": "123 company",
		"title": "super counter",
		"location": "kalamazoo",
		"dates": "07/2004 - 10/2006",
		"description": " Nulla vehicula leo elit, id volutpat neque egestas eu. Sed nec sagittis leo. Morbi eleifend tortor nec metus dignissim, quis sagittis lectus euismod. Donec ut convallis velit, vitae scelerisque velit. Aliquam lacinia, ex quis porttitor euismod, odio mi accumsan leo, et mollis nunc ipsum condimentum augue. Sed condimentum ultrices leo non pellentesque. Integer quis arcu arcu. "
	},
	{
		"employer": "school 1 ",
		"title": "teacher",
		"location": "seoul",
		"dates": "08/2007-08/2008",
		"description": " Duis in mauris id eros fringilla congue. Donec vitae efficitur elit. Integer eget augue quis lacus facilisis cursus. Nulla vehicula leo elit, id volutpat neque egestas eu. Sed nec sagittis leo. Morbi eleifend tortor nec metus dignissim, quis sagittis lectus euismod. Donec ut convallis velit, vitae scelerisque velit. Aliquam lacinia, ex quis porttitor euismod, odio mi accumsan leo, et mollis nunc ipsum condimentum augue.  "
	},
	{
		"employer": "school 2",
		"title": "teacher",
		"location": "seoul",
		"dates": "11/2008 - 02/2014",
		"description": "entum nulla faucibus ligula blandit finibus. In condimentum nulla faucibus ligula blandit finibus. Proin purus ex, consectetur et nisi ut,"
	},
	{
		"employer": "school 3",
		"title": "teacher",
		"location": "incheon",
		"dates": "03/2014 - 03/2016",
		"description": " Integer eget augue quis lacus facilisis cursus. Nulla vehicula leo elit, id volutpat neque egestas eu. Sed nec sagittis leo. Morbi eleifend tortor nec metus dignissim, quis sagittis lectus euismod. Donec ut convallis velit, vitae scelerisque velit. Aliquam lacinia, ex quis porttitor euismod, odio mi accumsan leo, et mollis nunc ipsum condimentum augue. Sed condimentum ultrices leo non pellentesque. Integer quis arcu arcu. "
	}]
}
var projects = {
	"projects": [{
		"title": "Portfolio",
		"dates": "2015",
		"description": "My personal portfolio and blog page using Python and Django for backend and HTML/CSS and bootstrap for frontend",
		"images": "",
		"url": "http://rachellcalhoun.pythonanywhere.com"
	},
	{
		"title": "Django Girls Seoul",
		"dates": "2015 - 2016",
		"description": "Organizer of Django Girls Seoul, a community to inspire more women to fall in love with programming. We organized workshops, screening events, code camps and worked on non-profits. ",
		"images": "http://djangogirlscodecamp.github.io/img/event.png",
		"url": ["http://djangogirlscodecamp.github.io/", "https://djangogirls.org/seoul/"]
	},
	{
		"title": "Light and Leadership Iniciative Website",
		"dates": "2016",
		"description": "I oversaw the open sourced creation and collaberation of a django site for a non-profit Peruvian school.",
		"images": "http://www.lightandleadership.org/background.jpg",
		"url": "https://github.com/djangogirlscodecamp/lightandleadership"
	}]
}
var bio = {
	"name" : "Rachell",
	"role" : "Web Ninja",
	"contacts" : {
		"mobile": "123-1233-3333",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "Seoul"
		}, 
	"welcomeMessage" : "Welcome to my world!",
	"skills" : ["awesomeness", "programming", "teaching","js"],
	"bioPic" : "images/fry.jpg"
}

var education ={
	"schools": [{
		"name": "Western Michigan University",
		"city": "Kalamazoo, MI USA",
		"degree": "BA",
		"major": ["Spanish", "French"],
		"years": 2006,
		"url": "http://wmu.edu"
	}],
	"onlineCourses": [{
		"title": "An Introduction to Interactive Programming in Python",
		"school": "Coursera",
		"dates": 2014,
		"url": "https://www.coursera.org/course/interactivepython"
	}, {
		"title": " Programming for Everybody (Python)",
		"school": "Coursera",
		"dates": 2014,
		"url": "https://www.coursera.org/signature/certificate/95TNEQEV38"
	}, {
		"title": "Introduction to Computer Science and Programming Using Python",
		"school": "Edx",
		"dates": 2015,
		"url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6"
	}, {
		"title": "Using Python to ACcess Web Data",
		"school": "Coursera",
		"dates": 2015,
		"url": "https://www.coursera.org/learn/python-network-data"
	}, {
		"title": "Intro to HTML/CSS",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/courses/ud304"
	}, {
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://www.udacity.com/courses"
	}]
}

if (document.getElementsByTagName('h1').length === 0) {
    document.getElementById('header').style.display = 'none';
}
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

};
function displayWork() {
	if(work.jobs.length > 0){
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}
displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
// function locationizer(work_obj){
//     var locationsArray = [];
//     for (job in work_obj.jobs) {
//         var workLocations = work_obj.jobs[job].location;
//         locationsArray.push(workLocations);
//     }
//     return locationsArray;
//  }
// I have no idea and the vid/notes aren't clear: reference line 65 in helperjs
// function inName(){
// 	bio.name = bio.name.trim().split(" ");
// 	console.log(bio.name);
// 	bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();
// 	bio.name[1] = bio.name[1].toUpperCase();

// 	bio.name = bio.name.join(" ");
// 	return bio.name;

// }
// inName();
// $("#main").append(internationalizeButton);