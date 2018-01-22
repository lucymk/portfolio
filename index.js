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

