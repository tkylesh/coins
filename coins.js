



function coinCounter () {


  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  //clear coinPurse object so process can restart
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;

  var remainder = 0;

    //return object with appropriate coin amounts
  var display = document.getElementById('main');

  //get input dollar amount from user
  var dollar =document.getElementById("dollar").value;
  display.innerHTML += dollar+ "</br>";

  //divide dollar amount by 25/10/5/1 until remainder === 0
  coinPurse.quarters = Math.floor(dollar/.25);
  remainder= dollar%.25;
  display.innerHTML += "<li>Quarters: "+ coinPurse.quarters+"</li>";
  if (remainder !== 0){
  		coinPurse.dimes = Math.floor(remainder/.10);
  		display.innerHTML += "<li>Dimes: "+ coinPurse.dimes+"</li>";
  		remainder = remainder%.10;
  }
  if (remainder !== 0){
  		coinPurse.nickels = Math.floor(remainder/.05);
  		display.innerHTML +="<li>Nickels: "+ coinPurse.nickels+"</li>";
  		remainder = remainder%.05;
  }

  if (remainder !== 0){
  		coinPurse.pennies = Math.round(remainder/.01);
  		display.innerHTML += "<li>Pennies: "+ coinPurse.pennies+"</li>";
  		//remainder = remainder%.01;
  }
  //return coinPurse;
}

  
  


console.log();