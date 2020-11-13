export class AgeCalculator {
  constructor(age) {
    this.age = age;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
    this.expectancy = 80;
  }

  ageOnEarth() {
    let earthAge = this.age;
    return earthAge;
  }

  ageOnMercury() {
    let mercuryAge = Math.floor(this.age / this.mercury);
    return mercuryAge;
  }

  ageOnVenus() {
    let venusAge = Math.floor(this.age / this.venus);
    return venusAge;
  }

  ageOnMars() {
    let marsAge = Math.floor(this.age / this.mars);
    return marsAge;
  }

  ageOnJupiter() {
    let jupiterAge = Math.floor(this.age / this.jupiter);
    return jupiterAge;
  }

  earthUserExpectancy() {
    let earthExpectancy = Math.floor(this.expectancy - this.age);
    return earthExpectancy;
  }

  mercuryUserExpectancy() {
    let mercuryExpectancy = Math.floor(this.earthUserExpectancy() / this.mercury);
    return mercuryExpectancy;
  }

  venusUserExpectancy() {
    let venusExpectancy = Math.floor(this.earthUserExpectancy() / this.venus);
    return venusExpectancy;
  }
}