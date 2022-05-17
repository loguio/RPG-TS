export default class ProgressBar {
    private size: number = 30;
    private progress: number = 0;
    private maxLife: number;
    constructor(maxLife: number) {
        this.maxLife = maxLife;
    }
    setProgress(progress: number) {
        this.progress = progress;
    }
    // PROGRESS FOIS SIZE / 100
    toString(): string|undefined {
        let str = "|";
        let num = this.progress * this.size / this.maxLife;
        if (num%1 != 0) {
            num = Math.floor(num);
        }
        for (let i = 0; i < this.size; i++) {
            if (i < num) {
                str += "=";
            }
            else if (i == num) {
                str += ">";
            }
            else {
                str += " ";
            }
            
        }
        str += "|";
        return str;
    }
}