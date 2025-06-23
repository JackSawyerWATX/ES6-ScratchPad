const magic = () => {
    return new Date()
}

console.log(magic())


const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));


const increment = (number = 5, value = 1) => number + value;
console.log(increment())