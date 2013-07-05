// Set up localStorage
if (!localStorage.getItem('solved'))
	localStorage.setItem('solved', '[]');

function populateProblemMenu() {
	var problemsDropdown = document.getElementById("problems-dropdown");
	var solved = JSON.parse(localStorage.getItem('solved'));

	while (problemsDropdown.firstChild) {
		problemsDropdown.removeChild(problemsDropdown.firstChild);
	}

	// Redefine forEach in case it has been disabled by a problem - a packed version of the MDN forEach shim
	if(!Array.prototype.forEach){Array.prototype.forEach=function forEach(callback,thisArg){var T,k;if(this==null){throw new TypeError("this is null or not defined");}var O=Object(this);var len=O.length>>>0;if({}.toString.call(callback)!=="[object Function]"){throw new TypeError(callback+" is not a function");}if(thisArg){T=thisArg}k=0;while(k<len){var kValue;if(Object.prototype.hasOwnProperty.call(O,k)){kValue=O[k];callback.call(T,kValue,k,O)}k++}}}

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
