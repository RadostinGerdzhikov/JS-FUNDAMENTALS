function roundNumber(number, precisionNumber) {
    number = +number;
    precisionNumber = +precisionNumber;
    if (precisionNumber > 15){
        precisionNumber = 15;
    }
    let result = number.toFixed(precisionNumber);
    console.log(parseFloat(result));
}

 roundNumber(3.1415926535897932384626433832795,2);
 roundNumber(10.5,3);
