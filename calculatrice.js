console.log("Edouard is Here !");

/* Fonctions log */

function log() { console.log('Ce bouton est bien log'); }
function chiffrelog(chiffre) { console.log(chiffre); }
function operationlog(operation) { console.log(operation); }
function actionlog(action) { console.log(action); }



/* Calculatrice */

function ecriture(touche) {
    document.getElementsByClassName("calcul")[0].value += touche; // On ajoute l'element tape a ce qui a ete ecrit precedemment  
}

function supprimer() {
    valeur = document.getElementsByClassName("calcul")[0].value; // On recupere ce qui a ete tape precedemment
    document.getElementsByClassName("calcul")[0].value = valeur.slice(0, valeur.length - 1); // On retire le dernier element
}

function reset() {
    document.getElementsByClassName("calcul")[0].value = " "; // On vide ce qui a ete tape precedemment
}

function calculer() {
    calcul = document.getElementsByClassName("calcul")[0].value;
    if (calcul == 0) return; // On ne calcule pas si l'utilisateur n'a rien saisie
    calculDetail = calcul;
    resultat = eval(calcul);
    document.getElementsByClassName("previous")[0].innerHTML = calculDetail + " = " + resultat; // On affiche le calcul dans l'historique
    document.getElementsByClassName("calcul")[0].value = resultat; // On reprend le resultat precedant pour le prochain calcul
}