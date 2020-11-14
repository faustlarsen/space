import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.src/css/styles.css';
import SpaceCalculator from './space.js';

$(document).ready(function(){
  $("#calculator").submit(function(event) {
    event.preventDefault();
    let age = $("calculator#age").val();
    let expectancy = $("calculator#expectancy").val();
    let spaceAge = new SpaceCalculator(age, expectancy);
    $("#earth").html(`Your Earth Age: ${spaceAge.age}`);
  });
}):