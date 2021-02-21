let company = {
    sales: [{
        name: 'John',
        salary: 1000
        }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

function sumSalaries(department) {
    // Base case
    // We reach an array of objects as the value
    // Here we can find the salaries of that dept/sub department
    if (Array.isArray(department)) {
        let sum = 0;
        for (let person of department) {
            console.log( person );
            sum += person.salary;
        }
        return sum;
    }

    // Create a variable to store the total salaries
    let totalSum = 0;
    
    // Recursive case
    // Need a for loop to traverse all the objects (values) of the department object
    for (let subdept of Object.values(department)) {
        console.log(subdept)
        totalSum += sumSalaries(subdept);
    }

    // Return the sum of all the salaries
    return totalSum;
}

console.log(sumSalaries(company))