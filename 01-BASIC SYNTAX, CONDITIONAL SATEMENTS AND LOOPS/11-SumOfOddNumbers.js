function sumOfOddNumbers(number) {
    number = +number;
    let loopLoops = number * 2;
    let sum = 0;
    for (let i = 1; i <= loopLoops; i++) {
        if (i % 2 !== 0){
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
console.log(`Second result!`);
sumOfOddNumbers(3);