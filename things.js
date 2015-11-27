var things = true;
var a = 1, b = 2;

if (things) {
  for (var i = 0; i < 5; i++) {
    a += b;
  }
}

console.log('a: ' + a + '\nb: ' + b);
