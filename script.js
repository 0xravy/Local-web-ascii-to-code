let options = {
	firstAndLast: ['"', firstAndLast.checked],
	colon: [',', colon.checked],
	setLetterBeffore: [
		['\\', true],
		['"', true],
		["'", true],
		['`', true]
	]
};

function convert() {
	options = {
		firstAndLast: ['"', firstAndLast.checked],
		colon: [',', colon.checked],
		setLetterBeffore: [
			['\\', backSlash.checked],
			['"', doubleQuotation.checked],
			["'", singleQuotation.checked],
			['`', backtick.checked]
		]
	};

	let textString = input.value;
	let textArray = textString.split('\n');
	textString = '';

	for (let line of textArray) {
		if (line == '') continue;
		for (let letter of options.setLetterBeffore) {
			if (letter[1]) line = line.replaceAll(letter[0], `\\${letter[0]}`);
		}

		// first letter
		if (options.firstAndLast[1]) textString += `${options.firstAndLast[0]}`;
		textString += line;
		// last letter
		if (options.firstAndLast[1]) textString += `${options.firstAndLast[0]}`;
		// colon
		if (options.colon[1]) textString += options.colon[0];

		textString += '\n';
	}

	output.value = textString;
	console.log(textArray);
}

function copy() {
	let copyText = output;
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
}
