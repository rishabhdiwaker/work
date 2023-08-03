// Access token received from the authentication API call
const accessToken = 'dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=';

const apiUrl = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list';


const submitButton = document.querySelector('#submit');

submitButton.addEventListener("click" ,function() {
  window.location.href = 'customerdetails.html';
});

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#customer-table tbody');
    data.forEach(customer => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${customer.first_name}</td>
        <td>${customer.last_name}</td>
        <td>${customer.street}</td>
        <td>${customer.address}</td>
        <td>${customer.city}</td>
        <td>${customer.state}</td>
        <td>${customer.email}</td>
        <td>${customer.phone}</td>
        <td>
          <button class="delete-icon" onclick="deleteCustomer(this)">
            <i class="fa fa-trash"></i>
          </button>
          <button class="edit-icon" onclick="editCustomer(this)">
            <i class="fa fa-pencil"></i>
          </button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });


function deleteCustomer(button) {
  const row = button.parentElement.parentElement;
  const dialog = confirm('Are you sure you want to delete this customer?');
  if (dialog) {
    row.remove();
  }
}



function editCustomer(button) {
  const row = button.parentElement.parentElement;
  const dialog = document.createElement('dialog');
  dialog.innerHTML = `
    <h2>Edit Customer</h2>
    <input type="text" name="first_name" value="${row.querySelector('td:nth-child(1)').innerHTML}">
    <input type="text" name="last_name" value="${row.querySelector('td:nth-child(2)').innerHTML}">
    <input type="text" name="street" value="${row.querySelector('td:nth-child(3)').innerHTML}">
    <input type="text" name="address" value="${row.querySelector('td:nth-child(4)').innerHTML}">
    <input type="text" name="city" value="${row.querySelector('td:nth-child(5)').innerHTML}">
    <input type="text" name="state" value="${row.querySelector('td:nth-child(6)').innerHTML}">
    <input type="text" name="email" value="${row.querySelector('td:nth-child(7)').innerHTML}">
    <input type="text" name="phone" value="${row.querySelector('td:nth-child(8)').innerHTML}">
    <button type="submit">Save</button>
  `;
  dialog.classList.add('edit-dialog');
  dialog.show();

  dialog.querySelector('button').addEventListener('click', function() {
    const firstName = dialog.querySelector('input[name="first_name"]').value;
    const lastName = dialog.querySelector('input[name="last_name"]').value;
    const street = dialog.querySelector('input[name="street"]').value;
    const address = dialog.querySelector('input[name="address"]').value;
    const city = dialog.querySelector('input[name="city"]').value;
    const state = dialog.querySelector('input[name="state"]').value;
    const email = dialog.querySelector('input[name="email"]').value;
    const phone = dialog.querySelector('input[name="phone"]').value;
    location.reload();
  });
}