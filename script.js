document.addEventListener('DOMContentLoaded', () => {
    const videoDesktop = document.getElementById('video-desktop');
    const videoMobile = document.getElementById('video-mobile');
    const muteToggleButton = document.getElementById('mute-toggle');
    const muteIcon = muteToggleButton.querySelector('i');

    // Ensure videos start muted
    videoDesktop.muted = true;
    videoMobile.muted = true;

    // Function to toggle mute/unmute
    function toggleMute() {
        const isMuted = videoDesktop.muted; // Check the current mute state

        // Toggle the mute state for both videos
        videoDesktop.muted = !isMuted;
        videoMobile.muted = !isMuted;

        // Update the icon
        muteIcon.className = isMuted ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    }

    // Add event listener to the button
    muteToggleButton.addEventListener('click', toggleMute);
});
