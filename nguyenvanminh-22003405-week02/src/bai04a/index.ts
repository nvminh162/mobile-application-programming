const getRandomNumber = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (!isNaN(num)) {
            resolve(num);
        } else {
            reject(new Error("Failed to generate a random number"));
        }
    });
};

export default getRandomNumber;