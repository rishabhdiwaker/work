const url = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp";
const accessToken = 'dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=';
const method = "POST";
const headers = {
    'Authorization': `Bearer ${accessToken}`
};
const body = JSON.stringify({
  "first_name": document.getElementById("first_name").value,
  "last_name": document.getElementById("last_name").value,
  "street": document.getElementById("street").value,
  "address": document.getElementById("address").value,
  "city": document.getElementById("city").value,
  "state": document.getElementById("state").value,
  "email": document.getElementById("email").value,
  "phone": document.getElementById("phone").value,
});

const createCustomer = async () => {
  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: body,
  });

  if (response.status === 201) {
    window.location.href = "customerlist.html";
  } else {
    alert("Error creating customer.");
  }
};

document.getElementById("submit").addEventListener("click", createCustomer);