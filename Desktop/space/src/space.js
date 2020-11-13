export class SpaceCalculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;

    this.earthPastExpectacy = this.age - this.expectancy;

    this.mercuryAge = Math.round(this.age / this.mercury);  
    this.mercuryExpectancy = Math.round(this.expectancy / this.mercury); 
    this.mercuryPastExpectancy = Math.round(this.mercuryAge - this.mercuryExpectancy); 

    this.venusAge = Math.round(this.age / this.venus);  
    this.venusExpectancy = Math.round(this.expectancy / this.venus); 
    this.venusPastExpectancy = Math.round(this.venusAge - this.venusExpectancy);

    this.marsAge = Math.round(this.age / this.mars);  
    this.marsExpectancy = Math.round(this.expectancy / this.mars); 
    this.marsPastExpectancy = Math.round(this.marsAge - this.marsExpectancy);

    this.jupiterAge = Math.round(this.age / this.jupiter);  
    this.jupiterExpectancy = Math.round(this.expectancy / this.jupiter); 
    this.jupiterPastExpectancy = Math.round(this.jupiterAge - this.jupiterExpectancy);
  }
}
