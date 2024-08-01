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


        const carouselInner = document.querySelector('.carousel-inner');
        const images = [
            'Images/Graphisme/LadyRetro.PNG', 'Images/Graphisme/OsteoFlor.PNG', 'Images/Graphisme/JMC.PNG', 'Images/Graphisme/OpenCheer.PNG', 'Images/Graphisme/DCBO.PNG',
            'Images/Graphisme/JustMarried.PNG', 'Images/Graphisme/2CZelles.PNG', 'Images/Graphisme/RCMulti.PNG', 'Images/Graphisme/nathy.png', 'Images/Graphisme/BAL.PNG'
        ];
        
        // Cloner les premières et dernières images pour un effet infini
    const totalItems = images.length;
    const itemsToShow = 5;

    // Ajouter les images au début et à la fin pour créer un effet infini
    const startClone = images.slice(-itemsToShow);
    const endClone = images.slice(0, itemsToShow);

    const allImages = [...startClone, ...images, ...endClone];

    allImages.forEach((imgSrc, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carousel-item');
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Image ${index + 1}`;
        itemDiv.appendChild(img);
        carouselInner.appendChild(itemDiv);
    });

    let currentIndex = itemsToShow; // Commence à la première image réelle
    const items = document.querySelectorAll('.carousel-item');

    // Initialiser la position sans transition
    carouselInner.style.transition = 'none';
    carouselInner.style.transform = `translateX(${-currentIndex * 20}%)`;
    
    // Ajouter un délai avant de réactiver la transition
    setTimeout(() => {
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
    }, 50);

    function showNextImage() {
        currentIndex++;
        updateCarousel();
        if (currentIndex === totalItems + itemsToShow) {
            setTimeout(() => {
                carouselInner.style.transition = 'none';
                currentIndex = itemsToShow;
                updateCarousel();
                setTimeout(() => {
                    carouselInner.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    }

    function updateCarousel() {
        const newTransformValue = -currentIndex * 20; // 20% corresponds to one image width
        carouselInner.style.transform = `translateX(${newTransformValue}%)`;
    }

    setInterval(showNextImage, 3000); // Change l'image toutes les 3 secondes

});

document.getElementById('reason').addEventListener('change', function () {
    var supportFields = document.getElementById('supportFields');
    var salesFields = document.getElementById('salesFields');
    var feedbackFields = document.getElementById('feedbackFields');
    
    // Masquer tous les champs dynamiques
    supportFields.classList.add('hidden');
    salesFields.classList.add('hidden');
    feedbackFields.classList.add('hidden');
    
    // Afficher les champs pertinents en fonction de la sélection
    switch (this.value) {
        case 'support':
            supportFields.classList.remove('hidden');
            break;
        case 'sales':
            salesFields.classList.remove('hidden');
            break;
        case 'feedback':
            feedbackFields.classList.remove('hidden');
            break;
    }
            });