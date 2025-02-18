// Get modal elements
const modal = document.getElementById("enrollModal");
const closeBtn = document.querySelector(".close");
const enrollBtns = document.querySelectorAll(".enroll-btn");
const courseNameElement = document.getElementById("courseName");
const enrollForm = document.getElementById("enrollForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const progressList = document.getElementById("progress-list");

// Open modal on enroll button click
enrollBtns.forEach(button => {
    button.addEventListener("click", function() {
        const course = this.getAttribute("data-course");
        courseNameElement.textContent = course;
        modal.style.display = "block";
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
enrollForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = courseNameElement.textContent;

    confirmationMessage.textContent = `Thank you, ${name}! You have successfully enrolled in ${course}.`;
    confirmationMessage.style.display = "block";

    // Add to progress tracker
    const li = document.createElement("li");
    li.textContent = `${course} - In Progress`;
    progressList.appendChild(li);

    // Clear input fields after confirmation
    enrollForm.reset();

    // Close modal after a delay
    setTimeout(() => {
        modal.style.display = "none";
        confirmationMessage.style.display = "none";
    }, 3000);
});
