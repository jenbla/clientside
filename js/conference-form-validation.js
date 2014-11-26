// Get references to conference booking form elements


var conGuestTitle			= document.getElementById('con-guest-title');
var conGuestTitleError		= document.getElementById('con-guest-title-error');
var conGuestFirstName		= document.getElementById('con-guest-first-name');
var conGuestFirstNameError	= document.getElementById('con-guest-fname-error');
var conGuestLastName		= document.getElementById('con-guest-last-name');
var conGuestLastNameError	= document.getElementById('con-guest-lname-error');
var conGuestPhone			= document.getElementById('con-guest-telephone');
var conGuestPhoneError 		= document.getElementById('con-guest-phone-error');
var conGuestEmailAddress	= document.getElementById('con-guest-email-address');
var conGuestEmailAddressError= document.getElementById('con-guest-e-address-error');

var noAttending				= document.getElementById('no-attendees');
var noAttendingError 		= document.getElementById('no-attendees-error');

var conGuestAccom			= document.getElementById('con-guest-accom');
var conGuestAccomError		= document.getElementById('accom-req-error');

var conDestination 			= document.getElementById('con-guest-destination-to');
var conDestinationError		= document.getElementById('con-guest-destination-error');


var conArriveCalendar		= document.getElementById('con-guest-arrive');
var conArriveCalendarError	= document.getElementById('con-guest-arrive-calendar-error');
var conDepartCalendar		= document.getElementById('con-guest-depart');
var conDepartCalendarError	= document.getElementById('con-guest-depart-calendar-error');

var conRequests				= document.getElementById('con-requests');
var conRequestsError 		= document.getElementById('con-requests-error');

var submitButton2 			= document.getElementById('submit-button2');




