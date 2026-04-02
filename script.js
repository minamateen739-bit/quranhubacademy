function selectOption(choice) {
  alert("Aapne select kiya: " + choice);
  // Modal ko hide karne ke liye
  document.getElementById("welcome-modal").style.display = "none";

  // Aap yahan user ko kisi khaas page par redirect bhi kar sakti hain
  // window.location.href = choice + ".html"; 
}







// Modal ko show karne ke liye
window.onload = function () {
  document.getElementById("welcome-modal").style.display = "block";
}


// Modal ko close karne ke liye
function closeModal() {
  document.getElementById("welcome-modal").style.display = "none";
}// Page load hote hi check karein
window.onload = function () {
  if (!localStorage.getItem('modalClosed')) {
    document.getElementById('welcomeModal').style.display = "flex";
  }
}

// Close function mein ye line add karein
function closeModal() {
  document.getElementById('welcomeModal').style.display = 'none';
  localStorage.setItem('modalClosed', 'true'); // User ki choice save ho gayi
}
