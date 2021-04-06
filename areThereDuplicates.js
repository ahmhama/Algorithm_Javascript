/*Implement a function called, areThereDuplicates which
accepts a variable number of arguments, and checks whether there are any
duplicates among the arguments passed in.You can solve this using the 
frequency counter pattern OR the multiple pointers pattern.*/

//areThereDuplicates(1, 2, 3); // false
//areThereDuplicates(1, 2, 2); // true
//==============================================================//
const areThereDuplicates = (...args) => {
    return new Set(args).size !== args.length;
};

//==============================================================//
const areThereDuplicates = (...args) => {
    args.sort();

    let i = 0;

    for (let j = 1; j < args.length; i++, j++)
        if (args[i] === args[j])
            return true;

    return false;
};
//Time: O(nlog n)
//==============================================================//
const areThereDuplicates = (...args) => {
    let lookup = {};

    for (let val of args) {
        if (lookup[val]) return true;
        lookup[val] = (lookup[val] || 0) + 1;
    }

    return false;
};
//Time: O(n)