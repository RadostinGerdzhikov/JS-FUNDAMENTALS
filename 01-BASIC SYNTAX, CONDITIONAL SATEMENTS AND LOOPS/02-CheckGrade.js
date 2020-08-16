function isGradeExellent (grade) {
    
    if (grade < 5.50) {
        console.log('Not excellent');
        return;
    }
    if(grade < 2 || grade > 6){
        console.log(`Wrong input`);
        return;
 
    }
    console.log('Excellent');
}