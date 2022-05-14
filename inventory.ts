import Objets from "./ClassObjet/Objet.ts"
import Potion from "./ClassObjet/potion.ts"
import Perso from "./character/Personnage.ts"

export default class Inventory {
    inventory : Objets[] = [new Potion(), new Potion(), new Potion()]

    showInventory(ally : Perso[]) {
        if (this.inventory.length == 0) {return null}
        for (let index = 1; index <= this.inventory.length; index++) {
            console.log(` ${index}. ${this.inventory[index-1].name}`)
        }
        let item : Objets | null = null
        let choose : string | number | null = prompt("what do you want to choose ? >")
        if (choose != null && parseInt(choose) <= this.inventory.length) {
            item = this.inventory[parseInt(choose)-1]
            this.inventory.splice(parseInt(choose)-1,1)
            console.log(`sur qui voulez vous consommer : ${item.name}`)
        }
        
        for (let index = 0; index < ally.length; index++) {
            console.log(` ${index+1}. ${ally[index].name}`)          
        }
        choose = prompt("Qui choisissez vous ? >")
        if (choose == "1" || choose == "2" || choose == "3") {
            if (ally[parseInt(choose)-1].isAlive()) {
                console.log(item)
                if (item != null && item.name == "Potion") {
                    console.log(ally[parseInt(choose)-1])
                    item.Healing(ally[parseInt(choose)-1])
                    console.log(ally[parseInt(choose)-1])
                }
            }
        }
    }

    addItem(item : Objets) {
        this.inventory.push(item)
    }

}
