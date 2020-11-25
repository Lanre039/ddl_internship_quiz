function simpleArraySum(ar) {
    const sum = ar.reduce((total, cur) => (total + cur), 0);
    return sum;
}
