export class AgeCalculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  ageOnEarth() {
    this.earthAge = this.age;
    this.lifeExpectancy = this.expectancy
    this.earthPastExpectacy = this.earthAge - this.lifeExpectancy;
    return this.earthPastExpectacy;
  }

  ageOnMercury() {
    this.mercuryAge = Math.round(this.age / this.mercury);   // age on mercury 
    this.mercuryExpectancy = Math.round(this.lifeExpectancy / this.mercury); // age left on mercury
    this.mercuryPastExpectancy = Math.round(this.mercuryAge - this.mercuryExpectancy); // age lived past life expectancy
  }

  ageOnVenus() {
    this.venusAge = Math.round(this.age / this.venus);
    return this.venusAge;
  }

  ageOnMars() {
    this.marsAge = Math.round(this.age / this.mars);
    return this.marsAge;
  }

  ageOnJupiter() {
    this.jupiterAge = Math.round(this.age / this.jupiter);
    return this.jupiterAge;
  }

  // earthUserExpectancy() {
  //   this.earthExpectancy = Math.round(this.expectancy - this.age);
  //   return this.earthExpectancy;
  // }

  mercuryUserExpectancy() {
    this.mercuryExpectancy = Math.round(this.earthUserExpectancy() / this.mercury);
    return this.mercuryExpectancy;
  }

  venusUserExpectancy() {
    this.venusExpectancy = Math.round(this.earthUserExpectancy() / this.venus);
    return this.venusExpectancy;
  }

  marsUserExpectancy() {
    this.marsExpectancy = Math.round(this.earthUserExpectancy() / this.mars);
    return this.marsExpectancy;
  }

  jupiterUserExpectancy() {
    this.jupiteExpectancy = Math.round(this.earthUserExpectancy() / this.jupiter);
    return this.jupiteExpectancy;
  }

}
