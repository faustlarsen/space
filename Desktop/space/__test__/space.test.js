import { AgeCalculator } from './../src/space.js';

describe('AgeCalculator', () => {
  let age = new AgeCalculator(36);

  test('should return user age', () => {
    expect(age.ageOnEarth()).toEqual(36); 
  })

  test('should return user age on Mercury', () => {
    expect(age.ageOnMercury()).toEqual(36); 
  })
})