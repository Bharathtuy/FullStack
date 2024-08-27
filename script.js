function submitSelection() {
    const userOption = document.getElementById('user-option');
    const adminOption = document.getElementById('admin-option');

    // Check if the user option is selected
    if (userOption.classList.contains('selected')) {
        window.location.href = 'login_user.html'; // Redirect to user login page
    }
    // Check if the admin option is selected
    else if (adminOption.classList.contains('selected')) {
        window.location.href = 'login_admin.html'; // Redirect to admin login page
    } 
    // If no option is selected, show a message
    else {
        document.getElementById('result').textContent = 'Please select an option.';
    }
}

// Add click event listeners to the options
document.getElementById('user-option').addEventListener('click', function() {
    // Add 'selected' class to user option and remove from admin option
    document.getElementById('user-option').classList.add('selected');
    document.getElementById('admin-option').classList.remove('selected');
});

document.getElementById('admin-option').addEventListener('click', function() {
    // Add 'selected' class to admin option and remove from user option
    document.getElementById('admin-option').classList.add('selected');
    document.getElementById('user-option').classList.remove('selected');
});
