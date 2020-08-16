function isLoginCorrect(arrPasswords) {
    let count = 0;
    let userName = arrPasswords.shift();
    for (let pass of arrPasswords) {
        count++;
        let reversedPass = pass
            .split('')
            .reverse()
            .join('');

        if ((reversedPass !== userName) && count < 4) {
            console.log(`Incorrect password. Try again.`);
        }

        if (reversedPass === userName){
            console.log(`User ${userName} logged in.`);
        } 

        if ((reversedPass !== userName) && count === 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }
    }
}

isLoginCorrect(['Acer', 'login', 'go', 'let me in', 'recA']);
//isLoginCorrect(['momo','omom']);
// isLoginCorrect(['sunny','rainy','cloudy','sunny','not sunny']);
