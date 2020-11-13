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
    let mercuryAge = Math.floor(this.age / mercury);
    return mercuryAge;
  }

  ageOnVenus() {
    let venus = 0.62;
    let venusAge = Math.floor(this.age / venus);
    return venusAge;
  }
}