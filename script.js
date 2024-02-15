// Get reference to the toast box element
let toastBox = document.getElementById('toastBox');

// Define different messages for success, error, and invalid input
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-regular fa-circle-xmark"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

// Function to show a toast message
function showToast(msg) {
    // Create a new div element for the toast
    let toast = document.createElement('div');
    toast.classList.add('toast'); // Add the 'toast' class

    // Set the inner HTML of the toast element to the provided message
    toast.innerHTML = msg;

    // Append the toast to the toast box
    toastBox.appendChild(toast);

    // Check if the message contains 'error'
    if (msg.includes('error')) {
        toast.classList.add('error'); // Add the 'error' class
    }
    
        // Check if the message contains 'Invalid'
        if (msg.includes('Invalid')) {
            toast.classList.add('invalid'); // Add the 'invalid' class
        }

        // Remove the toast after 6 seconds (6000 milliseconds)
        setTimeout(() => {
            toast.remove();
        }, 6000);
}
