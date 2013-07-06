// Set up localStorage
if (!localStorage.getItem('problems'))
	localStorage.setItem('problems', '{}');

function populateProblemMenu() {
	var problemsDropdown = document.getElementById("problems-dropdown");
	var storedProblems = JSON.parse(localStorage.getItem('problems'));

	while (problemsDropdown.firstChild) {
		problemsDropdown.removeChild(problemsDropdown.firstChild);
	}

	problems.forEach(function(problem, index) {
		var listEntry = document.createElement("li");
		var link = document.createElement("a");
		link.href = 'index.html?problem=' + (index + 1);
		link.appendChild(document.createTextNode((index + 1) + ". " + problem.title));
		listEntry.appendChild(link);
		if (storedProblems[problems[index].title] && storedProblems[problems[index].title].solved) {
			link.className += " solved";
		}
		problemsDropdown.appendChild(listEntry);
	});
}

window.addEventListener("load", populateProblemMenu);
