console.log("Edouard is Here !");

class BaseCalculator {

    constructor() {
        // On initialise une liste d'action ainsi que le nombre d'actions
        this.list_actions = ["="]; // Convention pour definir le point de depart du tout premier calcul
        this.nb_actions = 1; // Ce premier "=" est considere comme une action


        /*  Pour mieux expliquer l'implementation de la liste, je vais prendre des exemples d'actions et expliquer pas a pas ce que fait la calculatrice :

        Prenons tout d'abord le calcul 6 * 7, la list_actions enregistre ces actions ainsi :
        [ "=" , "6" , "*" , "7" ]

        Une fois que l'on appuie sur EXE, la calculatrice ajoute 2 nouvelles actions a la list_actions :
        [ "=" , "6" , "*" , "7" , "=" , 42 ]
        Plus exactement, elle ajoute un "=" qui marque l'execution du calcul et ajoute le resultat de celui-ci juste apres (equivalent du ANS sur une calculatrice standart)

        Nous pouvons continuer a enregistrer des actions, par exemple :
        [ "=" , "6" , "*" , "7" , "=" , 42 , "+" ]

        Si nous cliquons sur DEL la derniere action sera supprime si celle juste avant n'est pas un "=" dans la liste :
        [ "=" , "6" , "*" , "7" , "=" , 42 ]
        En revanche si l'action precedante est un "=" alors cela signifie que la derniere action de la list_actions est le resultat du calcul precedant,
        la calculatrice reaffiche donc le calcul precedant et adapte la list_action lorsqu'on clique sur DEL, dans ce cas :
        [ "=" , "6" , "*" , "7" ]

        Nous pouvons reinitialiser entierement les calculs avec le bouton AC ce qui remettra la list_actions a :
        [ "=" ]   */
    }



    /* Fonctions log */

    log() { console.log('Ce bouton est bien log'); }
    chiffre_log(chiffre) { console.log(chiffre); }
    operation_log(operation) { console.log(operation); }
    action_log(action) { console.log(action); }
    list_actions_log() { console.log(this.list_actions) } // Permet de log la list_actions dans la console (appel a la fin de chaques action)



    /* Calculatrice */

    ecriture(touche) {
        document.getElementsByClassName("calcul")[0].value += touche; // On ajoute l'element tape a ce qui a ete ecrit precedemment
        this.list_actions.push(touche); // On ajoute cette action dans la liste
        this.nb_actions += 1; // On augmente le compteur d'actions
        this.list_actions_log() // On log la liste dans la console
    }

    supprimer() {
        if (this.nb_actions <= 2) return this.reset(); // Si on cherche a supprimer la SEULE action entre par l'utilisateur (rappel : il y a un "=" au debut qui compte pour une action) on reset les calculs

        if (this.list_actions[this.nb_actions - 2] != "=") // Si la derniere action N'EST PAS le resultat d'un calcul precedant
        {
            let valeur = document.getElementsByClassName("calcul")[0].value; // On recupere ce qui a ete tape precedemment
            document.getElementsByClassName("calcul")[0].value = valeur.slice(0, valeur.length - 1); // On retire le dernier element

            this.list_actions.pop(); // On retire cette action de la liste
            this.nb_actions -= 1; // On diminue le compteur d'actions
        }

        else // Si la derniere action EST le resultat d'un calcul precedant
        {
            let calcul_precedant = ""; // On initialise une plus petite liste d'actions qui contiendra uniquement le calcul precedant
            let action_i = this.nb_actions - 2; // On initialise une variable d'indice qui va permettre de parcourir les deux listes

            while (action_i > 0 && this.list_actions[action_i - 1] != "=") // Tant qu'on a pas trouve l'indice du "="
            {
                action_i -= 1; // On recule l'indice
            }

            while (action_i != this.nb_actions - 2) // Tant qu'on a pas fini de parcourir le calcul precedant
            {
                calcul_precedant += this.list_actions[action_i]; // On ajoute les actions du calcul precedant dans la nouvelle liste
                action_i += 1; // On passe a l'action suivante
            }

            document.getElementsByClassName("calcul")[0].value = calcul_precedant; // On affiche le calcul_precedant sur l'ecran de la calculatrice

            this.list_actions.pop(); // On retirer le resultat du calcul precedant
            this.list_actions.pop(); // On retire le "=" qui marquait la delimitation entre les deux calculs
            this.nb_actions -= 2; // On a retire en tout 2 actions
        }

        this.list_actions_log() // On log la liste dans la console
    }

    reset() {
        document.getElementsByClassName("calcul")[0].value = " "; // On vide ce qui a ete tape precedemment
        this.list_actions = ["="]; // On reinitialise la liste
        this.nb_actions = 1; // On remet le compteur d'actions a 1
        this.list_actions_log() // On log la liste dans la console
    }

    calculer() {
        let calcul = document.getElementsByClassName("calcul")[0].value;
        if (calcul == 0) return; // On ne calcule pas si l'utilisateur n'a rien saisie
        let calculDetail = calcul;
        let resultat = eval(calcul);
        document.getElementsByClassName("previous")[0].innerHTML = calculDetail + " = " + resultat; // On affiche le calcul dans l'historique
        document.getElementsByClassName("calcul")[0].value = resultat; // On reprend le resultat precedant pour le prochain calcul
        this.list_actions.push("=");
        this.list_actions.push(resultat);
        this.nb_actions += 2;
        this.list_actions_log() // On log dans la console
    }
    
}

let baseCalculator = new BaseCalculator();