const prompt = require("prompt-sync")();

let type_de_carte = ["eau", "feu", "plante"];

function jouer() {
    for (let i = 1; i <= 3; i++) {
        let choix_du_robot = type_de_carte[Math.floor(Math.random() * type_de_carte.length)];

        const mon_choix = prompt("Veuillez saisir le type de votre carte : ");

        if (type_de_carte.includes(mon_choix) && !mon_choix.includes(" ")) {

            console.log(`Tiens toi prêt, le robot a envoyé : ${choix_du_robot}`);

            if (i == 3 && mon_choix !== choix_du_robot) {
                if ((mon_choix === "eau" && choix_du_robot === "feu")

                    || (mon_choix === "feu" && choix_du_robot === "plante")

                    || (mon_choix === "plante" && choix_du_robot === "eau")
                ) {

                    console.log(`Bravo, vous avez remporté la partie. On dirait que la machine, vous demande une autographe tellement votre victoire est épique.`);
                    break;
                }
                else if ((choix_du_robot === "eau" && mon_choix === "feu")

                    || (choix_du_robot === "feu" && mon_choix === "plante")

                    || (choix_du_robot === "plante" && mon_choix === "eau")
                ) {
                    console.log(`La machine a gagné, prouvant que votre stratégie est plus faible qu'une connexion Wi-Fi dans un 
                        ascenseur. Peut-être qu'il est temps de passer en mode avion.`);
                    break;
                }
            }
        }
        else {
            console.log("Veuillez entrer qu'une seule carte ou une carte valide comme (feu,eau,plante).");
        }
        if (i == 3 && mon_choix === choix_du_robot) {

            console.log("Vous êtes à égalité.");

            const continue_ou_pas = prompt("Voulez-vous recommencer oui ou non? saisissez ici : ");
            if (continue_ou_pas == "oui") {
                jouer();
            }

            else if (continue_ou_pas === "non") {
                console.log("Merci d'avoir jouer");
                break;
            }
        }
    }
}
exports.play = jouer;