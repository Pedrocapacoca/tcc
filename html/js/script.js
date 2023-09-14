// Função para pesquisar jogos
function searchGames() {
    const query = document.getElementById("search-input").value;
    alert(`Pesquisando por: ${query}`);
}
// Função para alternar visibilidade do menu
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
