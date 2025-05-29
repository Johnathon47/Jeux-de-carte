const prompt = require("prompt-sync")();
function menu() {
    console.log("                               ----------------------------------");
    console.log(" ");
    console.log("                                 BIENVENU.E DANS LE JEU DE CARTE");
    console.log("                                                 ");
    console.log("                                                 ");
    console.log(" ");
    console.log("                               -----------------------------------");

        let pseudo = prompt("Saisissez votre pseudo :  ");
        console.log(`  \n    Bonjour ${pseudo}, voici la règle du jeu :\n    Tu as 3 carte au choix, l'eau bat le feu, le feu bat la plante, la plante bat l'eau.
    En cas d'égalité, vous avez le choix de continuer ou d'arrêter.`);
        console.log(`Maintenant que vous savez les règles du jeu, vous pouvez commencer la partie`);
}
exports.main = menu;

