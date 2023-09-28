function fibs(num) {
    let results = [0];

    if (num === 0) {
        return results;
    }
    else {
        results = [0, 1];
        for (let i = 1; results.length < num; i++) {
            let len = results.length - 1;
            let secondLast = results[len-1];
            let last = results[len];
            results.push(secondLast + last);
        }
    }
    return results;
};

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(20)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
