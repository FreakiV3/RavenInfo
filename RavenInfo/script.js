document.addEventListener("DOMContentLoaded", function() {
    // Liste des noms de captures d'écran
    const screenImages = ["screen1.png", "screen2.png", "screen3.png", "screen4.png"];

    // Éléments HTML
    const backgroundMusic = document.getElementById("background-music");
    const backgroundVideo = document.getElementById("background-video");
    const randomScreensContainer = document.getElementById("random-screens");

    // Lecture automatique de la musique
    document.addEventListener('click', function() {
        backgroundMusic.play();
    });

    // Sélection aléatoire d'une image de fond
    const backgroundImageIndex = Math.floor(Math.random() * screenImages.length);
    document.body.style.backgroundImage = `url('screen/${screenImages[backgroundImageIndex]}')`;

    // Affichage aléatoire des captures d'écran
    shuffleArray(screenImages); // Mélange le tableau des captures d'écran
    for (const imageName of screenImages) {
        const img = document.createElement("img");
        img.src = `screen/${imageName}`;
        img.alt = "Capture d'écran";
        randomScreensContainer.appendChild(img);
    }
});

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
