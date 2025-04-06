const countries = ['United States', 'India', 'France', 'Germany', 'Japan', 'Australia'];
let currentCountryIndex = 0;

function changeCountryName() {
    const countryElement = document.querySelector('.country-name');
    countryElement.textContent = `Visit ${countries[currentCountryIndex]}`;
    
    // Update index to cycle through countries
    currentCountryIndex = (currentCountryIndex + 1) % countries.length;
}

// Change the country every 0.2 seconds
setInterval(changeCountryName, 200);

document.getElementById("book-now").addEventListener("click", function () {
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;

    if (!startDate || !endDate || description.length < 50) {
        alert("Please fill in all fields correctly.");
        return;
    }
    if (new Date(startDate) >= new Date(endDate)) {
        alert("End Date should be after Start Date.");
        return;
    }
    alert("Booking Successful!");



});


