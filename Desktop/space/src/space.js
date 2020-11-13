export class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

  ageOnEarth() {
    let earthAge = this.age;
    return earthAge;
  }

  ageOnMercury() {
    let mercury = 0.24;
    let mercuryAge = this.age / mercury;
    return mercuryAge;
  }
}