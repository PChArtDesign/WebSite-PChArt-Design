document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez les conteneurs à animer
    var containers = document.querySelectorAll('.animated-container');

    // Ajoutez une classe pour chaque conteneur avec un délai différent
    containers.forEach(function(container, index) {
        container.style.animationDelay = index * 1 + 's'; // Délai de 0.5 seconde entre chaque conteneur
        container.classList.add('animate'); // Ajoutez la classe pour déclencher l'animation
    });

        var dropdownButton = document.getElementById('dropdownButton');
        var dropdownMenu = document.getElementById('dropdownMenu');
    
        dropdownButton.addEventListener('click', function() {
            // Toggle l'affichage du menu
            if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
                dropdownMenu.style.display = 'block';
            } else {
                dropdownMenu.style.display = 'none';
            }
        });
    
        // Fermer le menu si l'utilisateur clique en dehors
        document.addEventListener('click', function(event) {
            if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    });



