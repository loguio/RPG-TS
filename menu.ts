import Perso from "./caracter/Personnage.ts";
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
    /**
     * variable qui va contenir les choix du joueur
     * @type {string[]}
     */
    choice: string[]=[];
    /**
     * Variable qui va contenir l'équipes du joueur
     * @type {Perso} 
     */
    team: Perso[] = [];
    /**
     * 
     * @returns {Perso[]} retourne l'équipe du joueur
     */
    chooseCharacter(): Perso[] {
        while (this.choice.length < 3) {
            console.log("Choose your character by typing the number of the character you want to play");
            /**
             * @type {string|null}Variable temporaire pour vérifier la réponse de l'utilisateur
             */
            let temp: string|null = prompt("1. Guerrier \n2. Mage \n3. Paladin \n4. Barbare \n5. Prêtre \n6. Voleur\nVotre choix :");
            if (temp != null && temp != "" && temp >= "1" && temp <= "6" && temp.length == 1) {//vérifie que la réponse est correcte
                if (this.choice[0] == temp || this.choice[1] == temp) {
                    console.log("vous ne pouvez pas choisir deux fois le même personnage");
                }else{
                    this.choice.push(temp);//ajoute la réponse à la liste
                }
            }
        }
        for (let i = 0; i < this.choice.length; i++) {//crée les personnages dans la liste de l'équipe
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
}