// Function to update video source based on screen width
function updateVideoSource() {
    const video = document.getElementById('responsive-video');
    const currentTime = video.currentTime; // Save current playback position

    // Update video source
    if (window.innerWidth < 500) {
        video.src = 'movies/Video-Mobile.mp4';
    } else {
        video.src = 'movies/Video-Desktop.mp4';
    }

    // Restore playback position
    video.currentTime = currentTime;
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
