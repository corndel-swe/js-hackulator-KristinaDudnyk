/**
 * Works out the greatest common divisor of two numbers
 * Uses the euclidean algorithm: https://www.youtube.com/watch?v=JUzYl1TYMcU
 * e.g. gcd(8, 12) => 4
 * e.g. gcd(15, 10) => 5
 */
function gcd(a, b) {
  if (b > a) {
    [a, b] = [b, a];
  }

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

export default gcd;
