document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log('Error playing music:', error);
        });
    });
});