// Chart.js data for attendance graph
const attendanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
        label: 'Attendance Percentage',
        data: [80, 90, 75, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Chart.js configuration
const config = {
    type: 'line',
    data: attendanceData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
};

// Initialize attendance chart when attendance button is clicked
document.getElementById('attendanceBtn').addEventListener('click', function () {
    const attendanceSection = document.getElementById('attendance-section');
    
    // Show the attendance section
    attendanceSection.style.display = 'block';

    // Create the chart only when the section is displayed
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(ctx, config);
});

// Simple login script
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "student" && password === "password") {
        // Redirect to dashboard page on successful login
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect username or password!");
    }
}
