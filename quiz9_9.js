class Employee {
  #name;
  deptName;
  time;

  constructor(name, deptName, time) {
    this.#name = name;
    this.deptName = deptName;
    this.time = time;
  }

  get name() {
    return this.#name;
  }

  calculatePay() {
    return this.time * 10000;
  }
}

class FullTimeEmp extends Employee {}

class PartTimeEmp extends Employee {
  calculatePay() {
    return this.time * 8000;
  }
}
const emp1 = new FullTimeEmp("정지원", "개발팀", 5);
const emp2 = new PartTimeEmp("정지우", "마케팅", 10);

let emp1Pay = emp1.calculatePay();
let emp2Pay = emp2.calculatePay();

console.log(`emp1 : ${emp1Pay} , emp2 : ${emp2Pay}`);
