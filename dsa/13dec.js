//printing 1 to n
//n=4

// function print(n,i=1){

// if(i===n){
//     console.log(i)
//     return
// }
 

//  console.log(i)
//  print(n,i+1)

// //  return undefined
// }
// print(4)
// //1 2 3 4
//pallindrom
// function pallindrom(str,s=0,e=str.length-1){

//     if(s>=e){
//         return true
//     }

//     if(str[s]!==str[e]){
//         return false
//     }
//      return pallindrom(str,s+1,e-1)
    


// }
// console.log(pallindrom("aba"))


// function sumofdigits(n){

//     if(n==0){
//         return 0
//     }

//     var remainder=n%10
//     var sum=sumofdigits(Math.floor(n/10))
//     return  remainder+sum


// }
// console.log(sumofdigits(4444))

// function fibonacci(n){

// if(n==0||n==1){
// return n
// }

// return fibonacci(n-1)+fibonacci(n-2)

// }
// console.log(fibonacci(6))

// function countzeroes(n){
//     if(n==0){
//         return 0
//     }

//     var rem=n%10
//     var result=countzeroes(Math.floor(n/10))
//     if(rem==0){
//         return 1+result
//     }
//     return result
// }
// console.log(countzeroes(10010))


//permutation //1001
// function permutation(arr,index=0,ans={},temp=[...arr]){

    
// if(index>=arr.length){
    
//     ans[temp]=temp.slice()
    
//     return Object.values(ans)
// }
// for(let i=index;i<arr.length;i++){
//     let demo=temp[index]
//     temp[index]=temp[i]
//     temp[i]=demo

//     permutation(arr,index+1,ans,temp)

//     demo=temp[index]
//     temp[index]=temp[i]
//     temp[i]=demo
// }
// return Object.values(ans)

// }
// console.log(permutation([1,2,3]))


//tower of honoi
// function tower(n){
//     if(n==0){
//         return 0
//     }
//    return tower(n-1)+1+tower(n-1)
// }
// console.log(tower(3))


//staircase
// function staircase(n){

//     if(n<0){
//         return 0
//     }
//     if(n==0||n==1){
//         return 1
//     }

//     return staircase(n-1)+staircase(n-2)+staircase(n-3)
// }
// console.log(staircase(9))


//hard question
// function subseq(arr,index=0,temp=[],ans={}){

// if(index>=arr.length){
//     ans[temp]=temp.slice()
//     return Object.values(ans).length
// }
// //picking
// temp.push(arr[index])
// subseq(arr,index+1,temp,ans)

// //not picking
// temp.pop()
// subseq(arr,index+1,temp,ans)

// return Object.values(ans).length

// }

// console.log(subseq([1,2,1,3]))

