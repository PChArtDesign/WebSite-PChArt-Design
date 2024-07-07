document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const thumbnailsContainers = document.querySelectorAll('.thumbnails-containerG');
    const displayedImage = document.getElementById('displayed-image');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            thumbnailsContainers.forEach(containerG => {
                if (containerG.id === 'thumbnails-' + category) {
                    containerG.style.display = containerG.style.display === 'flex' ? 'none' : 'flex';
                } else {
                    containerG.style.display = 'none';
                }
            });
        });
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const src = thumbnail.getAttribute('src');
            const alt = thumbnail.getAttribute('alt');
            const description = thumbnail.getAttribute('data-description');
            displayedImage.setAttribute('src', src);
            imageTitle.textContent = alt;
            imageDescription.innerHTML = description; // Utilisation de innerHTML pour inclure les balises <br>
        });
    });
});