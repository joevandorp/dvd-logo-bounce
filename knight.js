//console log the dvd logo bouncing around the screen
//animate knight and move draw to console
const gameboard = (height,width,knightpositiony,knightpositionx) => {
    let board = [];
    for (let i = 0; i < height; i++) {
        board[i] = [];
        for (let j = 0; j < width; j++) {
            board[i][j] = '___';
        }
    }
    board[knightpositiony][knightpositionx] = 'DVD';
    return board;
}

//start knight at 0,0 and move to lower right corner with one move every second
const animate = (gameboardheight,gameboardwidth) => {
    let knightpositiony = 2;
    let knightpositionx = 6;
    let knightdirectiony = 1;
    let knightdirectionx = 1;
    setInterval(() => {
        //console clear
        console.clear();
        console.log(gameboard(gameboardheight,gameboardwidth,knightpositiony,knightpositionx).join('\n'));
        
        //if knight is at the end of the board, change direction
        if (knightpositiony === gameboardheight-1){
            knightdirectiony = -1;
            if (Math.floor(Math.random() * 2) === 0){
                knightpositiony--;
            }
        }
        if (knightpositionx === gameboardwidth-1){
            knightdirectionx = -1;
            if (Math.floor(Math.random() * 2) === 0){
                knightpositionx--;
            }
        }
        if (knightpositiony === 0){
            knightdirectiony = 1;
            if (Math.floor(Math.random() * 2) === 0){
                knightpositiony++;
            }
        }
        if (knightpositionx === 0){
            knightdirectionx = 1;
            if (Math.floor(Math.random() * 2) === 0){
                knightpositionx++;
            }
        }
        knightpositiony=knightpositiony+knightdirectiony;
        knightpositionx=knightpositionx+knightdirectionx;
    }, 350);
}

//initialize animation
animate(16,12);
