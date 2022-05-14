import Monstre from "./character/Monstre.ts"
import ArcherZombie from "./character/archerZombie.ts"
import Zombie from "./character/zombie.ts"
import GiantSqueleton from "./character/squelette_Geant.ts"
import LittleSqueleton from "./character/petit_squelette.ts"

export default class createMonster {
    public static createMonster() : Monstre[]  {
        const listMonster : Monstre[] = []
        const listChoice : Monstre[] = [new ArcherZombie(),new Zombie(),new GiantSqueleton(), new LittleSqueleton()]
        listMonster.push(listChoice[Math.floor(Math.random()*4)])
        return listMonster
    }
}