// Listen for clicks on the conference submit button
submitButton2.onclick = function (  ) {

	var formIsValid=true;

	// Check to make sure the conference guestname is a correct length
	if( checkStringLengthValid( conGuestFirstName.value, 3, 20 ) ) {

		// now check that it is using valid characters
		
		// Clear any error messages
		conGuestFirstNameError.innerHTML = '';

		// Define the Guest First Name pattern and any delimiters
		var conGuestFirstNamePattern = /^[a-zA-Z'\-]{3,20}$/;

		// send the pattern and the string to a reusable function
		if ( !checkPatternMatch( conGuestFirstNamePattern, conGuestFirstName.value ) ) {

			// Display an error message
			conGuestFirstNameError.innerHTML = "Use a-z ' and - ";
			formIsValid=false;}
	
		} else {

		// Guest First Name is either too short or too long
		// Display an error message
		conGuestFirstNameError.innerHTML = "Min 3 & max 20 characters";
		formIsValid = false;

		}  

		// Check to make sure the conference guest last name is a correct length
			if( checkStringLengthValid( conGuestLastName.value, 3, 20 ) ) {

			// Last name is long enough, check that it is using valid characters
			
			// Clear any error messages
			conGuestLastNameError.innerHTML = '';

			// Define the Guest First Name pattern and any delimiters
			var conGuestLastNamePattern = /^[a-zA-Z'\-]{3,20}$/;

			// send the pattern and the string to a reusable function
			if ( !checkPatternMatch( conGuestLastNamePattern, conGuestLastName.value ) ) {

				// Display an error message
				conGuestLastNameError.innerHTML = "Use a-z ' and - ";
				formIsValid = false;}
		
			} else {

			// Guest First Name is either too short or too long
			// Display an error message
				conGuestLastNameError.innerHTML = "Min 3 & max 20 characters";
				formIsValid = false;

			}  

				if( checkStringLengthValid( conGuestEmailAddress.value, 2, 200 ) ) {

				// Conference email is long enough, 
				// now check that it is using valid characters
				
				// Clear any error messages
				conGuestEmailAddressError.innerHTML = '';

				// Define the email pattern and any delimiters
				var conGuestEmailAddressPattern = /^[a-zA-Z0-9._-]{2,20}@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.?[a-zA-Z0-9._-]*$/;

				// send the pattern and the string to a reusable function
				if ( !checkPatternMatch( conGuestEmailAddressPattern, conGuestEmailAddress.value ) ) {

					// Email is invalid - display an error message
					conGuestEmailAddressError.innerHTML = "Enter valid email";
					formIsValid = false;}
			
				} else {

				// Email is either too short or too long
				// Display an error message
				conGuestEmailAddressError.innerHTML = "Enter valid email";
				formIsValid = false;

				}  

 					// check conference venue has been selected
 					// if not selected, display an error message
					if ( conDestination.value =="0" ) {

						conDestinationError.innerHTML = "Select location";
						formIsValid = false;} 

						else {
							// error not required, location selected
							conDestinationError.innerHTML = '';
					}
				

	// Check to make sure that the check in date is correct length
	if( checkStringLengthValid (conArriveCalendar.value, 6, 10) )  { 

		
		// Clear any error messages
		conArriveCalendarError.innerHTML = '';
		
		// date is long enough,  check that it is using valid characters.
		// name Pattern
		var conArriveCalendarPattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( conArriveCalendarPattern, conArriveCalendar.value) ) { 

			// Display an error message
		conArriveCalendarError.innerHTML = 'Date format dd/mm/yyyy';
		formIsValid = false;
		} 

	} else {
		// name is either too short or too long. Display an error message
		conArriveCalendarError.innerHTML = 'Date format dd/mm/yyyy';
		formIsValid = false;
	}

	// Check to make sure that the conference depart date is correct length
		if( checkStringLengthValid (conDepartCalendar.value, 6, 10) )  { 

			
			// Clear any error messages
			conDepartCalendarError.innerHTML = '';
			
			// date is long enough, check that it is using valid characters.
			// date Pattern
			var conDepartCalendarPattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

			// Send the pattern and the string to a reusable function
			if( !checkPatternMatch( conDepartCalendarPattern, conDepartCalendar.value) ) { 

				// Display an error message
			conDepartCalendarError.innerHTML = 'Date format dd/mm/yyyy';
			formIsValid = false;
			} 

		} else {
			// date is either too short or too long. Display an error message
			conDepartCalendarError.innerHTML = 'Date format dd/mm/yyyy';
			formIsValid = false;
		}
		//check a title has been selected
		 if ( conGuestTitle.value=="0" ) {

					// if not selected enter an error message
						conGuestTitleError.innerHTML = "Select your title";
						formIsValid = false;
					} else {

						// if selected clear any error messages
							conGuestTitleError.innerHTML = '';
						}


	// Check to make sure that the conference guest's number is a correct length
	if( checkStringLengthValid (conGuestPhone.value, 6, 20) )  { 

		// Phone number is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		conGuestPhoneError.innerHTML = '';

		// name Pattern
		var conGuestPhonePattern = /^[0-9+ ]{6,20}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( conGuestPhonePattern, conGuestPhone.value) ) {
			
			// Display an error message
		conGuestPhoneError.innerHTML = 'Not a valid phone no.';
		formIsValid = false;
		} 

	} else {
		// Phone no. is either too short or too long. Display an error message
		conGuestPhoneError.innerHTML = 'Enter a valid phone no.';
		formIsValid = false;
	}
	// Check conference requests for length less than 160 characters
	if( conRequests.value.length > 160) {
		// Message is out of bounds
		conRequestsError.innerHTML = 'Max 160 characters';
		formIsValid = false;
	} else {
		// Remove any error messages
		conRequestsError.innerHTML = '';
	}

	// Check number of attendees
	if( isNaN(noAttending.value) ) {
		// Use has not typed in numbers display an error message
		
		noAttendingError.innerHTML = 'Please use numbers';
		formIsValid = false;

	} else {

		// Check total number of attendees
		if( noAttending.value > 2 ) {
			// Correct amount
			noAttendingError.innerHTML = '';
		} else {
			// Incorrect amount
			noAttendingError.innerHTML = 'Min 3 attending';
			formIsValid = false;
		}

	}

		//check if accommodation is required
		 if ( conGuestAccom.value=="0" ) {

					// if not selected enter an error message
						conGuestAccomError.innerHTML = "Select accommodation";
						formIsValid = false;
					} else {

						// if selected clear any error messages
							conGuestAccomError.innerHTML = '';
						}
	// Is the form still valid?
	if( !formIsValid ) {
		// Stop the form from submitting
		return false;
	}
		
}