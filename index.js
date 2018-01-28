//NAVBAR LINKS 

var linkArray = Array.from(document.getElementsByClassName('link'));
var mainDivArray = Array.from(document.getElementsByClassName('main__Div'));

	linkArray.forEach(function(link){
		link.addEventListener("click", function(e) {
			mainDivArray.forEach(function(div){
				 if (div.classList.contains('displayNone') && link.id.includes(div.id)) {
				 	div.classList.toggle('displayNone');
				 }
				 else if (!div.classList.contains('displayNone') && !link.id.includes(div.id)) {
				 	div.classList.add('displayNone');
				 }

			});
		});
	});

//ABOUT PAGE

var aboutSkills = document.getElementById('aboutSkills');
var aboutSkillsP = document.getElementById('aboutSkillsP');
var aboutSkillsText = document.getElementById('aboutSkillsText');

aboutSkillsP.addEventListener("click", function(){
	aboutSkills.classList.toggle('displayNone');
	aboutSkillsText.classList.toggle('displayNone');
})