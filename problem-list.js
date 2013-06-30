;(function() {
	var id = document.getElementById.bind(document);

	window.addEventListener("load", function() {
		// Add problems to list
		var col1 = id("col1"),
			col2 = id("col2"),
			col3 = id("col3");
		var problemsPerCol = Math.ceil(problems.length / 3);
		var solved = JSON.parse(localStorage.getItem('solved'));

		problems.forEach(function(problem, index) {
			var listEntry = document.createElement("li");
			var link = document.createElement("a");

			link.href = 'index.html?problem=' + (index + 1);
			link.appendChild(document.createTextNode((index + 1) + ". " + problem.title));
			if (solved[index + 1])
				link.className += " solved";

			listEntry.appendChild(link);
			(index < problemsPerCol ? col1 :
			 index < problemsPerCol * 2 ? col2 : col3).appendChild(listEntry);
		});
	});

})();
