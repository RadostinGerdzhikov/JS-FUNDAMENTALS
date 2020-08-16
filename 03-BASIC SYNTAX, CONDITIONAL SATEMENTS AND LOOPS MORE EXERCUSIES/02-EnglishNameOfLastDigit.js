// 1 - one
// 2 - two
// 3 - three
// 4 - four
// 5 - five
// 6 - six
// 7 - seven
// 8 - eight
// 9 - nine

function printEnglishNameOfLastDigit(digit) {
    digit = digit.toString();
    let arrDigit = digit.split('');
    let lastNumber = arrDigit.pop();
    let result = '';
    switch (lastNumber) {
        case '0':
            result = 'zero';
            break;
        case '1':
            result = 'one';
            break;
        case '2':
            result = 'two';
            break;
        case '3':
            result = 'three';
            break;
        case '4':
            result = 'four';
            break;
        case '5':
            result = 'five';
            break;
        case '6':
            result = 'six';
            break;
        case '7':
            result = 'seven';
            break;
        case '8':
            result = 'eight';
            break;
        case '9':
            result = 'nine';
            break;
    }
    console.log(result);
}

printEnglishNameOfLastDigit(512);
printEnglishNameOfLastDigit(1);
printEnglishNameOfLastDigit(1643);