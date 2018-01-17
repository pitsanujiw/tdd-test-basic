export class multiply {
  private numply: number[];
  constructor(...number: number[]) {
    this.numply = number;
  }
  plys() {
    let sum: number = 0;
    let result: number = 1;
    for (let i = 0; i < this.numply.length; i++) {
      sum = this.numply[i];
      result *= sum;
      console.log(result);
    }
    console.log(`result : ${result}`);
return result
  }
}
