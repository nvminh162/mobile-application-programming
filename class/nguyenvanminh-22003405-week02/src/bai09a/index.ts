function readAndFilterEvenNumbers(numbers: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}

export default readAndFilterEvenNumbers;