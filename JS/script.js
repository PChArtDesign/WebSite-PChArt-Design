    function showImage(imageSrc, imageText) {
    // Récupérer les éléments de l'image et du texte
        const largeImage = document.getElementById('largeImage');
        const imageTextElement = document.getElementById('imageText');
        const imageDisplay = document.getElementById('imageDisplay');

        // Mettre à jour l'image et le texte
        largeImage.src = imageSrc;
        imageTextElement.textContent = imageText;

        // Afficher la section d'image si elle est cachée
        imageDisplay.style.display = 'block';
    }
