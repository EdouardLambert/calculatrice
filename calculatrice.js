console.log("Edouard is Here !");

class BaseCalculator {

    constructor() {
        // Do some stuff
    }

    /* Fonctions log */

    log() { console.log('Ce bouton est bien log'); }
    chiffrelog(chiffre) { console.log(chiffre); }
    operationlog(operation) { console.log(operation); }
    actionlog(action) { console.log(action); }



    /* Calculatrice */

    ecriture(touche) {
        document.getElementsByClassName("calcul")[0].value += touche; // On ajoute l'element tape a ce qui a ete ecrit precedemment  
    }

    supprimer() {
        let valeur = document.getElementsByClassName("calcul")[0].value; // On recupere ce qui a ete tape precedemment
        document.getElementsByClassName("calcul")[0].value = valeur.slice(0, valeur.length - 1); // On retire le dernier element
    }

    reset() {
        document.getElementsByClassName("calcul")[0].value = " "; // On vide ce qui a ete tape precedemment
    }

    calculer() {
        let calcul = document.getElementsByClassName("calcul")[0].value;
        if (calcul == 0) return; // On ne calcule pas si l'utilisateur n'a rien saisie
        let calculDetail = calcul;
        let resultat = eval(calcul);
        document.getElementsByClassName("previous")[0].innerHTML = calculDetail + " = " + resultat; // On affiche le calcul dans l'historique
        document.getElementsByClassName("calcul")[0].value = resultat; // On reprend le resultat precedant pour le prochain calcul
    }

}

let baseCalculator = new BaseCalculator();