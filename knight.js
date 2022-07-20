function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}



//console log the dvd logo bouncing around the screen
//animate DVDlogo and move draw to console



const gameboard = (height,width,DVDlogopositiony,DVDlogopositionx) => {
    let board = [];
    for (let i = 0; i < height; i++) {
        board[i] = [];
        for (let j = 0; j < width; j++) {
            board[i][j] = '`___`';
        }
    }
    board[DVDlogopositiony][DVDlogopositionx] = 'DVD';
    return board;
}

//start DVDlogo animation
const animate = (gameboardheight,gameboardwidth) => {
    let DVDlogopositiony = 2;
    let DVDlogopositionx = 6;
    let DVDlogodirectiony = 1;
    let DVDlogodirectionx = 1;
    setInterval(() => {
        //screen clear
        document.querySelector('#gameboard').innerHTML = '';
        document.querySelector('#gameboard').innerHTML = gameboard(gameboardheight,gameboardwidth,DVDlogopositiony,DVDlogopositionx).join('<br>');
        
        //if DVDlogo is at the end of the board, change direction
        if (DVDlogopositiony === gameboardheight-1){
            DVDlogodirectiony = -1;
            document.querySelector('#gameboard').style.background = random_bg_color();
            if (Math.floor(Math.random() * 2) === 0){
                DVDlogopositiony--;
            }
        }
        if (DVDlogopositionx === gameboardwidth-1){
            DVDlogodirectionx = -1;
            document.querySelector('#gameboard').style.background = random_bg_color();
            if (Math.floor(Math.random() * 2) === 0){
                DVDlogopositionx--;
            }
        }
        if (DVDlogopositiony === 0){
            DVDlogodirectiony = 1;
            document.querySelector('#gameboard').style.background = random_bg_color();
            if (Math.floor(Math.random() * 2) === 0){
                DVDlogopositiony++;
            }
        }
        if (DVDlogopositionx === 0){
            DVDlogodirectionx = 1;
            document.querySelector('#gameboard').style.background = random_bg_color();
            if (Math.floor(Math.random() * 2) === 0){
                DVDlogopositionx++;
            }
        }
        DVDlogopositiony=DVDlogopositiony+DVDlogodirectiony;
        DVDlogopositionx=DVDlogopositionx+DVDlogodirectionx;
    }, 350);
}

//initialize animation
animate(16,12);
