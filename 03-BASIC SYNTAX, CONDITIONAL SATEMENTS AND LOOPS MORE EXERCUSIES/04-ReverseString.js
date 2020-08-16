function printReverseString(str) {
   str = str.toString();
   let arrStr = str.split('');
   arrStr = arrStr.reverse();
   console.log(arrStr.join('')); 
}

printReverseString("Hello");
printReverseString("SoftUni");
printReverseString(12345);