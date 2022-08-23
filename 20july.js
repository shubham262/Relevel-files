//merge sort without extra space  O(1)
/*

create two pointers

start comparing both the pointer elemenst
if(left is small)==>increment the left pointer
else==> firts store right pointer variable
        shift left array elements by 1
        push stored variable
        imcrement everytnig including mid

t(n)=2t(n/2)+kn
2t(n/2)=4t(n/4)+kn
4t(n/4)=8t(n/8)+kn



 2^x t(1)=k

 t(n)=kn+kn+kn+kn+----- k
  k(n+nnnnnnn)
  k(nlogn)
  no of terms =logn


O(nlogn)



// */
// function merge(arr,start,mid,end){//n

//     if(arr[mid]<arr[mid+1]){
//         return 
//     }

//     var leftpointer=start
//     var rightpointer=mid+1


//     while(leftpointer<=mid && rightpointer<=end){
//         if(arr[leftpointer]<=arr[rightpointer]){
//             leftpointer++
//         }
//         else{
//             var temp=arr[rightpointer]
//             for(let i=rightpointer;i>=leftpointer;i--){
//                 arr[i]=arr[i-1]
//             }
//             arr[leftpointer]=temp
//             leftpointer++
//             rightpointer++
//             mid++
// }
// }
// }

// function mergesort(arr,start=0,end=arr.length-1){
// if(start>=end){
//     return
// }

// var mid =parseInt((start+end)/2)
//  mergesort(arr,start,mid)//n/2
//  mergesort(arr,mid+1,end)//n/2

//  //merge this
//     merge(arr,start,mid,end)
//     return
// }

// var a=[6,7,89,10]
// mergesort(a)
// console.log(a)