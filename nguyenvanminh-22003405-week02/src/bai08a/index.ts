// Function to square a number
function square(num: number): Promise<number> {
    return new Promise((resolve) => {
        const result = num * num;
        console.log(`Square of ${num} = ${result}`);
        resolve(result);
    });
}

// Function to double a number
function double(num: number): Promise<number> {
    return new Promise((resolve) => {
        const result = num * 2;
        console.log(`Double of ${num} = ${result}`);
        resolve(result);
    });
}

// Function to add 5 to a number
function addFive(num: number): Promise<number> {
    return new Promise((resolve) => {
        const result = num + 5;
        console.log(`Add 5 to ${num} = ${result}`);
        resolve(result);
    });
}

// Main function that creates the Promise chain
function createPromiseChain(): Promise<number> {
    console.log("Starting Promise chain with number 2:");
    return square(2)
        .then(squaredResult => {
            return double(squaredResult);
        })
        .then(doubledResult => {
            return addFive(doubledResult);
        })
        .then(finalResult => {
            console.log(`Final result: ${finalResult}`);
            console.log(`Process: 2 => square(2^2=4) => double(4*2=8) => add5(8+5=13)`);
            return finalResult;
        })
        .catch(error => {
            console.error('Error in Promise chain:', error);
            throw error;
        });
}

export default createPromiseChain;