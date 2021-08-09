function findSmallestInt(a) {
    return a.sort(function (a, b) {
        return a - b;
    })[0]
}
console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt([34, -345, -1, 100]));

