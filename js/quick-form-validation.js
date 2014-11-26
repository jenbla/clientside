// Get references to form elements
var destination 		= document.getElementById('destination');
var destinationError	= document.getElementById('destination-error');
var room				= document.getElementById('room');
var roomError			= document.getElementById('rooms-error');
var adult				= document.getElementById('adult');
var adultError			= document.getElementById('adults-error');
var children 			= document.getElementById('children');
var childrenError 		= document.getElementById('children-error');
var roomType			= document.getElementById('roomType');
var roomTypeError 		= document.getElementById('roomType-error');
var travelDatesFixed 	= document.getElementById('travel-dates_fixed');
var travelDatesFlexible = document.getElementById('travel-dates-flexible');
var travelDatesError 	= document.getElementById('travelDates-error');
var arriveCalendar		= document.getElementById('arrive-calendar');
var arriveCalendarError	= document.getElementById('arriveDate-error');
var departCalendar		= document.getElementById('depart-calendar');
var departCalendarError	= document.getElementById('departDate-error');
var firstName			= document.getElementById('fname');
var firstNameError		= document.getElementById('firstName-error');
var lastName			= document.getElementById('lname');
var lastNameError		= document.getElementById('lastName-error');
var emailAddress		= document.getElementById('emailAddress');
var emailAddressError	= document.getElementById('email-error');
var submitButton 		= document.getElementById('submit-button');




// Listen for clicks on the submit button
submitButton.onclick = function () {

	var formIsValid=true;

	// Check to make sure the username is a correct length
	if( checkStringLengthValid( firstName.value, 3, 20 ) ) {

		// Firstname is long enough, 
		// now check that it is using valid characters
		
		// Clear any error messages
		firstNameError.innerHTML = '';

		// Define the First Name pattern and any delimiters
		var firstNamePattern = /^[a-zA-Z'\-]{3,20}$/;

		// send the pattern and the string to a reusable function
		if ( !checkPatternMatch( firstNamePattern, firstName.value ) ) {

			// Display an error message
			firstNameError.innerHTML = "Use a-z ' and - ";
			formIsValid=false;}
	
		} else {

		// First Name is either too short or too long
		// Display an error message
		firstNameError.innerHTML = "Min 3 & max 20 characters";
		formIsValid = false;

		}  

		// Check to make sure the username is a correct length
			if( checkStringLengthValid( lastName.value, 3, 20 ) ) {

			// Last name is long enough, check that it is using valid characters
			
			// Clear any error messages
			lastNameError.innerHTML = '';

			// Define the First Name pattern and any delimiters
			var lastNamePattern = /^[a-zA-Z'\-]{3,20}$/;

			// send the pattern and the string to a reusable function
			if ( !checkPatternMatch( lastNamePattern, lastName.value ) ) {

				// Display an error message
				lastNameError.innerHTML = "Use a-z ' and - ";
				formIsValid = false;}
		
			} else {

			// First Name is either too short or too long
			// Display an error message
				lastNameError.innerHTML = "Min 3 & max 20 characters";
				formIsValid = false;

			}  

				if( checkStringLengthValid( emailAddress.value, 2, 200 ) ) {

				// Firstname is long enough, 
				// now check that it is using valid characters
				
				// Clear any error messages
				emailAddressError.innerHTML = '';

				// Define the First Name pattern and any delimiters
				var emailAddressPattern = /^[a-zA-Z0-9._-]{2,20}@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.?[a-zA-Z0-9._-]*$/;

				// send the pattern and the string to a reusable function
				if ( !checkPatternMatch( emailAddressPattern, emailAddress.value ) ) {

					// Display an error message
					emailAddressError.innerHTML = "Enter valid email";
					formIsValid = false;}
			
				} else {

				// Email is either too short or too long
				// Display an error message
				emailAddressError.innerHTML = "Enter valid email";
				formIsValid = false;

				}  

 
					if ( destination.value =="0" ) {

						destinationError.innerHTML = "Location?";
						formIsValid = false;} 

						else {

							destinationError.innerHTML = '';
					}
				if ( room.value=="0" ) {

						roomError.innerHTML = "Select rooms";
						formIsValid = false;
					} else {

							roomError.innerHTML = '';
						}
				if ( adult.value=="0" ) {

						adultError.innerHTML = "Select adults";
						formIsValid = false;
					} else {

							adultError.innerHTML = '';
						}

				if ( children.value=="0" ) {

						childrenError.innerHTML = "Select children";
						formIsValid = false;
					} else {

							childrenError.innerHTML = '';
						}

				// check if a room type has been selected
				if ( roomType.value=="0" ) {

					// if not selected enter an error message
						roomTypeError.innerHTML = "Select room type";
						formIsValid = false;
					} else {

						// if selected clear any error messages
							roomTypeError.innerHTML = '';
						}
				// Check if a gender has been selected
				if( travelDatesFixed.checked || travelDatesFlexible.checked ) {
					// Remove error messages
					travelDatesError.innerHTML = '';
				} else {
					// Display error messages
					travelDatesError.innerHTML = 'Are dates moveable?';
					formIsValid = false;
				}
				
	// Check to make sure that the check in date is correct length
	if( checkStringLengthValid (arriveCalendar.value, 6, 10) )  { 

		
		// Clear any error messages
		arriveCalendarError.innerHTML = '';
		
		// date is long enough,  check that it is using valid characters.
		// name Pattern
		var arriveCalendarPattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( arriveCalendarPattern, arriveCalendar.value) ) { 

			// Display an error message
		arriveCalendarError.innerHTML = 'Format dd/mm/yyyy';
		formIsValid = false;
		} 

	} else {
		// name is either too short or too long. Display an error message
		arriveCalendarError.innerHTML = 'Format dd/mm/yyyy';
		formIsValid = false;
	}

	// Check to make sure that the check in date is correct length
		if( checkStringLengthValid (departCalendar.value, 6, 10) )  { 

			
			// Clear any error messages
			departCalendarError.innerHTML = '';
			
			// date is long enough,  check that it is using valid characters.
			// name Pattern
			var departCalendarPattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

			// Send the pattern and the string to a reusable function
			if( !checkPatternMatch( departCalendarPattern, departCalendar.value) ) { 

				// Display an error message
			departCalendarError.innerHTML = 'Format dd/mm/yyyy';
			formIsValid = false;
			} 

		} else {
			// name is either too short or too long. Display an error message
			departCalendarError.innerHTML = 'Format dd/mm/yyyy';
			formIsValid = false;
		}


	// Is the form still valid?
	if( !formIsValid ) {
		// Stop the form from submitting
		return false;
	}
		
}