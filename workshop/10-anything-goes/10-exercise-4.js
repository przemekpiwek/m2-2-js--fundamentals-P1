// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUnique(array) {
    const result = [];
    for(let i = 0; i < array.length; i++){
        if(!result.includes(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filterNonUnique([1,2,3,3,4,5,6,7,7,8]));
