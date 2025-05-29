function menu() {

    document.getElementById("show-rules").innerText = "<h3> Bienvenue ! <h3/>"
    // Utilise prompt natif du navigateur :
    let pseudo = document.getElementById("pseudo").value;

    document.getElementById("show-rules").innerText = `\n Bonjour ${pseudo}, voici la règle du jeu :\n
    Tu as 3 cartes au choix :
    - l'eau bat le feu
    - le feu bat la plante
    - la plante bat l'eau
    En cas d'égalité, vous avez le choix de continuer ou d'arrêter.
    
    Maintenant que vous connaissez les règles du jeu, vous pouvez commencer la partie.`;

}

