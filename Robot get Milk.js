// This creates a function for a robot to get milk. It calls on two other functions.
// One that calculates how many bottles of milk the robot can buy and another that calculate
// the change. There is no user input. The money is set at $10 and cost per bottle at $3.00.

function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money,1.5);
}

function calcBottles(startingMoney, costPerBottle) {
     var numberOfBottles = Math.floor(startingMoney / costPerBottle);
     return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}


console.log("Hello master, here is your " + getMilk(10, 3) + " change.");