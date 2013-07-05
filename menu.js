// Set up localStorage
if (!localStorage.getItem('solved'))
	localStorage.setItem('solved', '[]');

function populateProblemMenu() {
	var problemsDropdown = document.getElementById("problems-dropdown");
	var solved = JSON.parse(localStorage.getItem('solved'));

	while (problemsDropdown.firstChild) {
		problemsDropdown.removeChild(problemsDropdown.firstChild);
	}

	problems.forEach(function(problem, index) {
		var listEntry = document.createElement("li");
		var link = document.createElement("a");
		link.href = 'index.html?problem=' + (index + 1);
		link.appendChild(document.createTextNode((index + 1) + ". " + problem.title));
		listEntry.appendChild(link);
		if (solved[index + 1]) {
			link.className += " solved";
		}
		problemsDropdown.appendChild(listEntry);
	});
}

window.addEventListener("load", populateProblemMenu);
