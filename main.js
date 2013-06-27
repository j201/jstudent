
//;(function() {
	var id = document.getElementById.bind(document);
	var codeInput = CodeMirror.fromTextArea(id("code-input"), {
		value : "CodeMirror!",
		mode : "javascript",
		lineNumbers : true
	});
	codeInput.setValue('// Put your code here\n\n');
	var codeTest = CodeMirror.fromTextArea(id("code-test"), {
		mode : "javascript",
		readOnly : true,
		height : "dynamic"
	});
	codeTest.setValue('this.should = "be read-only";');
//})();
