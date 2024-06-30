document.addEventListener('DOMContentLoaded', function() {
    // Attend que le DOM soit chargé avant d'appliquer les classes
    const skewedContainers = document.querySelectorAll('.skewed-container');

    
    // Ajoute la classe pour déclencher l'animation pour chaque bloc
    skewedContainers.forEach((container, index) => {
        setTimeout(() => {
            container.classList.add('appear');
        }, index * 500); // Décalage d'animation pour chaque bloc
    });

        const skewedContainers2 = document.querySelectorAll('.skewed-container2');
        // Ajoute la classe pour déclencher l'animation pour chaque bloc
        skewedContainers2.forEach((container, index) => {
            setTimeout(() => {
                container.classList.add('appear');
            }, index * 500); // Décalage d'animation pour chaque bloc
        });

        const skewedContainers3 = document.querySelectorAll('.skewed-container3');
        // Ajoute la classe pour déclencher l'animation pour chaque bloc
        skewedContainers3.forEach((container, index) => {
            setTimeout(() => {
                container.classList.add('appear');
            }, index * 500); // Décalage d'animation pour chaque bloc
        });

        const skewedContainers4 = document.querySelectorAll('.skewed-container4');
        // Ajoute la classe pour déclencher l'animation pour chaque bloc
        skewedContainers4.forEach((container, index) => {
            setTimeout(() => {
                container.classList.add('appear');
            }, index * 500); // Décalage d'animation pour chaque bloc
        });

        const skewedContainers5 = document.querySelectorAll('.skewed-container5');
        // Ajoute la classe pour déclencher l'animation pour chaque bloc
        skewedContainers5.forEach((container, index) => {
            setTimeout(() => {
                container.classList.add('appear');
            }, index * 500); // Décalage d'animation pour chaque bloc
        });

        const skewedContainers6 = document.querySelectorAll('.skewed-container6');
        // Ajoute la classe pour déclencher l'animation pour chaque bloc
        skewedContainers6.forEach((container, index) => {
            setTimeout(() => {
                container.classList.add('appear');
            }, index * 500); // Décalage d'animation pour chaque bloc
        });
});