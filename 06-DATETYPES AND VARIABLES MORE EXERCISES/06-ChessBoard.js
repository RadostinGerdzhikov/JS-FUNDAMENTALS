
// Чертаене на матрица
// В матрицата винаги се проверява за четен и нечетен брой на размера й

function chessBoardByRadostin(arg) {
    let size = Number(arg);
    let currentColor = 'black';
    let previousColor = '';

    console.log('<div class="chessboard">');


    for (let rows = 1; rows <= size; rows++) {
        console.log('   <div>');
        for (let col = 1; col <= size; col++) {

            console.log(`       <span class="${currentColor}"></span>`);
            previousColor = currentColor;
            currentColor = previousColor === 'black'
                ? 'white'
                : 'black'
        }

        if (size % 2 === 0){
            previousColor = currentColor;
            currentColor = previousColor === 'black'
            ? 'white'
            : 'black'
        }
        console.log('   </div>');
    }
    
    console.log('</div>');
}
chessBoardByRadostin(3);