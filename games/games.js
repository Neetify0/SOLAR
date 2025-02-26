document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const gameGrid = document.getElementById("gameGrid");

    fetch("games.json")
        .then(response => response.json())
        .then(games => {
            games.forEach(game => {
                const gameCard = document.createElement("div");
                gameCard.classList.add("game-card");
                gameCard.innerHTML = `
                    <img src="${game.image}" alt="${game.title}">
                    <h3>${game.title}</h3>
                `;
                gameCard.addEventListener("click", () => {
                    window.location.href = `/iframe?game=${encodeURIComponent(game.file)}`;
                });
                gameGrid.appendChild(gameCard);
            });

            searchInput.addEventListener("input", function () {
                let filter = this.value.toLowerCase();
                document.querySelectorAll(".game-card").forEach(gameCard => {
                    let gameTitle = gameCard.querySelector("h3").textContent.toLowerCase();
                    gameCard.style.display = gameTitle.includes(filter) ? "block" : "none";
                });
            });
        })
        .catch(error => console.error("Error loading games:", error));
});