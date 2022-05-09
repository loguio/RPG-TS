import Perso from "./caracter/Personnage.ts";
import Menu from "./menu.ts";
import Inventory from "./inventory.ts"


export default class Fight {

    menu : Menu = new Menu()
    inventory : Inventory = new Inventory()

    Ally : Perso[]  = []
    Ennemies : Perso[] = []



    AllyTeamAlive() {
        for (const element of this.Ally) {
            if (element.alive == true) {
                return true
            }
        }
        return false
    }

    
    EnnemiesTeamAlive() {
        for (const element of this.Ennemies) {
            if (element.alive == true) {
                return true
            }
        }
        return false
    }

    magic() {
        this.Ally.forEach(element => {
            if (element.name == "Mage")
            return true
        });
        return false
    }

    fight() {
        while (this.AllyTeamAlive() == true && this.EnnemiesTeamAlive() == true) {
            
        }
    }

    AllyFight() {
            let choose : string | null = Menu.menuFight()
            while(choose == null ) {choose = Menu.menuFight()}
            if (choose == "1") {
                this.inventory.showInventory()
            }else if (choose == "2") {
                this.menu.showAttack(20,"Flavio","Marius")
            }else if (choose == "3") {
                if (this.magic() == false) {
                    console.log("Vous ne pouvea pas utilisez d'attaque magique !")
                    this.AllyFight()}
            }else {this.AllyFight()}
    }

    EnnemieFight() {
        
    }
}
const test = new Fight 
test.AllyFight()
