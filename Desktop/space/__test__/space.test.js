import { AgeCalculator } from './../src/space.js';

describe('AgeCalculator', () => {
  let age = new AgeCalculator(36);

  test('should return user age', () => {
    expect(age.yearsOnEarth()).toEqual(33); 
  })
})