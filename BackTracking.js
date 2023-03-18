// Basic Example......................................................................................................

function print(n){
    if(n>5)return
    print(n+1)
    console.log(n);
}

print(1)

// 1. N Queen problem...............................................................................................

let n= 4;

var solveNQueens = function(n) {
    var chessBoard = new Array(n);
    for(var i = 0; i < n; i++) {
        chessBoard[i] = new Array(n).fill(".");
    }
    let result=[]
    var isValid=function(row,col){
        for(let j=0;j<n;j++){//same row
            if(chessBoard[row][j]=="Q")return false
        }
        for(let j=0;j<n;j++){//same colomn
            if(chessBoard[j][col]=="Q")return false
        }
        //left diagnol
        let i=row
        let j=col
        while(i>=0&&j>=0){
            if(chessBoard[i][j]=="Q")return false;
            i--
            j--
        }
        //right diagnol
        i=row
        j=col
        while(i>=0&&j<n){
            if(chessBoard[i][j]=="Q")return false;
            i--
            j++
        }
        return true
    }

    var backtrack=function(row){
        if(row>=n){
            result.push([...chessBoard].map(row => row.join('')));
            return
        }

        for(let col=0;col<n;col++){
            if(isValid(row,col)==true){
                chessBoard[row][col]="Q"
                backtrack(row+1)
                chessBoard[row][col]="."
            }
        }
    }
    backtrack(0)
    return result

};
console.log(solveNQueens(n));

// 2. Sudoko Solver

let board= [["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]] 

var solveSudoku = function(board) {
    const EMPTY = '.'
   const emptyPoints = [];
   const possibleNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
   for (let i = 0; i < board.length; i += 1) {
       for (let j = 0; j < board[i].length; j += 1) {
           if (board[i][j] === EMPTY) {
               emptyPoints.push({ row: i, col: j })
           }
       }
   }
   function isValid(num,row,col,board){
       for(let j=0;j<board.length;j++){
           if(board[row][j]==num)return false
       }
       for(let j=0;j<board.length;j++){
           if(board[j][col]==num)return false
       }

       const rowStart = Math.floor(row / 3) * 3
       const colStart = Math.floor(col / 3) * 3
       for (let i = rowStart; i < rowStart + 3; i += 1) {
           for (let j = colStart; j < colStart + 3; j += 1) {
               if (board[i][j] === num) {
                   return false;
               }
           }
       }
       
       return true;
   }
   function backtrack(n){
       if(n>=emptyPoints.length)return true

       const {row,col}=emptyPoints[n]

       for(let i=0;i<possibleNumbers.length;i++){
           if(isValid(possibleNumbers[i],row,col,board)){
               board[row][col]=possibleNumbers[i]
               var next=backtrack(n+1)
               if(next)return true
               board[row][col] = EMPTY;
           }
       }
       return false
   }
   backtrack(0)
   return board
};
console.log(solveSudoku(board));