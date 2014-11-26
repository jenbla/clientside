// function to check a pattern against a string
function checkPatternMatch (thePattern, stringToCheck) {
	// Test the pattern vs the string and trim the string
	return thePattern.test( stringToCheck.trim() );
}

// Function to check min / max characters to characters of a string
function checkStringLengthValid (theString, minChar, maxChar) {

	// Trim the string - not suitable for passwords
	theString = theString.trim();

	// Check the string vs min characters
	if( theString.length < minChar || theString.length> maxChar) {
		// not within character range
		return false;
	} else {
		// within range of required characters
		return true;
	}
}

