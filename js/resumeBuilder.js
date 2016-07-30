/*
This is empty on purpose! Your code to build the resume will go here.
*/
//$("#main").append("Teodoro Orlow Wey");
/*
var firstname = "JamesYEAH";

console.log(firstname);

var awesomeThoughts = "I am Teo and I am AWESOME!"

console.log(awesomeThoughts);


var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);



var s = "audacity";

console.log(s);


$("#main").append(skills);

$("#main").append(skills.length);

var sampleArray


$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.welcome);
$("#main").append(bio.pic);
*/

var name = "Teodoro Orlow Wey";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

// var role = "Computer Engineer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").append(formattedRole);

//var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
//$("#header").append(formattedPic);

var work = {
    "jobs": [
        {
            "employer": "Freescale",
            "title": "SoC Engineer",
            "location": "Campinas, Brazil",
            "dates": "January 2013 to August 2014",
            "description": "Working on Synthesis and Logic Equivalence Check processes"
        }
    ],
    "display": "displayWork()"
}

var projects = {
    "projects": [
        {
            "title": "Analysis of Compression Algorithm ISO/MPEG-2 Audio Layer 3",
            "date": "October 2011 to August 2012",
            "description": "Encoding steps of MP3 stardard implemented on Matlab and C functions"
        },
        {
            "title": "Developing a Software Defined Network to deploy a geo-distributed cloud service",
            "date": "September 2015 to January 2016",
            "description": "Adopt a distributed storage architecture and test performance of the system"
        }
    ],
    "display": "displayProj()"
}

var bio = {
    "name" : "Teodoro Orlow Wey",
    "role" : "Computer Engineer",
    "welcome" : "Welcome to my webpage!",
    "contacts" : {
        "mobile": "+46 762 32 78 24", 
        "email": "teowey@gmail.com",
        "github": "github.com/teowey",
        "location": "Stockholm, Sweden"
    },
    "skills": [
        "Computer Engineering", "Web Development", "Java Programming", "Distributed Systems "
    ],       
    "pic": "images/profilepic.jpeg",
    "display": "displayBio()"
    
}


var education = {
    "schools": [
        {
            "name": "UNICAMP",
            "location": "Campinas, Brazil",
            "degree": "B.S.",
            "department": "FEEC - School of Electrical and Computer Engineering",
            "majors": "Computer Engineering",
            "dates": "2012 ",
            "url": "http://www.unicamp.br"
        },
        {
            "name": "KTH",
            "location": "Stockholm, Sweden",
            "degree": "M.S.",
            "department": "ICT - School of Information and Communication Technology",
            "majors": "Communication Systems",
            "dates": "2016",
            "url": "http://www.kth.se"
        }
    ],
    "display": "displayEducation()"

}
/*
work.position = "Java Developer";
work.employer = "KTH";
work.years = "1 year";
work.city = "Stockholm";

education["school"] = "UNICAMP";
education["years"] = "5 years";
education["city"] = "Campinas";
*/

/*
$("#main").append(work["position"]);
$("#main").append(education.school);
*/



// Quiz lesson 2

// check if there are skills in the bio object
if(bio.skills.length > 0){

    // append HTMLskillsStart to the div with id "header"
    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
        // append skills to the element with id "skills"
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
};

function displayWork() {
    
    for (job in work.jobs){

        // append a new HTMLworkStart
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
}

displayWork();




// Quiz Chapter 2 - internationalize name quiz

// append button to the main div
// $("#main").append(internationalizeButton);

// function inName() {

//     var capitalize = bio.name.split(" ");
//     capitalize[1] = capitalize[1].toUpperCase();
//     var newName = capitalize[0] + " " + capitalize[1];
  
//     return newName;
// }

function displayBio() {

    //$("#topContacts").append();

    //var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    //$("#header").append(formattedWelcome);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGitHub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    // var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
    // $("#header").append(formattedPic);

    $("#lets-connect").append(formattedMobile).append(formattedEmail).append(formattedGitHub).append(formattedLocation);
}

displayBio();
// Chapter 2 Encapsulation Quiz

//projects.display = function() {
function displayProj() {
    for (proj in projects.projects) {
          
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].date);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $(".project-entry:last").append(formattedDescription);

        
        

        
    }
    
}

displayProj();

$("#mapDiv").append(googleMap);

function displayEducation() {

    for(edu in education.schools) {

        $("#education").append(HTMLschoolStart);


        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(formattedMajors);
        
        var formattedDepartment = HTMLdepartment.replace("%data%", education.schools[edu].department);
        $(".education-entry:last").append(formattedDepartment);
        
        //var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        //$(".education-entry:last").append(formattedDates);

       
    }

    //$("#education").append(HTMLonlineClasses);

    for(online in education.onlineCourses) {

        $("#education").append(HTMLschoolStart);
        
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
       
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        $(".education-entry:last").append(formattedOnlineTitle);

        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(formattedOnlineURL);
        
    }
    
}

displayEducation();
