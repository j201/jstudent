// Currently all global for testing
var id = document.getElementById.bind(document);
var codeInput = CodeMirror.fromTextArea(id("code-input"), {
	mode : "javascript",
	lineNumbers : true,
	tabSize : 4,
	indentWithTabs : true,
	indentUnit : 4
});
codeInput.setValue('var x = "Hi!";');
var codeTest = CodeMirror.fromTextArea(id("code-test"), {
	mode : "javascript",
	readOnly : true,
	height : "dynamic",
	tabSize : 4,
	indentWithTabs : true,
	indentUnit : 4
});
codeTest.setValue('x === "Hi!";');

var currentProblem = problems[0], problemNo = 0;

window.addEventListener("load", function() {
	// Load problem specified in URL, if any
	var problemURI = window.location.search.match(/[\?&]problem=(\d+)/);
	if (problemURI !== null) {
		problemNo = Number(problemURI[1]);
		if (problemNo > 0 && problemNo <= problems.length) {
			currentProblem = problems[problemNo - 1];

			// Set code boxes 
			codeTest.setValue(problems[problemNo - 1].test);
			codeInput.setValue(problemNo < 3 ? '// Put your code here\n\n' : '');
			

			// Set subtitle
			var subtitle = id('subtitle');
			while(subtitle.firstChild) {
				subtitle.removeChild(subtitle.firstChild);
			}
			subtitle.appendChild(document.createTextNode(currentProblem.title));

			// Set desc - Uses innerHTML to allow for HTML tags in JS String
			desc.innerHTML = currentProblem.desc;
		} else
			problemNo = 0;
	} else
		problemNo = 0;
});

id('run-code').addEventListener('click', function() {
	/* jshint evil:true */

	var success = false;
	var message = '';
	var result = id('result');
	var disabledFns = [];

	// Test code and generate message
	// Disable functions as specified in currentProblem.disableFns
	if (currentProblem.disableFns) {
		currentProblem.disableFns.forEach(function(fn) {
			disabledFns.push({
				obj : fn.obj,
				prop : fn.prop,
				value : fn.obj[fn.prop]
			});
			fn.obj[fn.prop] = undefined;
		});
	}

	// Combine code components and run
	var code = '"use strict";\n' + (currentProblem.runBefore || '') + '\n;' + codeInput.getValue() + '\n;' + codeTest.getValue();
	console.log(code);
	if (currentProblem.check && !currentProblem.check(codeInput.getValue())) {
		message = currentProblem.checkMsg;
	} else {
		try {
			success = eval(code);
		} catch (e) {
			message = e.name + ': ' + e.message;
			success = false;
		}
	}

	// Reenable functions
	if (currentProblem.disableFns) {
		disabledFns.forEach(function(fn) {
			fn.obj[fn.prop] = fn.value;
		});
	}

	// Display relevant message
	if (!message && success) {
		message = 'Test passed! ';
		var solved = JSON.parse(localStorage.getItem('solved'));
		solved[problemNo] = true;
		localStorage.setItem('solved', JSON.stringify(solved));
		populateProblemMenu();
	} else if (!message) {
		message = 'Test failed. Try again.';
	}

	// Display message
	while (result.firstChild) {
		result.removeChild(result.firstChild);
	}
	result.appendChild(document.createTextNode(message));
	result.style.color = success ? "green" : "red";
	if (success) {
		var link = document.createElement('a');
		if (problemNo < problems.length) {
			link.href = 'index.html?problem=' + (problemNo + 1);
			link.appendChild(document.createTextNode('Click here for the next problem.'));
			result.appendChild(link);
		} else {
			link.href = "http://i.imgur.com/QZ4PY9C.gif";
			link.appendChild(document.createTextNode('cat gif.'));
			result.appendChild(document.createElement('br'));
			result.appendChild(document.createTextNode('Congratulations, you\'ve finished the last problem! Have a '));
			result.appendChild(link);
		}
	}
});
