import { escapeSelector } from 'jquery';
import { AgeCalculator } from './../src/space.js';

describe('AgeCalculator', () => {
  let age = new AgeCalculator(100,80);

  test('should return years past life expectancy on Earth', () => {
    age.ageOnEarth();
    expect(age.ageOnEarth()).toEqual(20); 
  })

  test('should return current age, years left and years past life expectancy on Mercury', () => {
    age.ageOnMercury();
    expect(age.mercuryAge).toEqual(417); 
    expect(age.mercuryExpectancy).toEqual(333); 
    expect(age.mercuryPastExpectancy).toEqual(84); 
  })

  test('should return current age, years left and years past life expectancy on Venus', () => {
    age.ageOnVenus();
    expect(age.venusAge).toEqual(161); 
    expect(age.venusExpectancy).toEqual(129); 
    expect(age.venusPastExpectancy).toEqual(36); 
  })
})