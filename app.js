$( document ).ready(function() {
  var supplyNumber = parseInt(prompt("Please enter a number"));
fizzBuzz(supplyNumber);
});


function fizzBuzz(supplyNumber) {
  	console.log(supplyNumber);

for (var fizzCount = 1; fizzCount<=supplyNumber; ++fizzCount) {
   if (fizzCount % 15 == 0)
   window.document.writeln("FizzBuzz<br />");
   else if (fizzCount % 3 == 0)
   window.document.writeln("Fizz<br />");
   else if (fizzCount % 5 == 0)
   window.document.writeln("Buzz<br />");
   else 
   window.document.writeln(fizzCount + "<br />");
}
  }