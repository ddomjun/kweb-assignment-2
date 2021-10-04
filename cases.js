const factorial = number => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result = result * i;
    }  
    return result;
};

const permutation = (n, r) => factorial(n) / factorial(n-r);
const combination = (n, r) => permutation(n, r) / factorial(r);
const multiPermutation = (n, r) => n**r;
const multiCombination = (n, r) => combination(n + r - 1, r);

module.exports = {
    factorial,
    permutation,
    combination,
    multiPermutation,
    multiCombination
};
