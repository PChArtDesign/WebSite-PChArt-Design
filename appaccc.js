document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez les conteneurs à animer
    var containers = document.querySelectorAll('.animated-container');

    // Ajoutez une classe pour chaque conteneur avec un délai différent
    containers.forEach(function(container, index) {
        container.style.animationDelay = index * 5 + 's'; // Délai de 0.5 seconde entre chaque conteneur
        container.classList.add('animate'); // Ajoutez la classe pour déclencher l'animation
    });

    });



