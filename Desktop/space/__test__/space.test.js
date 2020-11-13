import { escapeSelector } from 'jquery';
import { AgeCalculator } from './../src/space.js';

describe('AgeCalculator', () => {
  let age = new AgeCalculator(100,80);

  // test('should return user age on Earth', () => {
  //   expect(age.ageOnEarth()).toEqual(36); 
  // })

  // test('should return user age on Mercury', () => {
  //   expect(age.ageOnMercury()).toEqual(150); 
  // })

  // test('should return user age on Venus', () => {
  //   expect(age.ageOnVenus()).toEqual(58); 
  // })

  // test('should return user age on Mars', () => {
  //   expect(age.ageOnMars()).toEqual(19); 
  // })

  // test(`should return user age on Jupiter`, () => {
  //   expect(age.ageOnJupiter()).toEqual(3);
  // })

  // test(`should return user years left on Earth`, () => {
  //   expect(age.earthUserExpectancy()).toEqual(44);
  // })

  // test(`should return user years left on Mercury`, () => {
  //   expect(age.mercuryUserExpectancy()).toEqual(183);
  // })

  // test(`should return user years left on Venus`, () => {
  //   expect(age.venusUserExpectancy()).toEqual(71);
  // })

  // test(`should return user years left on Mars`, () => {
  //   expect(age.marsUserExpectancy()).toEqual(23);
  // })

  // test(`should return user years left on Jupiter`, () => {
  //   expect(age.jupiterUserExpectancy()).toEqual(4);
  // })

  test('should return years past life expectancy on Earth', () => {
    expect(age.ageOnEarth()).toEqual(10); 
  })
})