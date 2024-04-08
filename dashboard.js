let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];

let tbody = document.querySelector('#emailTable tbody');

subscriptions.forEach(email => {
    let row = document.createElement('tr'); 
    let cell = document.createElement('td'); 
    cell.textContent = email; 
    row.appendChild(cell); 
    tbody.appendChild(row); 
});

document.getElementById("enableEditBtn").addEventListener("click", function() {
    localStorage.setItem("editEnabled", true);
    alert("CeylonWildlife: Successfully enabled site-wide editing.");
    showEditButton();
  });
  
  document.getElementById("disableEditBtn").addEventListener("click", function() {
    localStorage.removeItem("editEnabled");
    alert("CeylonWildlife: Successfully disabled site-wide editing.");
    hideEditButton();
  });
  
  function showEditButton() {
    var editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(function(btn) {
      btn.style.display = "block";
    });
  }
  
  function hideEditButton() {
    var editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(function(btn) {
      btn.style.display = "none";
    });
  }
  
