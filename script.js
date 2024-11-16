// Function to update video source based on screen width
function updateVideoSource() {
    const video = document.getElementById('responsive-video');
    const currentTime = video.currentTime; // Save current playback position

    // Update video source
    if (window.innerWidth < 500) {
        video.src = 'https://caflemo-intro-video.s3.us-east-2.amazonaws.com/Video-Mobile.mp4';
    } else {
        video.src = 'https://caflemo-intro-video.s3.us-east-2.amazonaws.com/Video-Desktop.mp4';
    }

    // Restore playback position
    video.currentTime = currentTime;
    video.play();
}

// Set video source on page load
updateVideoSource();

// Update video source on window resize
window.addEventListener('resize', updateVideoSource);

// Mute/Unmute button functionality
const muteToggleButton = document.getElementById('mute-toggle');
const video = document.getElementById('responsive-video');

muteToggleButton.addEventListener('click', function() {
    video.muted = !video.muted;
    // Change button icon based on mute state
    const icon = video.muted ? 'fa-volume-mute' : 'fa-volume-up';
    muteToggleButton.innerHTML = `<i class="fas ${icon}"></i>`;
});

// Intersection Observer to keep the video playing when out of the viewport
const keepPlaying = (entries) => {
    entries.forEach((entry) => {
        // If the video is not in the viewport and is paused, keep it playing
        if (!entry.isIntersecting && video.paused) {
            video.play();
        }
    });
};

// Create an observer for the video element
const observer = new IntersectionObserver(keepPlaying, {
    threshold: 0.1 // Trigger when 10% of the video is visible
});

observer.observe(video);

// Auto-play video when the page is loaded
if (video.paused) {
    video.play().catch((error) => {
        console.warn("Auto-play was prevented:", error);
    });
}