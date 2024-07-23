document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');

    const clickableArea = document.getElementById('clickable-area-1');
    const videoElement = document.getElementById('video');

    // Function to set the appropriate video source
    function setVideoSource() {
        if (window.innerWidth <= 768) { // Adjust the width threshold as needed
            videoElement.src = 'assets/video-mobile.mp4';
        } else {
            videoElement.src = 'assets/video-desktop.mp4';
        }
    }

    // Set the video source on page load
    setVideoSource();

    // Adjust the video source if the window is resized
    window.addEventListener('resize', setVideoSource);

    // Check if the clickable area exists before adding event listeners
    if (clickableArea) {
        // Add event listener for clickable area
        clickableArea.addEventListener('click', () => {
            window.location.href = 'https://www.finde50.com'; // Replace with your desired URL
        });

        // Function to toggle visibility
        function toggleVisibility() {
            clickableArea.classList.add('visible');

            // Hide the clickable area after it has been visible for a certain time
            setTimeout(() => {
                clickableArea.classList.remove('visible');
            }, 5000); // Change 5000 to the number of milliseconds you want the clickable area to remain visible
        }

        // Show the clickable area initially after a delay
        setTimeout(() => {
            toggleVisibility(); // Start the visibility toggle loop

            // Set up the loop to repeat the visibility toggle
            setInterval(() => {
                toggleVisibility();
            }, 8000); // Change 8000 to the total duration of the visible and hidden states combined
        }, 3000); // Change 3000 to the initial delay before the first appearance
    } else {
        console.error('Clickable area element not found');
    }
});
