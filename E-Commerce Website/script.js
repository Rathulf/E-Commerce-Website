function showPCParts() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.display = "block";
    });
}
function showNothing() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.display = "none";
    });
}
window.onload = function() {
    showNothing();
}