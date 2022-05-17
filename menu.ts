import Chara from "./character/Personnage.ts";
import progressbar from "./progressBar.ts";
import Monster from "./character/Monstre.ts"
import Pretre from "./character/Pretre.ts"
import Paladin from "./character/Paladin.ts"
import Mage from "./character/Mage.ts"
import Voleur from "./character/Voleur.ts"
import Guerrier from "./character/Guerrier.ts"
import Barbare from "./character/Barbare.ts"

export default class Menu {

    showCharacter(Ally: Chara[], enemies: Monster[]) {
        Ally.forEach(element => {//pour chaque allié
            let p = new progressbar(element.ValueMaxLife);p.setProgress(element.life)
            console.log(element.name,":",p.toString(),element.life,"/",element.ValueMaxLife)//affiche le nom de l'allié
        })
        console.log("")
        enemies.forEach(element => {//pour chaque allié
            let p = new progressbar(element.ValueMaxLife);p.setProgress(element.life)
            console.log(element.name,":",p.toString(),element.life,"/",element.ValueMaxLife)//affiche le nom de l'allié
        })
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
        let choose = prompt("\nQue voulez-vous faire ? : \n \n1. ٩ʕ◕౪◕ʔو Utiliser un item 🎁\n\n2. (☞ ͡° ͜ʖ ͡°)☞ Faire une attaque physique 😊🎂\n\n3.(つ◉益◉)つ Faire une attaque spécial 💣🌟 \n")
        return choose
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
        let choose = prompt(`Quel item voulez vous utiliser ? `)
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
    team: Chara[] = [];
    /**
     * Fonction pour choisir l'équipe du joueur
     * @returns {Perso[]} retourne l'équipe du joueur
     */
    chooseCharacter(): Chara[] {
        while (this.choice.length < 3) {
            console.log("Choisissez le Personage que vous voulez en tapant son numéro");
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
                this.team.push(new Guerrier("Guerrier"));
            } else if (this.choice[i] == "2") {
                this.team.push(new Mage("Mage"));
            } else if (this.choice[i] == "3") {
                this.team.push(new Paladin("Paladin"));
            } else if (this.choice[i] == "4") {
                this.team.push(new Barbare("Barbare"));
            } else if (this.choice[i] == "5") {
                this.team.push(new Pretre("Prêtre"));
            } else if (this.choice[i] == "6") {
                this.team.push(new Voleur("Voleur"));
            }            
        }
        return this.team  
    }
    ShowEnemies(enemies: Monster[]) {
        for (let index = 0; index < enemies.length; index++) {//pour chaque ennemi
            if (enemies[index].isAlive()) {
                console.log(`${index+1}. ${enemies[index].name}`)//affiche le nom de l'ennemi
            }
        }
    }
}