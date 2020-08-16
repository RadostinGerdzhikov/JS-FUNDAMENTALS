function isLeapYear(year) {
    let answer = "";
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        answer = "yes";
    } else {
        answer = "no";
    }
    console.log(answer);
}

  isLeapYear(1984);
  isLeapYear(2003);
  isLeapYear(4);