// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function getMultiples(num, below){

  var i = 1,
      multiples = [];

  while( (i*num) < below ){
    multiples.push( i*num );
    i++;
  }

  return multiples;

}

function uniqueMerge(a1, a2){
  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      if(a1[i] === a2[j]){
        a2.splice(j, 1);
      }
    };
  };
  return a2
}

function add(a){
  var sum = 0
  for (var i = 0; i < a.length; i++) {
    sum = sum + a[i]
  };
  return sum
}

var m3 = getMultiples(3, 1000);
var m5 = getMultiples(5, 1000);
var a2 = uniqueMerge(m3,m5);

var answer = add(m3.concat(a2));

console.log(answer);