var problems = [
	{
		title : "Intro to numbers",
		desc : "JavaScript uses decimal numbers and the basic arithmetic operators (+,-,*,/), just like you'd expect. All numbers in JS are floats, which means that they can have digits after the decimal point.",
		test : "x === 1 + 2 / 5;",
		codeCheck : function(code) { return !/[^\/][*\/+\-][^\/]/.test(code); },
		codeCheckMessage : "Solve this one without using the +, -, *, or / operators."
	}, {
		title : "Intro to strings",
		desc : "Another data type is the string, which can hold text. Strings can be wrapped in single quotes or double quotes, and can be concatenated using the + operator.",
		test : 'x === "Hello, " + \'World!\';'
	}, {
		title : "Intro to logic",
		desc : 'JavaScript has a number of <a href="https://developer.nmozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">logical operators</a>. (Bookmark the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">MDN JS Reference</a> - it\'s the best on the internet.) These are similar to the logical operators in other C-like languages. They are commonly used with JS\'s boolean values: <code>true</code> and <code>false</code>.',
		test : 'x === ((2 > 1) && ("a" !== "b") && false);',
		codeCheck : function(code) { return !/[\|&><!]|==/.test(code); },
		codeCheckMessage : "Solve this one without using logical operators."
	}
];
