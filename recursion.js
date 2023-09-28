function fibs(num) {
    if (num <= 2) {
        return [0, 1].slice(0, num);
    }
    let results = fibs(num - 1);
    let secondLast = results[results.length - 2];
    let last = results[results.length - 1];
    results.push(secondLast + last);
    return results;

}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(20)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
