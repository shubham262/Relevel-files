//Solution for sudoku solver leetcode
//link:-https://leetcode.com/problems/sudoku-solver/

//solution


var isValid=function(board,r,c,v){
    for(let i=0;i<9;i++){
        if(board[i][c]==v){
            return false
        }

        if(board[r][i]==v){
            return false
        }
       let nrow=3*Math.floor(r/3)+Math.floor(i/3);
       let ncol=3*Math.floor(c/3)+Math.floor(i%3);
        if(board[nrow][ncol]==v){
            return false;
        }
    
    
    
    }

return true;


}

var solve=function(board){

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]=='.'){
                for(let k=1;k<=9;k++){
                    if(isValid(board,i,j,`${k}`)){
                        board[i][j]=`${k}`
                       if(solve(board)){
                           return true
                       }
                       else{
                           board[i][j]='.'
                       }

                    }
                }
                return false;
            }
        }
    }
    return true

}
var solveSudoku = function(board) {
solve(board);

};