import println from "../logtest";

export class profile {
  private firstname?: string;
  private lastname?: string;
  private middlename?: string;
  private tel?: number;
  private study?: string;
  private country_tel: number;
  private sex?: any;
  public sexiss?: string;
  private Life?: boolean;

  constructor(
    fname: string = '',
    lname: string='',
    midname: string='',
    ccal: number=0,
    call: number=0,
    univer: string='',
    sex: any=undefined,
    Life: boolean=false,
  ) {
    this.firstname = fname;
    this.lastname = lname;
    this.middlename = midname;
    this.tel = call;
    this.study = univer;
    this.sex = sex;
    this.country_tel = ccal;
  }
  display() {
    return println(
      `Firstname  : ${this.firstname}
    Middlename : ${this.middlename}
     Lastname   : ${this.lastname}
    Telephone  : +${this.country_tel}${this.tel}
    School/university :${this.study}
    sex: ${this.sex}`
    );
  }
}
