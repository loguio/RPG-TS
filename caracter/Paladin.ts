import Perso from "./Personnage.ts";
export default class Paladin extends Perso {
    name : string = "Paladin";
}

// Le paladin aura une attaque moins élevée que le guerrier et une défenselégèrement plus élevée. 
// Il possèdera une attaque sainte qui ciblera tous lesennemis, leur infl igeant 40% des dégats 
// d'une attaque physique ((attaque -défense adverse)*0.4)