export default class Monstre {
    name : string = "Monstre qui fait peur !!!"
    valueAtk : number = 40;
    valueAtkMagic : number = 40;
<<<<<<< HEAD:caracter/Personnage.ts
    valueAtkZone : number = 10;
    valueDef : number = 50;
=======
    valueDef : number = 20;
>>>>>>> 01335de9fec9abaaa68f7a682a16f18c189116aa:character/Monstre.ts
    valueVit : number = 0;
    ValueMaxLife : number = 100;
    life : number = 100
    valuemagie : number = 0;
    chance : number = 100;
    team : string = "ennemi"

    UseItem() {

    }
    /**
     * Fonction pour attaquer un personnage
     * @param enemy l'ennemi que le personnage va attaquer
     */
    Attack(enemy : any) {
        enemy.life = Math.max(enemy.life - (Math.max(this.valueAtk - enemy.valueDef,0)),0);
    }
    /**
     * Fonction pour soigner un personnage  
     */
    Heal() {
        this.life += 0.2*this.ValueMaxLife;
    }
    Trap(){
        this.life -= 50;
    }
    isAlive()  : boolean{
        if (this.life == 0) {return false} return true
    }
}