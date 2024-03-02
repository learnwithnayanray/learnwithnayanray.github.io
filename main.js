 // JavaScript counter function
    function startCounter() {
        // Set your target count
        const targetCount = 100; // You can change this to your desired count

        // Set the initial count
        let currentCount = 50; // Start from your initial count

        // Set the interval for updating the count
        const interval = setInterval(() => {
            // Update the count
            document.getElementById('totalProjectsCount').textContent = currentCount;

            // Check if the target count is reached
            if (currentCount === targetCount) {
                clearInterval(interval); // Stop the interval
            } else {
                currentCount++; // Increment the count
            }
        }, 50); // Adjust the interval time as needed
    }

    // Call the counter function when the page loads
    window.onload = startCounter;
    // main.js

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Update the year in the footer
document.getElementById('currentYear').textContent = getCurrentYear();
