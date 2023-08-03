// Access token received from the authentication API call
const accessToken = 'dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=';

// API endpoint for getting customer list
const apiUrl = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list';


const submitButton = document.querySelector('#submit');

submitButton.addEventListener("click" ,function() {
  window.location.href = 'customerdetails.html';
});

// Fetch GET request to the API
fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Process the response and populate the table
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
          <button class="delete-icon">
            <i class="fa fa-trash"></i>
          </button>
          <button class="edit-icon">
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
// Add the delete-icon and edit-icon classes to the buttons
let deleteButtons;


setTimeout(()=>{deleteButtons = document.querySelectorAll(".delete-icon");
  deleteButtons.map((btn)=>{
    console.log(btn)
  })
  console.log(deleteButtons)
},3000)


const editButtons = document.querySelectorAll('.edit-icon');
editButtons.forEach(button => {
  button.classList.add('edit-icon');
});
