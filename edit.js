document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("editEnabled")) {
    document.getElementById("editBtn").style.display = "block";
  } else {
    document.getElementById("editBtn").style.display = "none";
  }
});

document.getElementById("editBtn").addEventListener("click", function() {
  document.getElementById("editPopup").style.display = "block";
});

document.getElementById("closeMenu").addEventListener("click", function() {
  document.getElementById("editPopup").style.display = "none";
});

document.getElementById("saveBtn").addEventListener("click", function() {
  var selectedContentId = document.getElementById("contentSelector").value;
  var newContent = document.getElementById("newContent").value;
  document.getElementById(selectedContentId).innerText = newContent;
  document.getElementById("editPopup").style.display = "none";
});
