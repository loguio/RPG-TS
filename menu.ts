import {Perso} from "./caracter/Personnage.ts";
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
    team: Perso[] = [];
    chooseCharacter(): Perso[] {
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
            if (this.choice[i] == "1") {
                this.team.push(new Perso("Guerrier"));
            } else if (this.choice[i] == "2") {
                this.team.push(new Perso("Mage"));
            } else if (this.choice[i] == "3") {
                this.team.push(new Perso("Paladin"));
            } else if (this.choice[i] == "4") {
                this.team.push(new Perso("Barbare"));
            } else if (this.choice[i] == "5") {
                this.team.push(new Perso("Prêtre"));
            } else if (this.choice[i] == "6") {
                this.team.push(new Perso("Voleur"));  
            }            
        }
        return this.team  
    }
    constructor(){}
}