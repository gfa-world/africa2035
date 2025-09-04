// Progress Circle Configuration
const PROGRESS_PERCENTAGE = 25; // Change this value to update the progress

function createProgressCircle(canvasId, textId, percentage) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const text = document.getElementById(textId);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 120;
    const strokeWidth = 20;
    
    // Background circle (light gray)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
    
    // Progress circle (green)
    const startAngle = -Math.PI / 2; // Start from top
    const endAngle = startAngle + (2 * Math.PI * percentage / 100);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = '#00B894'; // Secondary color
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    // Update text with generated HTML
    text.innerHTML = Math.round(percentage) + '%';
}

// Initialize progress circle when page loads
document.addEventListener('DOMContentLoaded', function() {
    createProgressCircle('progressCanvas', 'progressText', PROGRESS_PERCENTAGE);
});

// Function to update progress (can be called from outside)
function updateProgress(percentage) {
    createProgressCircle('progressCanvas', 'progressText', percentage);
}
