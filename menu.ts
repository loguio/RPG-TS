export class Menu {
    showCharacter() {

    }
    
    menuFight() {

    }

    showMenu() {

    }

    openChest() {

    }

    useItems() {
        
    }
    choice: string[]=[];
    chooseCharacter() {
        while (this.choice.length < 3) {
            console.log("Choose your character by typing the number of the character you want to play");
            console.log("1. Guerrier \n2. Mage \n3. Paladin \n4. Barbare \n5. Prêtre \n6. Voleur");
            let temp = prompt("Votre choix :");
            if (temp != null && temp != "" && temp >= "1" && temp <= "6") {
                if (this.choice[0] == temp || this.choice[1] == temp) {
                    console.log("vous ne pouvez pas choisir deux fois le même personnage");
                }else{
                    this.choice.push(temp);
                }
            }
        }
    }
    constructor(){}
}