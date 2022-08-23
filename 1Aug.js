// // function partitionAlgo(arr, start, end) {
// //     let pointer = start//start from the first element of the array
// //     let pivotIndex = parseInt(start + (Math.random() * ((end + 1) - start)))

// //     //swap last element with pivot index
// //     // so that pivotindex element can come at last position
// //     // and we can choose it as pivot

// //     let tempo=arr[pivotIndex]
// //     arr[pivotIndex]=arr[end]
// //     arr[end]=tempo



// //     console.log(pivotIndex)
// //     let pivot = arr[end]  //Random number is taken as pivot
// //     for (let i = start; i <= end-1; i++) {
// //         if (arr[i] < pivot) {
// //             let temp = arr[i]
// //             arr[i] = arr[pointer]
// //             arr[pointer] = temp
// //             pointer++
// //         }
// //     }
// //     arr[end] = arr[pointer]
// //     arr[pointer] = pivot
// //     return pointer
// // }
// // function quicksort(arr, start, end) {
// //     if (start >= end) return //base case
// //     let x = partitionAlgo(arr, start, end)//gives the index of the pivot element
// //     // console.log(arr)
// //     quicksort(arr, start, x - 1)//left array, from 0 to 1 element before pivot
// //     quicksort(arr, x + 1, end)//right array, from next elemnt of pivot to end of the array
// // }
// // arr = [3, 2, 7, 1, 8, 9, 6, 11, 23, 4, 5]
// // quicksort(arr, 0, arr.length - 1)
// // console.log(arr)
// // // 











// function swap(arr, x, y){
//     let temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
// }

// function getRandom(min, max){
//     return parseInt(min + (Math.random() * (max-min)));
// }

// function partition(arr, start, end){ 
//     //take random pivot
//     let randomIdx = getRandom(start, end+1);
//     // console.log(randomIdx)
//     let pivot = arr[randomIdx];
//     while(start < end){
//         while(arr[start] > pivot){//for decreasing order
//             start++;
//         }

//         while(arr[end] < pivot){//for decreasing order
//             end--;
//         }
//         if(start <= end){
//             swap(arr, start, end);
//         }
//     }
//     return start;
// }

// function quickSort(arr, start, end){ 
//     if(start >= end){
//         return;
//     }

//     let pivotIdx = partition(arr, start, end);
//     // console.log(arr)
//     quickSort(arr, start, pivotIdx-1);//left part
//     quickSort(arr, pivotIdx+1, end);//right part
// }

// let arr = [7,3,1,2,1,0,9,6,8,4,5]
// console.log(arr);
// quickSort(arr, 0,arr.length-1);
// console.log(arr);

// // [7,3,1,2,1,0,9,6,8,4,5];





























