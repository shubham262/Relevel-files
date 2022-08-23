 //your code here

 //TRIPLET SUM
//  arr.sort((a,b)=>a-b)
        
//  for(let i=0;i<=n-2;i++){
//      var start=i+1
//      var end=n-1
     
//      while(start<end){
//         if(arr[i]+arr[start]+arr[end]===0){return true} //1  0
//         else if(arr[i]+arr[start]+arr[end]>0){
//             end--
//         }
//         else{
//           start++  
//         }
         
//      }
     
//  }
//  return false



// function armstrong(inp){
//     var temp=inp
//     var n=inp.length
// }



//quick sort

// function partition(arr,start,end)
// {
// var pivot=arr[end]

// var i=start
// for(let j=start;j<=end-1;j++){
//     if(arr[j]<pivot){
//         var temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++
       

//     }
// }
// arr[end]=arr[i]
// arr[i]=pivot
// return i

// }
// function quick(arr,start=0,end=arr.length-1){

//     if(start>=end){
//         return
//     }

//     var p=partition(arr,start,end)
//     console.log(p)
//     quick(arr,start,p-1)
//     quick(arr,p+1,end)
// }
// var a=[9,8,7,6,5]
// console.log(a)
// quick(a)
// console.log(a)