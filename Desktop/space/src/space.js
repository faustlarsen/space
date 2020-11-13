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

  ageOnMars() {
    let mars = 1.88;
    let marsAge = Math.floor(this.age / mars);
    return marsAge;
  }

  ageOnJupiter() {
    let jupiter = 11.86;
    let jupiterAge = Math.floor(this.age / jupiter);
    return jupiterAge;
  }

  lifeExpectancy() {
    let expectancy = 80;
    let earthExpectancy = Math.floor(expectancy - this.age);
    return earthExpectancy;
  }
}