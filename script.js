// script.js for Shongamiti High School

document.addEventListener("DOMContentLoaded", () => { const form = document.getElementById("enrollmentForm");

form.addEventListener("submit", function (event) { event.preventDefault();

const studentName = form.elements[0].value.trim();
const gradeLevel = form.elements[1].value.trim();
const parentEmail = form.elements[2].value.trim();

if (!studentName || !gradeLevel || !parentEmail) {
  alert("Please fill out all fields.");
  return;
}

// For now, just show a confirmation
alert(`Enrollment submitted for ${studentName} in ${gradeLevel}. We'll contact you via ${parentEmail}.`);

// Clear form
form.reset();

}); });

