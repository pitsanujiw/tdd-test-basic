export class convertBase{
public toRadix(N: any, radix: any) {
  let HexN = "",
    Q = Math.floor(Math.abs(N)),
    R;
  while (true) {
    R = Q % radix;
    HexN = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(R) + HexN;
    Q = (Q - R) / radix;
    if (Q == 0) break;
  }
  return N < 0 ? "-" + HexN : HexN;
}
}
// let base = new convertBase();

// console.log(base.toRadix(10,2));



// a = (32767).toString(16)  // result: "7fff"
// b = (255).toString(8)     // result: "377"
// c = (1295).toString(36)   // result: "zz"
// d = (127).toString(2)     // result: "1111111"