document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("logoutModal");
    var openModalButtons = document.querySelectorAll("#openModal, #openModal2");
    var closeModal = document.getElementsByClassName("close")[0];
    var confirmLogout = document.getElementById("confirmLogout");
    var cancelLogout = document.getElementById("cancelLogout");

    openModalButtons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "block";
        };
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    cancelLogout.onclick = function() {
        window.location.href = "../../views/home/home.html";
    };

    confirmLogout.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});