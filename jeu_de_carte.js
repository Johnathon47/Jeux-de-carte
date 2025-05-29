// JavaScript code

// Déclaration des variables et des fonctions
let type_de_carte = ["eau", "feu", "plante"];

function jouer() {
    for (let i = 1; i <= 3; i++) {
        let choix_du_robot = type_de_carte[Math.floor(Math.random() * type_de_carte.length)];

        const mon_choix = prompt("Veuillez saisir le type de votre carte : ");

        if (type_de_carte.includes(mon_choix) && !mon_choix.includes(" ")) {
            let resultat = "";

            resultat += `Tiens toi prêt, le robot a envoyé : ${choix_du_robot}\n`;

            if (i == 3 && mon_choix !== choix_du_robot) {
                if ((mon_choix === "eau" && choix_du_robot === "feu") ||
                    (mon_choix === "feu" && choix_du_robot === "plante") ||
                    (mon_choix === "plante" && choix_du_robot === "eau")
                ) {
                    resultat += "Bravo, vous avez remporté la partie. On dirait que la machine, vous demande une autographe tellement votre victoire est épique.";
                } else if ((choix_du_robot === "eau" && mon_choix === "feu") ||
                    (choix_du_robot === "feu" && mon_choix === "plante") ||
                    (choix_du_robot === "plante" && mon_choix === "eau")
                ) {
                    resultat += "La machine a gagné, prouvant que votre stratégie est plus faible qu'une connexion Wi-Fi dans un ascenseur. Peut-être qu'il est temps de passer en mode avion.";
                }
            }
            afficherRésultat(resultat);
        } else {
            afficherRésultat("Veuillez entrer qu'une seule carte ou une carte valide comme (feu,eau,plante).");
        }
        if (i == 3 && mon_choix === choix_du_robot) {
            afficherRésultat("Vous êtes à égalité.");

            const continue_ou_pas = confirm("Voulez-vous recommencer oui ou non?");
            if (continue_ou_pas) {
                jouer();
            } else {
                afficherRésultat("Merci d'avoir joué");
            }
        }
    }
}

function afficherRésultat(resultat) {
    document.getElementById("game-results").innerText += resultat + "\n";
}
