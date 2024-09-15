var modal = document.getElementById("logoutModal");
var logoutBtn = document.querySelector('.sidebar ul li.logout a');
var closeBtn = document.getElementsByClassName("close")[0];
var confirmLogout = document.getElementById("confirmLogout");
var cancelLogout = document.getElementById("cancelLogout");
logoutBtn.onclick = function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
}


closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


confirmLogout.onclick = function() {
    alert("Cierre de sesión confirmado.");
    modal.style.display = "none";
}
