// Handle form submission for accommodation
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
    const requirements = document.getElementById('requirements').value;

    // Display a submission message
    const submissionMessage = document.getElementById('submission-message');
    submissionMessage.innerHTML = `<p>Thank you, ${name}! Your request for ${room} has been submitted.</p>`;
    
    // Clear the form
    document.getElementById('form').reset();
});

// Handle attendance check
document.getElementById('check-attendance').addEventListener('click', function() {
    const studentId = document.getElementById('student-id').value;

    // Simulate attendance check (in a real application, this would involve a server request)
    const attendanceResult = document.getElementById('attendance-result');
    
    // For demonstration, let's assume we have a simple check
    if (studentId) {
        attendanceResult.innerHTML = `<p>Attendance for Student ID ${studentId}: Present</p>`;
    } else {
        attendanceResult.innerHTML = `<p>Please enter a valid Student ID.</p>`;
    }
});