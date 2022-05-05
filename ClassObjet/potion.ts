
class Potion  {
    heal : number = 50;
    /**
     * Cette function permet de soigner un personnage en lui rendant 50% de pv.
     */
    potion(){
        if (this.life > 0){this.life = this.life + this.heal} 
        else if (this.life > 50) {}
    } 
}