function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3; // Random size for the star
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
    star.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Random speed for the falling star
    document.body.appendChild(star);

    // Remove the star after the animation ends
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Create stars every 200 milliseconds
setInterval(createStar, 200);

// Timer functionality
let secondsSpent = 0;

// Function to update the timer display
function updateTimer() {
    secondsSpent++;
    document.getElementById('timeSpent').innerText = `Time Spent: ${secondsSpent} seconds`;
}

// Start the timer
setInterval(updateTimer, 1000);
