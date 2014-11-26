// Get references to guest booking form elements

var guestTitle			= document.getElementById('guest-title');
var guestTitleError		= document.getElementById('guest-title-error');
var guestFirstName		= document.getElementById('guest-first-name');
var guestFirstNameError	= document.getElementById('guest-fname-error');
var guestLastName		= document.getElementById('guest-last-name');
var guestLastNameError	= document.getElementById('guest-lname-error');
var guestPhone			= document.getElementById('guest-telephone');
var guestPhoneError 	= document.getElementById('guest-phone-error');
var guestEmailAddress	= document.getElementById('guest-email-address');
var guestEmailAddressError	= document.getElementById('guest-e-address-error');

var destination 		= document.getElementById('guest-destination-to');
var destinationError	= document.getElementById('guest-destination-error');
var travelDatesFixed 	= document.getElementById('guest-travel-dates_fixed');
var travelDatesFlexible = document.getElementById('guest-travel-dates-flexible');
var travelDatesError 	= document.getElementById('guest-travel-dates-error');
var arriveCalendar		= document.getElementById('guest-arrive');
var arriveCalendarError	= document.getElementById('guest-arrive-calendar-error');
var departCalendar		= document.getElementById('guest-depart');
var departCalendarError	= document.getElementById('guest-depart-calendar-error');
var room				= document.getElementById('guest-rooms');
var roomError			= document.getElementById('guest-room-error');
var adult				= document.getElementById('guest-adult');
var adultError			= document.getElementById('guest-adult-error');
var children 			= document.getElementById('guest-children');
var childrenError 		= document.getElementById('guest-children-error');
var roomType			= document.getElementById('guest-room-type');
var roomTypeError 		= document.getElementById('guest-room-type-error');
var specialRequests		= document.getElementById('special-requests');
var specialRequestsError= document.getElementById('special-requests-error');

var submitButton 		= document.getElementById('submit-button');




// Listen for clicks on the submit button
submitButton.onclick = function (  ) {


	var formIsValid=true;

	// Check to make sure the guestname is a correct length
	if( checkStringLengthValid( guestFirstName.value, 3, 20 ) ) {

		// Firstname is long enough, 
		// now check that it is using valid characters
		
		// Clear any error messages
		guestFirstNameError.innerHTML = '';

		// Define the First Name pattern and any delimiters
		var guestFirstNamePattern = /^[a-zA-Z'\-]{3,20}$/;

		// send the pattern and the string to a reusable function
		if ( !checkPatternMatch( guestFirstNamePattern, guestFirstName.value ) ) {

			// Display an error message
			guestFirstNameError.innerHTML = "Use a-z ' and - ";
			formIsValid=false;}
	
		} else {

		// First Name is either too short or too long
		// Display an error message
		guestFirstNameError.innerHTML = "Min 3 & max 20 characters";
		formIsValid = false;

		}  

		// Check to make sure the username is a correct length
			if( checkStringLengthValid( guestLastName.value, 3, 20 ) ) {

			// Last name is long enough, check that it is using valid characters
			
			// Clear any error messages
			guestLastNameError.innerHTML = '';

			// Define the First Name pattern and any delimiters
			var guestLastNamePattern = /^[a-zA-Z'\-]{3,20}$/;

			// send the pattern and the string to a reusable function
			if ( !checkPatternMatch( guestLastNamePattern, guestLastName.value ) ) {

				// Display an error message
				guestLastNameError.innerHTML = "Use a-z ' and - ";
				formIsValid = false;}
		
			} else {

			// First Name is either too short or too long
			// Display an error message
				guestLastNameError.innerHTML = "Min 3 & max 20 characters";
				formIsValid = false;

			}  

				if( checkStringLengthValid( guestEmailAddress.value, 2, 200 ) ) {

				// Firstname is long enough, 
				// now check that it is using valid characters
				
				// Clear any error messages
				guestEmailAddressError.innerHTML = '';

				// Define the First Name pattern and any delimiters
				var guestEmailAddressPattern = /^[a-zA-Z0-9._-]{2,20}@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.?[a-zA-Z0-9._-]*$/;

				// send the pattern and the string to a reusable function
				if ( !checkPatternMatch( guestEmailAddressPattern, guestEmailAddress.value ) ) {

					// Display an error message
					guestEmailAddressError.innerHTML = "Enter valid email";
					formIsValid = false;}
			
				} else {

				// Email is either too short or too long
				// Display an error message
				guestEmailAddressError.innerHTML = "Enter valid email";
				formIsValid = false;

				}  

 
					if ( destination.value =="0" ) {

						destinationError.innerHTML = "Select location";
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
		arriveCalendarError.innerHTML = 'Numbers required';
		formIsValid = false;
		} 

	} else {
		// name is either too short or too long. Display an error message
		arriveCalendarError.innerHTML = 'Date format dd/mm/yyyy';
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
			departCalendarError.innerHTML = 'Numbers required';
			formIsValid = false;
			} 

		} else {
			// name is either too short or too long. Display an error message
			departCalendarError.innerHTML = 'Date format dd/mm/yyyy';
			formIsValid = false;
		} if ( guestTitle.value=="0" ) {

					// if not selected enter an error message
						guestTitleError.innerHTML = "Select your title";
						formIsValid = false;
					} else {

						// if selected clear any error messages
							guestTitleError.innerHTML = '';
						}


	// Check to make sure that the phone number is a correct length
	if( checkStringLengthValid (guestPhone.value, 6, 20) )  { 

		// Phone number is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		guestPhoneError.innerHTML = '';

		// name Pattern
		var phonePattern = /^[0-9+ ]{6,20}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( phonePattern, guestPhone.value) ) {
			
			// Display an error message
		guestPhoneError.innerHTML = 'Not a valid phone no.';
		formIsValid = false;
		} 

	} else {
		// Phone no. is either too short or too long. Display and error message
		guestPhoneError.innerHTML = 'Enter a valid phone no.';
		formIsValid = false;
	}
	// If special requests are longer than 160 characters
	if( specialRequests.value.length > 160) {
		// Message is out of bounds
		specialRequestsError.innerHTML = 'Max 160 characters';
		formIsValid = false;
	} else {
		// Remove any error messages
		specialRequestsError.innerHTML = '';
	}


	// Is the form still valid?
	if( !formIsValid ) {
		// Stop the form from submitting
		return false;
	}
		
}