const menu = require("./carte");
const jouer = require("./jouer");

function jeu_de_carte () {
    menu.main();
}
jeu_de_carte();

function commencer () {
    jouer.play();
}
commencer();