function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= z && y >= x) {
    return y;
  } else return z;
}

export default maxOfThree;
