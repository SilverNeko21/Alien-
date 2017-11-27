var blue = 1999;
var green = 5002;
var red = 2999;
var output ;

function invasion(x, y, z) {
  if ((x + y + z) == 10000) {
    
    if (y > 5000) {
      output = "MOTHER OF GOD, not the green ones";
    } else if ((y + z) > 8000) {
      output = "DOOOOOM";
    } else if ((z + x) < 3000) {
      output = "We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!";
    } else {
      output = "how did u manage to mess this up!?!?!?";
    }
  } else {
    output = "Too many aliens boi.";
  }
}

invasion(blue, green, red);
console.log(output);