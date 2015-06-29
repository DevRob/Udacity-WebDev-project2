var bio = {
    "name" : "Dugles FakeName",
    "role" : "Dev Webeloper",
    "contacts" : {
    "mobile" : "333-3343-223",
    "email" : "dugles@fakemail.com",
    "github" : "DevDugles",
    "twitter" : "Dugles poke me",
    "location" : "San Jose",
    },
    "picture" : "images/minion2.jpg",
    "welcome_msg" : "Bambula bambambula manter galdiban ter fodtugham se perinkul ma razgem.",
    "skills" : ["HTML/CSS", "pancake squeezing", "Javascript", "AutoCAD", "Omelet Guru","python"]
}

var education = {
    "schools": [
        {
            "name": "Nova Core University",
            "location": "Titan",
            "degree": "Master of Science",
            "majors": ["Spaceship Command"],
            "minors": [
                "Mid-Range Tactical Cruisers",
                "Galactic Transport Specialist"
            ],
            "dates": 2097
        },
        {
            "name": "Nebula Sphere Garden Academy",
            "location": "Mars",
            "degree": "BA",
            "majors": ["Space Eng"],
            "minors": ["Gravity Manipulation"],
            "dates": 2088
        }
    ],
    "OnlineClasses": [
        {
            "course": "A.I. shrink",
            "school": "Udacity",
            "dates": 2099,
            "url": "http://www.udacity.com/course/ud8045332457334"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "United Space Effort",
            "location": "St Louis",
            "position": "Test pilot",
            "dates": "2103 - future",
            "description": "Plans and conducts flight test activities. Formulates test procedures and conducts tests to evaluate structural integrity, performance, handling characteristics, reliability, and suitability of spacecraft and systems."
        },
        {
            "employer": "OCP",
            "location": "El Paso",
            "position": "Senior A.I. psycho Eng",
            "dates": "2100 - 2103",
            "description": "Teaching the subject about its moods, feelings, thoughts and behaviors and how to better respond to day to day challenges. These sessions includes interactive processes between the subject and me as a qualified mental health professional. Its purpose is the exploration of thoughts, feelings and behavior for the purpose of problem solving or achieving higher levels of functioning"
        },
        {
            "employer": "Federation",
            "location": "Orion Belt",
            "position": "Jump Freighter Captain",
            "dates": "2098 - 2100",
            "description": "As Captain I'm in charge of the operations of space vessels, such as Haulers, blockade-Runners, tugboats, freighters, barges or ferry boats. I maintain logs detailing a ship's course and speed, Anomalies and other factors that influence movement of the ship. I also manage ship's crew, supervise loading and unloading of either passengers or cargo and may be involved in the hiring of crew members. In many cases, work as a ship captain takes one away from home for extended periods of time."
        }
    ]
}

work.jobs = work.jobs.reverse();

var projects = {
    "projects": [
        {
        "title": "Omelette wedges",
        "dates": 2084,
        "description": "Finely chop the spring onions and set aside. Thickly slice the potatoes (there is no need to peel them first), then boil in a pan of lightly salted water for 10 mins until just tender. Drain. Meanwhile snip the bacon into pieces with scissors. Heat a frying pan with 1 tsp oil, then stir-fry the bacon until it turns pink. Add the spring onions to the pan, stir briefly for a couple of secs to slightly soften, then tip the bacon and onion into a bowl.",
        "images" : [
        "images/veggies.jpg",
        "images/omelette.jpg"
            ]
        }
    ]
}

bio.display = function() {
    $("#header-row1").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header-row1").prepend(HTMLheaderName.replace("%data%", bio.name));
    for (contact in bio.contacts){
        var data = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
        var type = data.replace("%contact%", contact);
        $("#topContacts").append(type);
        $("#footerContacts").append(type);
    }
    $("#left-header").append(HTMLbioPic.replace("%data%", bio.picture));
    $("#left-header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skillsH3").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
    $("#right-header").append(HTMLWelcomeMsg.replace("%data%", bio.welcome_msg));
}

work.display = function(order){
    work.jobs = work.jobs.reverse();
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    }
}

projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        for (img in projects.projects[project].images){
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[img]));
        }
    }

}

education.display = function(){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
        var title = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree)
        $(".education-entry:last").append(title);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
        $(".education-entry:last").append(HTMLschoolMinor.replace("%data%", education.schools[school].minors));
    }

    for (onlineClass in education.OnlineClasses){
        $(".education-entry:last").append(HTMLonlineClasses);
        var CourseSchool = HTMLonlineTitle.replace("%data%", education.OnlineClasses[onlineClass].course) + HTMLonlineSchool.replace("%data%", education.OnlineClasses[onlineClass].school)
        $(".education-entry:last").append(CourseSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.OnlineClasses[onlineClass].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.OnlineClasses[onlineClass].url));
    }
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1]
}

function swap(val) {
    if (val == "earliest"){
        val = "latest";}
    else {
        val = "earliest";
    }
    return val
}

bio.display();
work.display();
projects.display();
education.display();

$("#workExperience-button").append(earliestButton.replace("%data%", "earliest"));
$("#main").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);
