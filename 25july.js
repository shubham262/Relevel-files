// //quick 

// /*
// iterate till last-1 index
// if(j<pivot)==>swapping i ,and j i++,j++
// ig(j>pivot)==> j++

// swap i with pivot

// return i

// t(n)=n+t(n-1)
// t(n-1)=n-1+t(n-2)
// t(n-2)=n-2+t(n-3)




// 1=1
// t(n)=n+n-1+n-2+n-3-----1
// =O(n^2)





// // */


// // function partition(arr,start,end){

// //     var pivot=arr[end]//0//1

// //     var i=start
// //     for(let j=start;j<=end-1;j++){

// //         if(arr[j]<pivot){
// //             var temp=arr[i]
// //             arr[i]=arr[j]
// //             arr[j]=temp
// //             i++

// //         }
// //     }
// //     arr[end]=arr[i]
// //     arr[i]=pivot

// //     return i

// // }
// // function quicksort(arr,start=0,end=arr.length-1){


// // if(start>=end){
// //     return
// // }
// // var p=partition(arr,start,end)
// // console.log(p)
// // quicksort(arr,start,p-1)
// // quicksort(arr,p+1,end)

// // }
// // var a=[2,8,10,0,1]
// // console.log(a)
// // quicksort(a)
// // console.log(a)




// // 010100101010//nlogn
// // 0(n)  0(1)


// // Input: A[] = [3, 2, 1, 2, 1, 7]
// // Output: 6
// // Explanation:  After 6 moves, the array could be 
// // [3, 4, 1, 2, 5, 7].
// // It can be shown that it is impossible for the array 
// // to have all unique values with 5 or less moves.

// // Input: A[] = [1, 2, 2]
// // Output: 1
// // Explanation: After 1 move [2 -> 3], the array cou

// // function minimum(arr){
// //     var ans=0
// //     var obj={}
// //     for(let i=0;i<arr.length;i++){
// //         if(obj[arr[i]]){
// //             obj[arr[i]].value++
// //             obj[arr[i]].index.push(i)
// //         }
// //         else{
// //             obj[arr[i]]={
// //                 value:1,
// //                 index:[i]
// //             }
// //         }
// //     }
// //     console.log(obj)
// // Object.keys(obj).map(function(item){

// //     if(obj[item].value>1){
// //       //find the closest element which does not exist
// //       var i=Number(item)+1
// //       for(let j=1;j<obj[item].index.length;j++){

       
// //         while(obj[i]!==undefined){
// //            i++
// //         }
// //         arr[obj[item].index[j]]=i
// //         obj[i]=1
// //         ans+=i-Number(item)
// //         i=i+1

// //       }
    
     
// //     }



// // })
// // console.log(ans)

// // }
// // var a=[3, 2, 1, 2, 1, 7]
// // minimum(a)
// // console.log(a)


// // function minimumIncrement(arr) {
// //     let len = arr.length;
// //     if(len<2) return 0;
// //     arr.sort((a, b) => a-b);
// //     let result =0;
    
// //     for(let i =1;i<len;i++){
// //       if(arr[i] <= arr[i-1]) {
// //           result = result + arr[i-1]-arr[i]+1;
// //           arr[i] = arr[i-1] +1;
// //       }    
// //     }
    
// //     return result;
    
// // };

// // let arr = [3, 2, 1, 2, 1, 7];
// // let n = arr.length;
// // console.log(minimumIncrement(arr, n));





// // function partition(arr,start,end){

// //     var pivot=arr[end]//0//1

// //     var i=start
// //     for(let j=start;j<=end-1;j++){

// //         if(arr[j]<pivot){
// //             var temp=arr[i]
// //             arr[i]=arr[j]
// //             arr[j]=temp
// //             i++

// //         }
// //     }
// //     arr[end]=arr[i]
// //     arr[i]=pivot

// //     return i

// // }
// // function quicksort(arr,k,start=0,end=arr.length-1){


// // // if(start>=end){
// // //     return 
// // // }
// // var p=partition(arr,start,end)

// // if(p-1===k-1){return arr[p]}
// // if(p-1>k-1){
// //    return quicksort(arr,k,start,p-1)
// // }

// // return quicksort(arr,k,p+1,end)



// // }
// // var a=[2,8,10,0,1]
// // // console.log(a)
// // console.log(quicksort(a,))
// // console.log(a)

// // function _partition(arr, low, high)
// // {
// //     let pivot = arr[high], pivotloc = low;
// //         for (let i = low; i <= high; i++)
// //         {
          
