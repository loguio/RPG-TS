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
    chooseCharacter(): string[] {
        while (this.choice.length < 3) {
            console.log("Choose your character by typing the number of the character you want to play");
            console.log("1. Guerrier \n2. Mage \n3. Paladin \n4. Barbare \n5. Prêtre \n6. Voleur");
            let temp = prompt("Votre choix :");
            if (temp != null && temp != "" && temp >= "1" && temp <= "6" && temp.length == 1) {
                if (this.choice[0] == temp || this.choice[1] == temp) {
                    console.log("vous ne pouvez pas choisir deux fois le même personnage");
                }else{
                    this.choice.push(temp);
                }
            }
        }
        for (let i = 0; i < this.choice.length; i++) {
            let i = 0
            if (this.choice[i] == "1") {
                this.choice[i] = "Guerrier";
                i++;
            } else if (this.choice[i] == "2") {
                this.choice[i] = "Mage";
                i++;
            } else if (this.choice[i] == "3") {
                this.choice[i] = "Paladin";
                i++;
            } else if (this.choice[i] == "4") {
                this.choice[i] = "Barbare";
                i++;
            } else if (this.choice[i] == "5") {
                this.choice[i] = "Prêtre";
                i++;
            } else if (this.choice[i] == "6") {
                this.choice[i] = "Voleur";
                i++;    
            }            
        }
        return this.choice  
    }
    constructor(){}
}