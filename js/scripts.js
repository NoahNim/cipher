$(document).ready(function(){
  $('h1').click(function(){
  var intro = prompt("Introduce yourself and tell us where you are from?");
  console.log(intro);
  function firstlast(firstAndLast) {
  var firstAndLast = intro[0]+intro.slice(-1);
  console.log(firstAndLast);
  var reverser = firstAndLast.split('').reverse().join('');
  console.log(reverser);
  function concat(cat){
    cat = intro + reverser.toUpperCase();
    console.log(cat);
      };
      concat();
    };
    function count(num) {
      var counter = num.split('').length / 2;
      //var myArray = counter.length / 2;
      console.log(counter);
    };
  firstlast();
  count(intro);
  });
});
