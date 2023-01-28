function my_recursive_pow(base, exponent) {
if (exponent == 0)
    return 1;
  else
    return base * my_recursive_pow(base, exponent - 1);
};
