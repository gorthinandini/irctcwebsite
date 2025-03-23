document.addEventListener("DOMContentLoaded", function () {
    // Auto-update date input to today's date
    document.getElementById("travelDate").valueAsDate = new Date();

    // Handle form submission
    document.getElementById("trainSearchForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        let fromStation = document.getElementById("fromStation").value;
        let toStation = document.getElementById("toStation").value;
        let travelDate = document.getElementById("travelDate").value;

        if (fromStation === "" || toStation === "") {
            alert("Please enter both stations.");
            return;
        }

        // Simulating API Call (Replace with actual API)
        alert(`Searching trains from ${fromStation} to ${toStation} on ${travelDate}...`);
    });
});
