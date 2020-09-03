function printDayOfWeek(dayNum) {

    //if (dayNum < 1 || dayNum > 7) {
    if (dayNum < 1 || 7 < dayNum) {
      console.log('Invalid day!');
      return;
    }
     let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']; 
    console.log(daysOfWeek[dayNum - 1]);
}

printDayOfWeek(7);