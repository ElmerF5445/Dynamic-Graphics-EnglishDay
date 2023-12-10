document.addEventListener('DOMContentLoaded', function() {
    audioElement = document.getElementById("audioBuzzer");
    document.addEventListener('keypress', (event) => {
        if(event.key === 'Enter'){
            audioElement.play();
        }
    })
});

