const form = document.getElementById("form");

const nameInput = document.getElementById("name");

const addressInput = document.getElementById("address");

const contactInput = document.getElementById("contact");

const emailInput = document.getElementById("email");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  const address = addressInput.value.trim();

  const contact = contactInput.value.trim();

  const email = emailInput.value.trim();

  // Name Validation

  if (name === "") {
    alert("Name is required.");

    nameInput.focus();

    return;
  }

  // Address Validation

  if (address === "") {
    alert("Address is required.");

    addressInput.focus();

    return;
  }

  // Contact Validation

  if (contact === "") {
    alert("Contact number is required.");

    contactInput.focus();

    return;
  }

  if (!/^\d+$/.test(contact)) {
    alert("Contact number should contain digits only.");

    contactInput.focus();

    return;
  }

  if (contact.length !== 10) {
    alert("Contact number must be exactly 10 digits.");

    contactInput.focus();

    return;
  }

  // Email Validation

  if (email === "") {
    alert("Email is required.");

    emailInput.focus();

    return;
  }

  // @ should appear only once

  const atCount = email.split("@").length - 1;

  if (atCount !== 1) {
    alert("Email should contain only one @ symbol.");

    emailInput.focus();

    return;
  }

  // @ cannot be first or last

  if (email.startsWith("@") || email.endsWith("@")) {
    alert("@ cannot be at the beginning or end.");

    emailInput.focus();

    return;
  }

  // Must contain at least one dot

  if (!email.includes(".")) {
    alert("Email must contain at least one dot (.)");

    emailInput.focus();

    return;
  }

  // Regular Expression

  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailPattern.test(email)) {
    alert("Invalid Email Address.");

    emailInput.focus();

    return;
  }

  alert("Form Submitted Successfully!");

  form.reset();
});
