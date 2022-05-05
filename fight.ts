import {Perso} from "./caracter/Personnage.ts";
import Menu from "./menu.ts";

class Fight {
    Ally : Perso[]  = []
    Ennemies : Perso[] = []

    AllyTeamAlive() {
        for (const element of this.Ally) {
            if (element.Alive == true) {
                return true
            }
        }
        return false
    }

    EnnemiesTeamAlive() {
        for (const element of this.Ennemies) {
            if (element.Alive == true) {
                return true
            }
        }
        return false
    }

    Fight() {
        Menu.menuFight()
        while (this.AllyTeamAlive() == true && this.EnnemiesTeamAlive() == true) {
        }
    }
}

const test = new Fight 
test.Fight()