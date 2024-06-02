document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(function(error) {
                console.log('Error playing music:', error);
            });
            playButton.textContent = "";
        } else {
            audio.pause();
            playButton.textContent = "";
        }
    });
});