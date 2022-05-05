
export default class Menu {
    showCharacter() {

    }
    
    public static menuFight() {
        let choose = prompt("What do you want to do ? : \n1.Use Item\n2.Make an attack\n3.Make an magic attack \n")
        if (choose == "1" ) {
            Menu.showItem()
        }
    }

    showMenu() {

    }

    openChest() {

    }


    public static showItem() {
        let choose = prompt(`What item do you want to use ? `)
        
    }

    choice: string[]=[];
    chooseCharacter(): string[] {
        while (this.choice.length < 3) {
            console.log("Choose your character by typing the number of the character you want to play");
            let temp = prompt("1. Guerrier \n2. Mage \n3. Paladin \n4. Barbare \n5. Prêtre \n6. Voleur\nVotre choix :");
            if (temp != null && temp != "" && temp >= "1" && temp <= "6" && temp.length == 1) {
                if (this.choice[0] == temp || this.choice[1] == temp) {
                    console.log("vous ne pouvez pas choisir deux fois le même personnage");
                }else{
                    this.choice.push(temp);
                }
            }
        }
        for (let i = 0; i < this.choice.length; i++) {
            if (this.choice[i] == "1") {
                this.choice[i] = "Guerrier";
            } else if (this.choice[i] == "2") {
                this.choice[i] = "Mage";
            } else if (this.choice[i] == "3") {
                this.choice[i] = "Paladin";
            } else if (this.choice[i] == "4") {
                this.choice[i] = "Barbare";
            } else if (this.choice[i] == "5") {
                this.choice[i] = "Prêtre";
            } else if (this.choice[i] == "6") {
                this.choice[i] = "Voleur";    
            }
        }
        return this.choice  
    }
    constructor(){}
}