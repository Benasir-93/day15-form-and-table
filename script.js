
  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sample-form');
  const tableBody = document.getElementById('table-body');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('male').checked ? 'Male' : 'Female';

    const foodChoices = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
      foodChoices.push(checkbox.nextElementSibling.textContent.trim());
    });

    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Create a new row in the table
    const newRow = tableBody.insertRow();
    const firstNameCell = newRow.insertCell();
    const lastNameCell = newRow.insertCell();
    const addressCell = newRow.insertCell();
    const pincodeCell = newRow.insertCell();
    const genderCell = newRow.insertCell();
    const foodCell = newRow.insertCell();
    const stateCell = newRow.insertCell();
    const countryCell = newRow.insertCell();

    // Add data to the cells
    firstNameCell.innerText = firstName;
    lastNameCell.innerText = lastName;
    addressCell.innerText = address;
    pincodeCell.innerText = pincode;
    genderCell.innerText = gender;
    foodCell.innerText = foodChoices.join(', ');
    stateCell.innerText = state;
    countryCell.innerText = country;

    // Clear the form fields after submission
    form.reset();
  });
});
