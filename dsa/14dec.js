//  var a="My age is 20"
//  var arr=a.split(" ")
// var ans;
//  for(let i=0;i<arr.length;i++){
//     if(+arr[i]!==NaN){
//         ans=+arr[i]
//     }
//  }
//  console.log(ans)

// setTimeout(()=>{
//   console.log(1);
//   Promise.resolve().then(()=>{
//     console.log(2);
//   });
  
// },0);
// //0sec  

// Promise.resolve().then(()=>{o
//   console.log(3);
//   setTimeout(()=>{
//     console.log(4);
    
//   },0);
// });




//gfgf rat and maze

class Solution {
    
    isSafe(maze,visited, i, j) {

    return (i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] == 1 && visited[i][j]===false);
}

ratandmaze(maze,visited,n,ans=[],temp="",i=0,j=0){
    
    if(i==n-1 && j==n-1 && maze[i][j]==1 && visited[i][j]==false){
        ans.push(temp)
        return ans
    }
    
   
      if(this.isSafe(maze,visited, i, j)) {
           visited[i][j]=true
           
           
       //down
      
        if(this.ratandmaze(maze,visited,n,ans,temp+'D',i+1,j))return true
       
       
       
        //right
          this.ratandmaze(maze,visited,n,ans,temp+'R',i,j+1)
       
           //left
          this.ratandmaze(maze,visited,n,ans,temp+'L',i,j-1)
           
           
           //up
          
          this.ratandmaze(maze,visited,n,ans,temp+'U',i-1,j)
       
      
       visited[i][j]=false
       
      }
      return ans
    
}


    findPath(m,n){
        //code here
        
        var visited=[]
        var demo=[]
        for(let i=0;i<n;i++){
        demo.push(false)
        }
        for(let i=0;i<n;i++){
            visited.push([...demo])
        }
        return this.ratandmaze(m,visited,n)
        
        
    }
}



//kngihts tour
// var n=5
// var temp=[]
// var board=[]
// for(let i=0;i<n;i++){
//     temp.push(0)
// }

// for(let i=0;i<n;i++){
//     board.push([...temp])
// }



// function isSafe(maze, i, j) {

//     return (i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] == 0);
// }

// function knights(maze,n,i,j,move=1){
    
 
    
   
//       if(isSafe(maze, i, j)) {


//         if(move===n*n){
//             maze[i][j]=move
//             console.log(maze)
//             maze[i][j]=0
//             return

//         }



//         maze[i][j]=move

//         knights(maze,n,i-2,j+1,move+1)
//         knights(maze,n,i-1,j+2,move+1)
//         knights(maze,n,i+1,j+2,move+1)
//         knights(maze,n,i+2,j+1,move+1)
//         knights(maze,n,i+2,j-1,move+1)
//         knights(maze,n,i+1,j-2,move+1)
//         knights(maze,n,i-1,j-2,move+1)
//         knights(maze,n,i-2,j-1,move+1)
//        maze[i][j]=0
      
//        return 
//       }
//       return 
    
// }
// console.log(knights(board,n,2,2))


// var a=[1,2,3]

// var c=a.map(e=>e>=2)
// console.log(c)


// var isvalid=function(board,r,c,v){
    
    
//     for(let i=0;i<9;i++){
//      //colum traversal 
//         if(board[i][c]==v){
//             return false
//         }
        
//         //row
//         if(board[r][i]==v){
//             return false
//         }
//         let nrow=3*Math.floor(r/3)+Math.floor(i/3);
//         let ncol=3*Math.floor(c/3)+Math.floor(i%3);
        
//         if(board[nrow][ncol]==v){
//             return false
//         }
//         }
    
//     return true;
// }



// var solve=function(board) {

// for(let i=0;i<9;i++){
//     for(let j=0;j<9;j++){
        
//         if(board[i][j]=='.'){
            
//             for(let k=1;k<=9;k++){
                
//                 if(isvalid(board,i,j,`${k}`)){
//                     board[i][j]=`${k}`
                    
//                     if(solve(board)){
//                         return true;
//                     }
//                     else{
//                         board[i][j]='.'
//                     }
                    
//                 }
                
                
//             }
//             return false
//          }
//     }
// }
//   return true; 

// }


// var solveSudoku = function(board) {
//     solve(board)
//     };



// var isSasfe=function(row,col,board,n){

//     let nrow=row
//     let ncol=col
//     while(row>=0 && col>=0){
//         if(board[row][col]==='Q'){
//             return false
//         }
//         row--
//         col--
//     }

//     row=nrow
//     col=ncol

//       while(col>=0){
//         if(board[row][col]==='Q'){
//             return false
//         }
       
//         col--
//       }
  
//     col=ncol
//   while(row<n && col>=0){
//         if(board[row][col]==='Q'){
//             return false
//         }
//         row++
//         col--
//     }

//   return true;

// }
// var solve=function(board,n,col=0,ans=[]){

// if(col==n){
//     let temp=board.map(e=>e.join(''))
//     ans.push(temp)
//     return ans;
// }


// for(let i=0;i<n;i++){
// if(isSasfe(i,col,board,n)){
// board[i][col]='Q'
// solve(board,n,col+1,ans)
// board[i][col]='.'
// }

// }
// return ans

// }

// var solveNQueens = function(n) {

// let board=[]
// let temp=[]
// for(let i=0;i<n;i++){
//     temp.push(".")
// }
// for(let i=0;i<n;i++){
//     board.push([...temp])
// }

// return solve(board,n)


// };