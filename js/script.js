document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');

    const clickableArea = document.getElementById('clickable-area-1');
    const videoElement = document.getElementById('video');
    const muteButton = document.getElementById('mute-toggle');
    const muteIcon = document.getElementById('mute-icon');
    const unmuteIcon = document.getElementById('unmute-icon');

    // Function to set the appropriate video source only if it's different from the current source
    function setVideoSource() {
        let currentSource = videoElement.currentSrc; // Get the current video source
        let newSource = window.innerWidth <= 768 ? 'assets/video-mobile.mp4' : 'assets/video-desktop.mp4';

        if (currentSource !== newSource) { // Only change source if it's different
            let currentTime = videoElement.currentTime; // Store the current playback time
            videoElement.src = newSource; // Change the video source
            videoElement.load(); // Reload video to apply new source
            videoElement.currentTime = currentTime; // Restore the video to the previous time
            videoElement.play(); // Continue playing the video
        }
    }

    // Set the video source on page load
    setVideoSource();

    // Adjust the video source if the window is resized
    window.addEventListener('resize', setVideoSource);

    // Function to handle mute/unmute toggle
    function toggleMute() {
        videoElement.muted = !videoElement.muted;
        if (videoElement.muted) {
            muteIcon.style.display = 'block';
            unmuteIcon.style.display = 'none';
        } else {
            muteIcon.style.display = 'none';
            unmuteIcon.style.display = 'block';
        }
    }

    // Set initial icon state based on initial mute state
    if (videoElement.muted) {
        muteIcon.style.display = 'block';
        unmuteIcon.style.display = 'none';
    } else {
        muteIcon.style.display = 'none';
        unmuteIcon.style.display = 'block';
    }

    // Add event listener for mute/unmute button
    muteButton.addEventListener('click', toggleMute);

    // Check if the clickable area exists before adding event listeners
    if (clickableArea) {
        // Add event listener for clickable area
        clickableArea.addEventListener('click', () => {
            window.location.href = 'https://www.example.com'; // Replace with your desired URL
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
