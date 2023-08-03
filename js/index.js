function login(event) {
  event.preventDefault();
  
  // Get the input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // API endpoint
  const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";
  
  // Request body
  const requestBody = {
    login_id: username,
    password: password
  };
  
  // Fetch POST request to the API
  fetch(apiUrl,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "*",
      'Access-Control-Allow-Credentials' : true
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    window.location.href = "./customerlist.html"
  })
  .catch(error => {
    console.error("Error:", error);
  });
}