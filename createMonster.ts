import Monstre from "./character/Monstre.ts"
import ArcherZombie from "./character/archerZombie.ts"
import Zombie from "./character/zombie.ts"
import GiantSqueleton from "./character/squelette_Geant.ts"
import LittleSqueleton from "./character/petit_squelette.ts"

export default class createMonster {
    public static createMonster() : Monstre[]  {
        const listMonster : Monstre[] = []
        for (let index = 0; index < 3; index++) {
            let tempo = Math.floor(Math.random()*4) // on prend un nombre aléatoire en tre 1 2 3 et 0
            switch (tempo) {
                case 1: // si c'est un
                listMonster.push(new ArcherZombie()) // on ajoute un archerZOmbie
                break
                case 0 : //si c'est 0
                listMonster.push(new Zombie()) // on ajoute un Zombie
                break
                case 2 : // si c'est 2
                listMonster.push(new GiantSqueleton()) // on ajoute un Squelette Géant
                break
                default : // sinon (donc forcément 3)
                listMonster.push(new LittleSqueleton()) // on ajoute un petit squelette
                break
            }  
        }
        return listMonster // on renvoie nos 3 monstres 
    }

}