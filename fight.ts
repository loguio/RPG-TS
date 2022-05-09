import Perso from "./caracter/Personnage.ts";
import Menu from "./menu.ts";
import Inventory from "./GameManager.ts"


class Fight {

    tempo : Inventory = new Inventory()

    inventory : Object[] = this.tempo.inventory

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

    Fight() {
        // while (this.AllyTeamAlive() == true && this.EnnemiesTeamAlive() == true) {
            if (Menu.menuFight() == "1") {
                this.showInventory()
            }else if (Menu.menuFight() == "2") {
                this.showAttack()
            }
        // }
    }

    showInventory() {
        if (this.inventory.length == 0) {return}
        for (let index = 1; index <= this.inventory.length; index++) {
            console.log(` ${index}. ${this.inventory[index-1]}`)
        }
        let choose : string | number | null = prompt("what do you want to choose ? >")
        if (choose != null && parseInt(choose) <= this.inventory.length) {
            this.inventory.splice(parseInt(choose)-1,1)
        }
    }

    showAttack() {
        
    }
}

const test = new Fight 
test.Fight()