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
	}
];
