;(function() {
	var id = document.getElementById.bind(document);
	
	// Populate problems list dropdown menu based on problems.js
	window.addEventListener("load", function() {
		var problemsDropdown = id("problems-dropdown");
		problems.forEach(function(problem, index) {
			var listEntry = document.createElement("li");
			var link = document.createElement("a");
			link.href = 'index.html?problem=' + (index + 1);
			link.appendChild(document.createTextNode((index + 1) + ". " + problem.title));
			listEntry.appendChild(link);
			problemsDropdown.appendChild(listEntry);
		});
	});
})();
