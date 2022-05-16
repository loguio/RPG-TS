import Perso from "./character/Personnage.ts";
export default class Menu {

    showCharacter() {
        
    }
    public static question(question : string):string {
        let resp = null
        while (resp == null){
            resp = prompt(question)
        }
        return resp
    }
    /**
     * 
     * Propose le menu d'action en combat
     */
    public static menuFight() {
        let choose = prompt("What do you want to do ? : \n \n1. ٩ʕ◕౪◕ʔو 🆄 🆂 🅴  🅸 🆃 🅴 🅼 🎁\n\n2. (☞ ͡° ͜ʖ ͡°)☞ 🅼 🅰 🅺 🅴  🅰 🅽  🅰 🆃 🆃 🅰 🅲 🅺 😊🎂\n\n3.(つ◉益◉)つ 🅼 🅰 🅺 🅴  🅰 🅽  🅼 🅰 🅶 🅸 🅲  🅰 🆃 🆃 🅰 🅲 🅺 💣🌟 \n")
        return choose
    }
    public static chooseCara2Attack(enemies : Perso[]) {
    
    }  
    /**
     * Permet de 
     */
    showMenu() {

    }
    /**
     * Permet d'ouvrir un coffre
     */
    openChest() {

    }
    /**
     * affiche les dégats infligués
     * @param damage 
     * @param perso1 
     * @param perso2 
     */
    showAttack(damage : number,perso1 : string,perso2 : string) {
        console.log(`${perso1} a infligé ${damage} point de dégats à ${perso2}`)
    }

    showItem() {
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
     * Fonction pour choisir l'équipe du joueur
     * @returns {Perso[]} retourne l'équipe du joueur
     */
    chooseCharacter(): Perso[] {
        while (this.choice.length < 3) {
            console.log("Choose your character by typing the number of the character you want to play");
            /**
             * @type {string|null}Variable temporaire pour vérifier la réponse de l'utilisateur
             */
            console.log(" ╔════════════════╗         ╔════════════════╗         ╔════════════════╗ \n",
                        "║                ║         ║                ║         ║                ║\n",
                        "║   1. Guerrier  ║         ║    2. Mage     ║         ║   3. Paladin   ║\n",         
                        "║                ║         ║                ║         ║                ║\n",
                        "╚════════════════╝         ╚════════════════╝         ╚════════════════╝\n\n\n\n",
                        "╔════════════════╗         ╔════════════════╗         ╔════════════════╗ \n",
                        "║                ║         ║                ║         ║                ║\n",
                        "║   4. Barbare   ║         ║   5. Prêtre    ║         ║   6. Voleur    ║\n",         
                        "║                ║         ║                ║         ║                ║\n",
                        "╚════════════════╝         ╚════════════════╝         ╚════════════════╝\n"
            )
            let temp: string|null = prompt("Votre choix :");
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