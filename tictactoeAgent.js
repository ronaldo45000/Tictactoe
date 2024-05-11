// Tic Tac Toe
class Agent {
    constructor() {

    }

    // Rewrite the Minimax algorithm 

    minimax(board, isMaximizing) {
        const gameOver = board.gameOver();
        if (gameOver) return gameOver === 1 ? 1 : gameOver === 2 ? -1 : 0;
     //Have Arrays to store scores and corresponding moves

        const scores = [];
        const moves = [];
        let i = 0;
        // Loop through all cells
        while(i < board.cells.length){            
            const cell = i + 1;
            //  If the cell is free, simulate the move and perform the recursive on minimax

            if (board.cellFree(cell)) {
                const newBoard = board.clone();
                newBoard.move(cell);
                scores.push(this.minimax(newBoard, !isMaximizing));
                moves.push(cell);
            }
            i++;

        }
        
        return isMaximizing ? Math.max(...scores) : Math.min(...scores);
    }
// select the best move using the minimax algorithm
    selectMove(board) {

        const maximizing = board.playerOne;
        const scores = [];
        const moves = [];
    
        let i =0;
        // // Loop through all cells
        while(i < board.cells.length){
      
            const cell = i + 1;
            if (board.cellFree(cell)) {
                const newBoard = board.clone();
                newBoard.move(cell);
                scores.push(this.minimax(newBoard, !maximizing));
                moves.push(cell);
            }
            i++;
        }
    
                // Return the best move

        return moves[maximizing ? scores.indexOf(Math.max(...scores)) : scores.indexOf(Math.min(...scores))];
    }
}