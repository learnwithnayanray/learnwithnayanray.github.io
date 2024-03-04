document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const packageName = this.dataset.package;
            const packagePrice = parseFloat(this.value);
            const additionalOptions = document.querySelectorAll(`input[type="checkbox"]:checked`);
            let totalPrice = packagePrice;

            additionalOptions.forEach(option => {
                totalPrice += parseFloat(option.value);
            });

            const invoiceDetails = `
                <h3>${packageName}</h3>
                <p>Package Price: <strong>$${packagePrice.toFixed(2)}</strong></p>
                <p>Additional Options:</p>
                <ul>
                    ${additionalOptions.length > 0 ? Array.from(additionalOptions).map(option => `<li>${option.nextSibling.textContent}</li>`).join("") : "<li>No additional options selected</li>"}
                </ul>
                <p>Total Price: <strong>$${totalPrice.toFixed(2)}</strong></p>
            `;

            document.getElementById("invoice-details").innerHTML = invoiceDetails;
        });
    });
});
