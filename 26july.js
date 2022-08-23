
// function partition(arr,start,end){

//         var pivot=arr[end]//0//1
    
//         var i=start
//         for(let j=start;j<=end-1;j++){
    
//             if(arr[j]<pivot){
//                 var temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//                 i++
    
//             }
//         }
//         arr[end]=arr[i]
//         arr[i]=pivot
    
//         return i
    
//     }

// function kthSmallest(arr,k,start=0,end=arr.length-1){
// if(k<0||k>arr.length){return -1}

// var p=partition(arr,start,end)

// if(p==k-1){return arr[p]}

// else if(p<k-1){
//     return kthSmallest(arr,k,p+1,end)

// }
// else{
//     return kthSmallest(arr,k,start,p-1)
// }


// }
// var a=[1,2,34,2,3,11,1,1,11111,111111]//5
// var size=a.length
// var t=2
// var k=a.length-t+1
// console.log(kthSmallest(a,4))




































// // function partition(arr,start,end){

// //         var pivot=arr[end]//0//1
    
// //         var i=start
// //         for(let j=start;j<=end-1;j++){
    
// //             if(arr[j]<pivot){
// //                 var temp=arr[i]
// //                 arr[i]=arr[j]
// //                 arr[j]=temp
// //                 i++
    
// //             }
// //         }
// //         arr[end]=arr[i]
// //         arr[i]=pivot
    
// //         return i
    
// //     }


// // function kthSmallest(arr,k,start=0,end=arr.length-1){

// //  let p=partition(arr,start,end)

// //     if(p===k-1){
// //         return arr[p]
// //     }

// //     else if(p<k-1){
// //         return kthSmallest(arr,k,p+1,end)
// //     }
// //     else{
// //         return kthSmallest(arr,k,start,p-1)
// //     }




// // }
// // var a=[2,8,10,0,1]

// // console.log(kthSmallest(a,size))
