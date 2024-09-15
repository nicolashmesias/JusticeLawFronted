
const modal = document.getElementById("myModal");
const closeModal = document.getElementsByClassName("close")[0];
const events = document.querySelectorAll(".event");


events.forEach((event) => {
    event.addEventListener("click", () => {
        modal.style.display = "block";
    });
});


closeModal.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
