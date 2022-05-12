import Perso from "./caracter/Personnage.ts";
import Menu from "./menu.ts";
import Inventory from "./inventory.ts"
import Item from "./ClassObjet/Objet.ts"

export default class Fight {

    menu : Menu = new Menu()
    inventory : Inventory = new Inventory()

    Ally : Perso[]  = []
    Ennemies : Perso[] = []
    goodOrder : Perso[]= []

    Order() {
        this.Ally.forEach(element => {
            this.goodOrder.push(element)
        });
        this.Ennemies.forEach(element => {
            this.goodOrder.push(element)
        })
        this.goodOrder = this.goodOrder.sort()
    }

    AllyTeamAlive() {
        for (const element of this.Ally) {
            if (element.isAlive()) {
                return true
            }
        }
        return false
    }

    
    EnnemiesTeamAlive() {
        for (const element of this.Ennemies) {
            if (element.isAlive()) {
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

    fight(ally : Perso[],ennemies : Perso[]) {
        this.Ally = ally
        this.Ennemies = ennemies
        this.Order()
        let order = 0
        while (this.AllyTeamAlive() && this.EnnemiesTeamAlive()) {
            if (this.goodOrder[order].isAlive() && this.goodOrder[order].team == "ally") {
                this.AllyFight(this.goodOrder[order])
            }else if (this.goodOrder[order].isAlive()) {
                this.EnnemieFight(this.goodOrder[order])
            }
            if (order == this.goodOrder.length-1) {order = 0} else {order++}
        }
        if (this.AllyTeamAlive()) {console.log(" Bravo vous avez gagnez le combat ! ")}
        else {console.log("Mince vous avez perdu...")}
    }

    AllyFight(ally : Perso) {
        let choose : string | null = Menu.menuFight()
        while(choose == null ) {choose = Menu.menuFight()}
        if (choose == "1") {
            this.inventory.showInventory(this.Ally)
        }else if (choose == "2") {
            for (let index = 0; index < this.Ennemies.length; index++) {
                console.log(`${index+1}. ${this.Ennemies[index].name}`)
            }
            let choose :string | null= prompt("qui voulez vous attaquer ? >")
            if (choose != null || choose == "1" || choose == "2" || choose == "3" ) {
                ally.Attack(this.Ennemies[parseInt(choose)-1])
                console.log(this.Ennemies[parseInt(choose)-1])
            }
        }else if (choose == "3") {
            if (this.magic() == false) {
                console.log("Vous ne pouvea pas utilisez d'attaque magique !")
                this.AllyFight(ally)}
        }else {this.AllyFight(ally)}
    }

    EnnemieFight(ennemi : Perso) {
        
    }
}