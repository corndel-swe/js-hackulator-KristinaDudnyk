/**
 * Returns the positive difference (or zero)
 * subtract(5, 2) => 3
 * subtract(3, 7) => 4
 * subtract(5, 5) => 0
 * subtract(-2, 4) => 6
 */
function subtract(x, y) {
  if (x === y) {
    return 0;
  }
  if (x < y) {
    return y - x;
  }

  if (y < x) {
    return x - y;
  }
}

export default subtract;
