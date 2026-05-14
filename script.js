// script.js - Main Dashboard Navigation

function openDayPage(dayNumber) {
    window.location.href = `day${dayNumber}/index.html`;
}

// Add click event listeners to all day boxes
document.addEventListener('DOMContentLoaded', function() {
    const dayBoxes = document.querySelectorAll('.day-box');
    
    dayBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const dayAttr = this.getAttribute('data-day');
            if (dayAttr) {
                openDayPage(dayAttr);
            }
        });
    });
    
    console.log('Dashboard ready. Click on any day to view exercises.');
});