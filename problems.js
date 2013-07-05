/* 
 * Problem properties:
 * title - The title of the problem
 * desc - The description and instructions. This can include HTML tags.
 * test - The code to run to test the problem. If the test evaluates as true, then the problem is passed.
 * check - A function that is run on the user's code string in order to apply restrictions. If the function returns true, the test continues, otherwise the input fails and checkMsg is displayed
 * checkMsg - The message displayed if the check test fails.
 * runBefore - Code, as a string, that is run before the user's input when testing code in order to apply restrictions. This is mostly used for modifications to the native environment, like disabling Array#forEach.
 */

var problems = [
	{
		title : "Intro to numbers",
		desc : "JavaScript uses decimal numbers and the basic arithmetic operators (+,-,*,/), just like you'd expect. All numbers in JS are floats, which means that they can have digits after the decimal point.",
		test : "x === 1 + 2 / 5;",
		check : function(code) { return !/[^\/][*\/+\-][^\/]/.test(code); },
		checkMsg : "Solve this without using the +, -, *, or / operators."
	}, {
		title : "Intro to strings",
		desc : "Another data type is the string, which can hold text. Strings can be wrapped in single quotes or double quotes, and can be concatenated using the + operator.",
		test : 'x === "Hello, " + \'World!\';',
		check : function(code) { return code.indexOf('+') === -1; },
		checkMsg : "Solve this without using the + operator."
	}, {
		title : "Intro to logic",
		desc : 'JavaScript has a number of <a href="https://developer.nmozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">logical operators</a>. (Bookmark the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">MDN JS Reference</a> - it\'s the best on the internet and you <b>will</b> need to use it to solve some problems.) These are similar to the logical operators in other C-like languages. They are commonly used with JS\'s boolean values: <code>true</code> and <code>false</code>.',
		test : 'x === ((2 > 1) && ("a" !== "b") && false);',
		check : function(code) { return !/[\|&><!]|==/.test(code); },
		checkMsg : "Solve this without using logical operators."
	}, {
		title : "Intro to functions",
		desc : "Functions are first-class values in JavaScript, meaning that they can be assigned to a variable and passed around just like a string or number.",
		test : 'var increment = function(number) {\n\treturn number + 1;\n};\n\nx === increment(2);',
		check : function(code) { return code.indexOf('function') === -1; },
		checkMsg : "Solve this without creating a function."
	}, {
		title : "Make a function",
		desc : "Now, using string operations, create a function to greet people based on their name.",
		test : "x('Bob') === 'Hi, Bob' &&\nx('Joan') === 'Hi, Joan'"
	}, {
		title : "if and else",
		desc : "<code>if</code> statements are JavaScript's way of conditionally executing code. They can take an optional <code>else</code> statement at the end, which can itself take any statement, usually a block surrounded with curly braces or another <code>if</code> statement.",
		test : "var fruit;\n\nif (5 >= 7) {\n\tfruit = 'apple';\n} else if (4 === 2 * 2) {\n\tfruit = 'banana';\n} else {\n\tfruit = 'cherry';\n}\n\nx === fruit;",
		check : function(code) { return code.indexOf('if') === -1; },
		checkMsg : "Solve this without using if."
	}, {
		title : "Signum Freud",
		desc : 'The <a href="https://en.wikipedia.org/wiki/Sign_function">signum function</a> returns 1 if the input is greater than 0, -1 if the input is less than 0, and 0 if the input is 0. Implement it.',
		test : "x(5) === 1 &&\nx(-20.2) === -1 &&\nx(0) === 0;"
	}, {
		title : "Intro to loops",
		desc : 'You can repeately execute JS code using a <a href="http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for">for loop</a> or a <a href="http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while">while loop</a>. In particular, the for loop is generally used to do something a specific number of times.',
		test : "var power = 1;\n\nfor (var i = 0; i < 3; i++) {\n\tpower *= 2;\n}\n\nx === power;",
		check : function(code) { return code.indexOf('for') === -1; },
		checkMsg : "Solve this without using for."
	}, {
		title : "Intro to arrays",
		desc : 'An array is a list of values, which can be strings, numbers, functions, other arrays, whatever. You can access elements of arrays by putting square brackets after the array\'s variable with the index of the element you want to access, starting from 0 for the first element. Arrays can be constructed by wrapping a list of values, separated by commas, in square brackets.',
		test : "var sayHi = function() { return 'Hi!'; };\nvar sayBye = function() { return 'Bye!'; };\n\nvar array1 = [sayHi, sayBye];\nvar array2 = [[1, 'foo'], array1];\n\nx === array2[1][0]();",
		check : function(code) { return !/\[\]/.test(code); },
		checkMsg : "Solve this without making arrays."
	}, {
		title : "Sum it up",
		desc : "Write a function that calculates the sum of all of the numbers in an array. You'll probably want to use a for loop to go through each element of the array, but there are other ways of doing it. You can find out the number of elements in an array by putting .length after it, e.g., <code>var arr = [0, 1, 2]; arr.length === 3; // true</code>.",
		test : "x([1, 2, 3]) === 6 &&\nx([Math.PI, -50.1, Math.sqrt(2), 0xfab]) === 3965.455806215963; // Yes, those are all numbers!"
	}, {
		title : "Reversal",
		desc : "Write a function that takes an array and returns a new array with the elements in the reverse order. Note that you can add elements to an existing array just by assigning to a numerical index higher than the ones that exist already, but an easier way is to use .push(value), which adds an element on the end of an array. For example, <code>var arr = [1, 2]; arr.push(3); arr; // [1, 2, 3]</code>.",
		test : "function arraysEqual(arr1, arr2) { // JS considers every array unique, so arrays are never equal(===) to one another. This function tests if two arrays have the same elements.\n\tif (arr1 == null || arr2 == null || arr1.length !== arr2.length)\n\t\treturn false;\n\tfor (var i = 0; i < arr1.length; i++) {\n\t\tif (arr1[i] !== arr2[i])\n\t\t\treturn false;\n\t}\n\treturn true;\n}\n\narraysEqual(x([1, 2, 3]), [3, 2, 1]) &&\narraysEqual(x(['a', 'b', 'c', 'd', 'e']), ['e', 'd', 'c', 'b', 'a']);",
		runBefore : "Array.prototype.reverse = undefined; Array.reverse = undefined;"
	}, {
		title : "Intro to objects",
		desc : "The basic composite type of JS is the object, which maps strings to values. You can make an object with object literal notation, which is wrapped with curly brackets and has key-value pairs separated by commas with the key-value pairs themselves separated by a colon. It looks something like this: <code>var foo = {bar : 1, baz : 2};</code> To access an object value you can either put the key as a string between square brackets after the object variable, or with a period between the object variable and key name, as long as the key name doesn't have spaces or certain other disallowed characters.",
		test : "var myObj = {\n\tfoo : 4,\n\tbar : function() {\n\t\treturn 2;\n\t},\n\t'baz' : -1\n};\n\nx === myObj.baz + myObj.bar() + myObj['foo'];",
		check : function(code) { return !/[{}]/.test(code); },
		checkMsg : "Solve this without making objects."
	}, {
		title : "Objectifying people",
		desc : "Write a function that takes a first name and a last name and returns an object with the names written to the firstName and lastName properties.",
		test : "var person1 = x('Arthur', 'Belling'),\n    person2 = x('Luigi', 'Vercotti');\n\nperson1.firstName === 'Arthur' &&\nperson1.lastName === 'Belling' &&\nperson2.firstName === 'Luigi' &&\nperson2.lastName === 'Vercotti';",
	}, {
		title : "Cartography",
		desc : "Objects represent mappings of strings to other values. Write a function that takes an array of strings and an array of values and returns an object with the strings from the first array mapped to the corresponding values in the second array.",
		test : "var obj1 = x(['a', 'b', 'c'], [1, 2, 3]);\nvar obj2 = x(['firstName', 'lastName'], ['Arthur', 'Belling']);\n\nobj1.a === 1 && obj1.b === 2 && obj1.c === 3 &&\nobj2.firstName === 'Arthur' && obj2.lastName === 'Belling';"
	}, {
		title : "The magic this",
		desc : "<code>this</code> is a special value in JavaScript. Outside of a function, it refers to the global scope (an object with all of the vars you've defined as properties). But inside of a function, it refers to the object that the function was called from. So, if you call a function defined on an object like <code>foo.bar()</code>, <code>this</code> in <code>bar()</code> will refer to <code>foo</code>.",
		test : "var obj1 = {\n\ta : 1,\n\tgetA : function() { return this.a }\n};\nvar obj2 = {\n\ta : 20,\n\tgetA : obj1.getA\n};\n\nx === obj1.getA() + obj2.getA();",
		check : function(code) { return !/[{}]/.test(code); },
		checkMsg : "Solve this without making objects."
	}, {
		title : "Sum it up v2: HOFs",
		desc : "A HOF, or higher order function, is a function that takes another function as an argument and/or returns a function. This works in JavaScript because functions are values, just like a boolean or string. One of the most common HOFs in JS is <code>Array.prototype.forEach</code> (note: all arrays inherit from <code>Array.prototype</code>, which means that they all have <code>.forEach</code> as a property). <code>forEach</code> takes a function as its argument, and executes that function with each array element passed as a parameter. So, for example, <code>[1, 2, 3].forEach(alert);</code> will alert 1, then 2, then 3. The function we passed to <code>forEach</code> was the <code>alert</code> function, and since we're using it as a value, not calling it, there isn't a pair of parentheses after it. It's also common to pass an anonymous function (a function created inline and not assigned to a variable) to <code>forEach</code>, e.g., <code>[4, 5, 6].forEach(function(element) { console.log(element); }); // logs 4,5,6</code>. Use <code>forEach</code>, not <code>for</code> or <code>while</code>, to find the sum of the elements of an array.",
		test : "x([1, 2, 3]) === 6 &&\nx([Math.PI, -50.1, Math.sqrt(2), 0xfab]) === 3965.455806215963;",
		check : function(code) { return !/\W(for|while)\W/.test(code); },
		checkMsg : "Use forEach, not for or while!"
	}, {
		title : "More cartography",
		desc : "<code>Array.prototype.map</code> is another useful HOF. It takes a function as its parameter and returns an array of results of applying that function to each element of the array it's called from. For example, <code>[1, 2, 3].map(function (x) { return x + 1; })</code> returns <code>[2, 3, 4]</code>. Use <code>map</code> to greet everyone. (Note that <code>for</code> and <code>while</code> are not permitted in this test and <code>forEach</code> will be disabled.)",
		test : "var arr1 = x(['Alice', 'Bob', 'Cathy']),\n    arr2 = x(['Kang', 'Kodos']);\n\narr1[0] === 'Hi, Alice!' && arr1[1] === 'Hi, Bob!' && arr1[2] === 'Hi, Cathy!' &&\narr2[0] === 'Hi, Kang!' && arr2[1] === 'Hi, Kodos!';",
		check : function(code) { return !/\W(for|forEach|while)\W/.test(code); },
		checkMsg : "Use map, not for, forEach, or while!",
		runBefore : "Array.prototype.forEach = undefined;"
	}, {
		title : "Odd ones out",
		desc : "<code>Array.prototype.filter</code> is a higher order function that takes a predicate (a function that returns truthy or falsy based on the input value) and returns a new array with only the elements for which that function was truthy. Use <code>filter</code>, not <code>for</code>, <code>forEach</code>, or <code>while</code>, to filter out the elements of an array that are odd numbers.",
		test : "var arr1 = x([1, 2, 3, 4]);\nvar arr2 = x(['foo', 1, -2, 0]);\n\narr1.length === 2 && arr1[1] === 4 &&\narr2.length === 3 && arr2[1] === -2;",
		check : function(code) { return !/\W(for|forEach|while)\W/.test(code); },
		checkMsg : "Use filter, not for, forEach, or while!",
		runBefore : "Array.prototype.forEach = undefined;"
	}, {
		title : "Sum it up v3",
		desc : "The last built-in Array HOF we'll look at <code>Array.prototype.reduce</code>. It takes a function and passes it the first two elements of the array (or, if a value is passed to reduce as a second parameter, that value and the first element of the array). Then it takes the result of that, and passes it to the function again, along with the next element of the array. It continues to do that until all of the array elements have been processed. Use <code>reduce</code>, not <code>for</code>, <code>while</code>, or <code>forEach</code> to find the sum of the elements of an array.",
		test : "x([1, 2, 3]) === 6 &&\nx([Math.PI, -50.1, Math.sqrt(2), 0xfab]) === 3965.455806215963;",
		check : function(code) { return !/\W(for|forEach|while)\W/.test(code); },
		checkMsg : "Use reduce, not for, forEach, or while!",
		runBefore : "Array.prototype.forEach = undefined;"
	}, {
		title : "DIY HOF",
		desc : 'Make your own higher order function that takes an array and a predicate function as input and returns true if the predicate returns true for at least one element of the array and false otherwise. (Note: This function exists as <code><a href="http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some">Array.prototype.some</a></code>, and <code><a href="http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every">Array.prototype.every</a></code> is similar, but those will be disabled for the test.)',
		test : "x([1, 2, 3], function(num) { return num % 2 === 0; }) === true &&\nx(['foo', 'quux', 'jabberwocky'], function(str) { return str.length === 5; }) === false &&\nx([0, 3, 9], function(num) { return num < 0; }) === false;",
		check : function(code) { return !/\W(some|every)\W/.test(code); },
		checkMsg : "Solve this one without using some or every.",
		runBefore : "Array.prototype.some = Array.prototype.every = undefined;"
	}
];
