var maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];

function isSafe(maze,i,j){
    console.log(i,j)
    return (i>=0 && i<maze.length && j>=0 && j<maze.length && maze[i][j]==1)
}

function solve(maze,x=0,y=0,ans=[],str=""){


if(x==maze.length-1 && y==maze.length-1 && maze[x][y]==1){
    console.log(str)
    ans.push(str)
    return true
}

if(isSafe(maze,x,y)){
    

solve(maze,x+1,y,ans,str+'D')

solve(maze,x,y-1,ans,str+'L')

solve(maze,x,y+1,ans,str+'R')
solve(maze,x-1,y,ans,str+'U'

}

return false


}

console.log(solve(maze))