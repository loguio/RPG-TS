import Objets from "./ClassObjet/Objet.ts"
import Potion from "./ClassObjet/potion.ts"

export default class Inventory {
    inventory : Objets[] = [new Potion(), new Potion(), new Potion()]

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
}
