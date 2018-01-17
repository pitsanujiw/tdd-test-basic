import { expect } from "chai";
import "mocha";
import { Calculator } from "../src/calculator";
import { multiply } from "../src/multiply";
import println from "../src/logtest";
import { profile } from "../src/Profile";
import { convertBase } from "../src/baseConvert";

describe("", () => {
  beforeEach("Test Plus ", () => {});
  it("VALUE1 + VALUE2 = VALUE3 ??", () => {
    const value1 = 10;
    const value2 = 20;
    const value3 = 30;
    let cal = new Calculator();
    cal.plus(value1, value2);

    expect(value3).to.be.equal(cal.plus(value1, value2));
  });

  it("value multiply ...rest operator number ?? => 2*2*2*2*2 =32 ?", () => {
    const value = [2, 2, 2, 2, 2];
    let multi = new multiply(...value, 2, 2, 2, 2, 2, 2, 2, 2, 2);
    multi.plys();
    expect(16384).to.be.equal(multi.plys());
  });
  it('Console.log  change to "println" command line =>  ', () => {
    const result = "Hello World";
    expect(console.log("Hello World")).to.be.equal(println(result));
  });
  it("Test output input data string: equal?", () => {
    let prof = new profile(
      "Hello",
      "world",
      "sawadee",
      66,
      81234567,
      "TMS",
      "male",
      true
    );
    expect(
      println(`Firstname  : Hello
Middlename : sawadee
 Lastname   : world
Telephone  : +6681234567
School/university :TMS
sex: male`)
    ).to.be.equal(prof.display());
  });

  it("Covert Base => ", () => {
    let Base = new convertBase();
const num =10;
const covertbase =2;
    console.log(Base.toRadix(num, covertbase));

    expect('1010').to.be.equals(Base.toRadix(num,covertbase));
  });
});

// describe('คำอธิบายว่าเราจะ Test เรื่องอะไร', () => {
//     beforeEach(() => {
//       // beforeEach ทุก Test case เราจะเข้า function นี้ก่อนเสมอ
//     });

//     before(() => {
//       // before คือ เราจะทำ function นี่ก่อนทำ Test case ครั้งแรกครั้งเดียว
//     });
//     afterEach(() => {
//       // afterEach เมื่อจบ Test case แต่ละ Test case เราจะทำ function นี้
//     });
//     after(() => {
//       // after เมื่อจบทุก Test case ถึงจะทำ function นี้
//     });
//     it('คำอธิบาย Test case', () => {
//       // test case
//     });
//   });
