// Define an array of image URLs for the slider
const images = [
    'assets/a.jpg',
    'assets/1.webp',
    'assets/d.jpg'
];

let currentIndex = 0;

// Function to change background image
function changeBackgroundImage() {
    document.getElementById('slider').style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Call the function to start the slider
changeBackgroundImage();
setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds

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

document.getElementById("downloadButton").addEventListener("click", function() {
    
    
    // var link = document.createElement("a");
    // window.open(cvUrl, '_blank');
    link.href = cvUrl;
    link.download = "cv.pdf"; // Set the downloaded filename
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const package = this.getAttribute('data-package');
            addToCart(package);
        });
    });

    function addToCart(package) {
        // Add your logic to add the selected package to the cart
        // For demonstration, let's assume we're storing the selected package in localStorage
        localStorage.setItem('selectedPackage', package);

        // Redirect to the checkout page
        window.location.href = 'checkout.html'; // Change 'checkout.html' to your actual checkout page URL
    }
});


    document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');
    let userRating = 0; // Initialize user's rating

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));

            // Toggle the state of stars based on user's click
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });

            userRating = rating; // Update user's rating
            console.log('User Rating:', userRating);
            // You can implement further logic here, such as submitting the rating to a server
        });
    });
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Your form submission logic goes here
    event.preventDefault(); // Prevent default form submission
    // You can use AJAX to submit form data or perform any other action
});



// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Update the year in the footer
document.getElementById('currentYear').textContent = getCurrentYear();