// //             // inserting elements of less value
// //             // to the left of the pivot location
// //             if (arr[i] < pivot)
// //             {
// //                 let temp = arr[i];
// //                 arr[i] = arr[pivotloc];
// //                 arr[pivotloc] = temp;
// //                 pivotloc++;
// //             }
// //         }
   
// //         // swapping pivot to the final pivot location
// //         let temp = arr[high];
// //         arr[high] = arr[pivotloc];
// //         arr[pivotloc] = temp;
   
// //         return pivotloc;
// // }
  
// // // finds the kth position (of the sorted array)
// //     // in a given unsorted array i.e this function
// //     // can be used to find both kth largest and
// //     // kth smallest element in the array.
// //     // ASSUMPTION: all elements in arr[] are distinct
// // function kthSmallest(arr, low, high, k)
// // {
  
// //     // find the partition
// //         let partition = _partition(arr, low, high);
   
// //         // if partition value is equal to the kth position,
// //         // return value at k.
// //         if (partition == k - 1)
// //             return arr[partition];
   
// //         // if partition value is less than kth position,
// //         // search right side of the array.
// //         else if (partition < k - 1)
// //             return kthSmallest(arr, partition + 1, high, k);
   
// //         // if partition value is more than kth position,
// //         // search left side of the array.
// //         else
// //             return kthSmallest(arr, low, partition - 1, k);
// // }
// // let arraycopy = [10, 4, 5, 8, 6, 11, 26 ];
// // let kPosition = 7;
// // let length = arraycopy.length;
// // console.log(kthSmallest(arraycopy, 0, length - 1,
// //     kPosition))



    
// // function p(arr,start,end){

// //     var pivot=arr[end]//0//1

// //     var i=start
// //     for(let j=start;j<=end-1;j++){

// //         if(arr[j]<pivot){
// //             var temp=arr[i]
// //             arr[i]=arr[j]
// //             arr[j]=temp
// //             i++

// //         }
// //     }
// //     arr[end]=arr[i]
// //     arr[i]=pivot

// //     return i

// // }
// // function quicksort(arr,start=0,end=arr.length-1,k){


// //     if(start>=end){
// //         return 
// //     }
// //     var p=partition(arr,start,end)
    
// //     if(p-1===k-1){return arr[p]}
// //     if(p-1>k-1){
// //        return quicksort(arr,k,start,p-1)
// //     }
    
// //     return quicksort(arr,k,p+1,end)
    
    
    
// //     }
// // function kthSmallest(arr, low, high, k)
// // {
  
// //     // find the partition
// //         let partition = p(arr, low, high);
   
// //         // if partition value is equal to the kth position,
// //         // return value at k.
// //         if (partition == k - 1)
// //             return arr[partition];
   
// //         // if partition value is less than kth position,
// //         // search right side of the array.
// //         else if (partition < k - 1)
// //             return kthSmallest(arr, partition + 1, high, k);
   
// //         // if partition value is more than kth position,
// //         // search left side of the array.
// //         else
// //             return kthSmallest(arr, low, partition - 1, k);
// // }
// // let arraycopy = [10, 4, 5, 8, 6, 11, 26 ];
// // let kPosition = 1;
// // let length = arraycopy.length;
// // console.log(kthSmallest(arraycopy, 0, length - 1,
// //     kPosition))


// function _partition(arr, low, high)
// {
//     let pivot = arr[high], pivotloc = low;
//         for (let i = low; i <= high; i++)
//         {
          
//             // inserting elements of less value
//             // to the left of the pivot location
//             if (arr[i] < pivot)
//             {
//                 let temp = arr[i];
//                 arr[i] = arr[pivotloc];
//                 arr[pivotloc] = temp;
//                 pivotloc++;
//             }
//         }
   
//         // swapping pivot to the final pivot location
//         let temp = arr[high];
//         arr[high] = arr[pivotloc];
//         arr[pivotloc] = temp;
   
//         return pivotloc;
// }
  
// // finds the kth position (of the sorted array)
//     // in a given unsorted array i.e this function
//     // can be used to find both kth largest and
//     // kth smallest element in the array.
//     // ASSUMPTION: all elements in arr[] are distinct
// function kthSmallest(arr, low, high, k)
// {
  
//     // find the partition
//         let partition = _partition(arr, low, high);
   
//         // if partition value is equal to the kth position,
//         // return value at k.
//         if (partition == k - 1)
//             return arr[partition];
   
//         // if partition value is less than kth position,
//         // search right side of the array.
//         else if (partition < k - 1)
//             return kthSmallest(arr, partition + 1, high, k);
   
//         // if partition value is more than kth position,
//         // search left side of the array.
//         else
//             return kthSmallest(arr, low, partition - 1, k);
// }