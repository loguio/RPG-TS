import Perso from "./Personnage.ts";

export default class Mage extends Perso {
    name : string = "Mage";
}

// Le Mage aura une attaque physique faible et une défense faible également. 
// Il possèdera une quantité de Mana ainsi qu'une attaque magique qui la 
// consomme, mais ignore la défense ennemie.