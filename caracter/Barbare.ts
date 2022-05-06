import Perso from "./Personnage.ts";
export default class Barbare extends Perso{
    name : string = "Barbare";
}

// Le barbare aura une défense faible et une attaque plus élevée encore que leguerrier. 
// Il aura une attaque Berserk qui attaque un ennemi au hasard pour130% des dégats 
// physiques normaux (attaque - défense adverse)*1.3, mais ilse blessera de 20% de 
// sa vie en l'effectuant.