//5 1 2 3 4
// minimum element in this rotated sported array
//output : 1

//finding the mid ele
//how many times array is rotated


//return the index of an elemnt in a rotated sorted array
//5 1 2 3 4  key 5
// output 0


// function binarysearch(arr,n=arr.length){

    
//     var s=0
//     var e=n-1

//     while(s<=e){
//         let mid=s+Math.floor((e-s)/2)
//         let next=(mid+1)%n
//         let prev=(mid-1+n)%n

//         if(arr[mid]<arr[prev] && arr[mid]<arr[next]){
//             return mid
//         }

//         else if(arr[mid]<=arr[e]){
//             e=mid-1
//         }
//         else{
//             s=mid+1
//         }

//     }

// }


// console.log(binarysearch([3,4,5,1,2]))

