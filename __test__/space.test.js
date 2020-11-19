import { SpaceCalculator } from './../src/space.js';

describe('SpaceCalculator', () => {
  let age = new SpaceCalculator(100,80);

  test('should return years past life expectancy on Earth', () => {
    expect(age.earthExpectacy).toEqual(20); 
  })

  test('should return current age, years left and years past life expectancy on Mercury', () => {
    expect(age.mercuryAge).toEqual(417); 
    expect(age.mercuryExpectancy).toEqual(333); 
    expect(age.mercuryPastExpectancy).toEqual(84); 
  })

  test('should return current age, years left and years past life expectancy on Venus', () => {
    expect(age.venusAge).toEqual(161); 
    expect(age.venusExpectancy).toEqual(129); 
    expect(age.venusPastExpectancy).toEqual(32); 
  })

  test('should return current age, years left and years past life expectancy on Mars', () => {
    expect(age.marsAge).toEqual(53); 
    expect(age.marsExpectancy).toEqual(43); 
    expect(age.marsPastExpectancy).toEqual(10); 
  })

  test('should return current age, years left and years past life expectancy on Jupiter', () => {
    expect(age.jupiterAge).toEqual(8); 
    expect(age.jupiterExpectancy).toEqual(7); 
    expect(age.jupiterPastExpectancy).toEqual(1); 
  })
})