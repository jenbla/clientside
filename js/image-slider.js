// Find the Gallery elements and gallery items
var theGallery 		= document.getElementById('slider');
var galleryItems 	= theGallery.getElementsByTagName('div');

// Change the ID of gallery to image-slider
theGallery.id = 'image-slider';

// Loop through each gallery item and apply a left %
// This will make them sit side by side
for(var i=0; i<galleryItems.length; i++) { 

	// Apply % left to each item
	galleryItems[i].style.left = i * 100 + '%';

}

// Create a timer to trigger a function that moves each gallery item
var animationTimer = setInterval(moveGalleryItems, 20);

// Function to animate gallery items
function moveGalleryItems() {

	// Loop through each gallery item
	for(var i = 0; i < galleryItems.length; i++) {

		// Find out the current % applied to this gallery item
		var currentPercent = galleryItems[i].style.left;

		// Reduce the percentage by a small amount
		// Lower = slower, higher = faster
		var newPercentage = parseFloat(currentPercent) - 2;

		// Concatenate the percentage symbol
		newPercentage = newPercentage + '%';

		// Reapply the new percentage
		galleryItems[i].style.left = newPercentage;

		// If this item is now more than or equal to -100% off the slider
		if( parseFloat(newPercentage) <= -100  ) {

			// Put this item at the back
			var backPercentage = galleryItems.length * 100 - 100 + '%';

			// Apply the new percentage to this gallery item
			galleryItems[i].style.left = backPercentage;

			// Stop the slider
			clearInterval(animationTimer);

			// Wait for x amount of seconds before starting
			// the animation again
			var waitForABit = setTimeout(restartAnimationTimer, 3000);

		}



	}

}

// Function to restart the animation timer
function restartAnimationTimer() {

	animationTimer = setInterval(moveGalleryItems, 20);
	
}












