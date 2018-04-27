$(document).ready(function(){
	$(document).on('click', '.showContent', function(){
		$(this).next('.hiddenContent').slideToggle(200);
		$(this).toggleClass('showOn');
	});
});

(function(){
	var resumeApp = angular.module('resumeApp', []);

	resumeApp.controller('resumeCtrl', ['$scope', function($scope){

		$scope.titleMain = 'Matt Wojas Resume';
		$scope.address = {};
		$scope.address.street = "33 Harbour Square";
		$scope.address.city = "Toronto";
		$scope.address.province = "ON.";
		$scope.address.postal = "M5J 2G2";
		$scope.address.phone = "416 802 7024";
		$scope.address.email = "matt.wojas@gmail.com";

		$scope.educations =[
			{
				"title": "Humber College",
				"yearGraduate": "August 2010",
				"programTitle":"Post Graduate Certificate in Web Development",
				"Summary":"Studied Web, .Net, PHP, Wordpress, XHTML, CSS, C#, Javascript, AJAX, SQL, OOP, Web Accessibility, Design.",
				"keyEvents": [
					{"item": "Created Content Management Systems from scratch in PHP and .NET(C#)."},
					{'item': "Studied modern web standards and best practices."}

				]
			},
			{
				"title": "University of Toronto",
				"yearGraduate": "June 2007",
				"programTitle":"Honours Bachelor of Arts",
				"Summary":"English Maj./History/Writing, Rhetoric & Critical Analysis ",
				"keyEvents":[
					{"item": "Honed research and communication skills."},
					{"item": "Improved ability to process and analyze large amounts of information."}
				]
			}
		];

		$scope.experiences = [
			{
				"title": "Architech",
				"startDate":"2017-08-15",
				"endDate": "Present",
				"position": "Software Engineer",
				"description" : "Software Consultant for various projects",
				"keyEvents": [
					{"item": "Working in Python and React to Build new features and fix bugs on the Wave Accounting web application"}
				]				
			},
			{
				"title": "A.K.A. New Media",
				"startDate":"2010-12-03",
				"endDate": "2017-08-03",
				"position": "Front End Web Developer",
				"description" : "Built and maintained web properties and online presences; performed other IT duties.",	
				"keyEvents": [
					{"item": "Studied and built professional, responsive, standards compliant, multi-lingual web sites and custom applications. (*see below for examples)"},
					{"item": "Worked primarily with XHTML, CSS.*, SASS, LESS, Javascript, Jquery, AJAX, C#, SQL, Angular (v.1.x)."},					 
					{'item': "Used Gulp, Node, Sublime Text, Git CLI, Cordova,  Sourcetree, IIS, Foundation, Bootstrap, Kentico (v.5-10), Photoshop, Google Maps API."},
					{'item': "Ensured sites met standards(W3C), accessibility (AODA level A + AA), and SEO best practices."},										
					{'item': "Tested and configured sites for cross-browser and backwards compatibility."},
					{'item': "Implemented various API integrations (Custom, Social Media, Spectrix, Google Maps, Miscrosoft Exchange API)."},
					{'item': "Collaborated and communicated with design and account teams throughout all projects."},
					{'item': "Interviewed, screened, and trained new hires.  Lead development of new projects."},
					{'item': "Provided support on UX and UI for akaraisin (Software as a Service solution for fundraising)."}
				], 
				"sampleSites":[
					{
						"title":"Hopeair",						
						"urls":[
							{"url":"hopeair.ca"}
						],
						"highlights" : [
							{"item": "Request a flight SPA"}
						]
					},
					{
						"title":"Canada Media Fund",						
						"urls":[
							{"url":"cmf-fmc.ca"}
						],
						"highlights" : [
							{"item": "Funded Projects Search"}
						]
					},
					{
						"title":"Frontier College",
						"urls":[
							{"url":"frontiercollege.ca"}
						]
						
					},													
					{
						"title":"Women's College Hospital Foundation",
						"urls":[
							{"url":"wchf.ca"}
						]						
					},
					{
						"title":"DAS",
						"urls":[
							{"url":"das.ca"}
						]
						
					},	
					{
						"title":"Luminato Event Scheduler",
						"urls":[
							{"url":"luminatofestival.ca"}
						]						
					},
					
					{
						"title":"Hospitals of Regina Foundation",
						"urls":[
							{"url":"hrf.sk.ca"}
						]						
						
					},
					{
						"title":"Joseph Brant Hospital Foundation",
						"urls":[
							{"url":"jbhfoundation.ca"}
						]						
						
					},	
					{
						"title":"Maple Leaf Sport's and Entertainment",
						"urls":[
							{"url":"mlsefoundation.org"},							
							{"url":"mlselaunchpad.org"},
							{"url":"mlseteamupchallenge.com"},
						]						
					},		
					{
						"title":"Chicken Farmers of Ontario",
						"urls":[
							{"url":"artisanalchicken.ca"},
							{"url":"ontariochicken.ca"},
							{"url":"specialtybreeds.ca"}
						]						
						
					},
					{
						"title":"Schneider Electric Motor Data Calculator",
						"urls":[
							{"url":"play.google.com/store/apps/details?id=com.schneiderelectric.motordatacalculatorus"}
						]
						
					},				
				]
			},
			{
				"title": "PopHire",
				"startDate":"2010-11-01",
				"endDate": "2011-04-01",
				"position": "QA Analyst",
				"description" : "Analyze a start-up application for bugs, quality, and UX."				
			},
			{
				"title": "Sunrank",
				"startDate":"2010-07-01",
				"endDate": "2010-10-01",
				"position": "Developer Intern",
				"description" : "Internship at Extreme Labs start-up incubator."				
			},
			{
				"title": "Victory Verbatim ",
				"startDate":"2006-10-03",
				"endDate": "2008-02-16",
				"position": "Court Reporter ",
				"description" : "Coordinated and assisted Counsel with the audio recording and procedures of legal examinations.",
				"keyEvents": [
					{"item": "Gained exposure to Ontario Legislation in a legal environment."},
					{"item": "Attended Arbitration Hearings, depositions, and examinations."},										
					{"item": "Edited and proofread legal transcripts for quality and accuracy."}					
				]				
			},
			{
				"title": "wagi.ca ",
				"startDate":"2006-02-03",
				"endDate": "2009-06-16",
				"position": "Research Assistant ",
				"description" : "In a part time position I assisted a senior real estate appraiser with report preparation and researching/analyzing data.",
				"keyEvents": [
					{"item": "Utilized a variety of real estate data base systems for searching, compiling and analyzing data. "},
					{"item": "Inputting graphics. "}					
				]				
			},
			{
				"title": "Centre for Addiction and Mental Health",
				"startDate":"2005-06-01",
				"endDate": "2006-06-01",
				"position": "Volunteer Music Therapist",
				"description" : "During a one year volunteer position I initiated and spearheaded a music therapy program for patients.",
				"keyEvents": [
					{"item": "Organized interactive activities."},
					{'item': "Communicated, explained, and taught musical concepts to patients."},
					{"item": "Created a friendly and caring atmosphere for patients, enabling them to feel comfortable taking part in the program."}
				]	
			},			
		
		];

	

		$scope.experiencesPersonal = [
			{
				"title": "Developer",
				"startDate":"2010-12-03",
				"endDate": "Present",
				"position": "Hobby/Freelance Developer",
				"description" : "Personal and freelance projects.",	
				"keyEvents": [
					{"item": "An environmental data monitoring application in Python on a Raspberry Pie"},				
					{'item': "A data logging application, which logged data to a MySql database displayed to a php backend/js frontend."},	
					{'item': "An application in angular and MySql to manage and store lunch places."},
					{'item': "Configured cloud linux/apache web server for personal site and projects."},
					{'item': "Worked on various freelance projects in static HTML, Wordpress, and Kentico."},
					{'item': "Performed needs assessment and communication throughout project with clients."}
				]			
			}
		];


	}]);
})();