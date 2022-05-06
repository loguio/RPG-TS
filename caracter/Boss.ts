import Perso from "./Personnage.ts";
export default class Boss extends Perso{
    name : string = "Boss";
}

// Mettre les points de vie à 500
// Il aura 70% de chance d'attaquer le joueur
// Il aura 30% de chance de faire des dégats de zone