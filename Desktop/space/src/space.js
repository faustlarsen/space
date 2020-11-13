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
    let mercuryAge = Math.round(this.age / this.mercury);
    return mercuryAge;
  }

  ageOnVenus() {
    let venusAge = Math.round(this.age / this.venus);
    return venusAge;
  }

  ageOnMars() {
    let marsAge = Math.round(this.age / this.mars);
    return marsAge;
  }

  ageOnJupiter() {
    let jupiterAge = Math.round(this.age / this.jupiter);
    return jupiterAge;
  }

  earthUserExpectancy() {
    let earthExpectancy = Math.round(this.expectancy - this.age);
    return earthExpectancy;
  }

  mercuryUserExpectancy() {
    let mercuryExpectancy = Math.round(this.earthUserExpectancy() / this.mercury);
    return mercuryExpectancy;
  }

  venusUserExpectancy() {
    let venusExpectancy = Math.round(this.earthUserExpectancy() / this.venus);
    return venusExpectancy;
  }
}