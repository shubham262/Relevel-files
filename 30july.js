
// >100
//larger size arrays --->merge sort ( use 2 extrar fo storing + nlonn time)
//smaller size arrays --> quick sort faster( use 0(1) extra space +nlogn i the)

// 1 0 1 1 0



// function allpossible(input,target,ans=[],cur=Number(input[0]),index=0,temp=[input[0]]){

// if(index>=input.length-1){
//     if(cur===target){
//         ans.push((temp.slice()).join(""))
//     }

   

//     return
// }


// //for +
// cur+=Number(input[index+1])
// temp.push('+')
// temp.push(Number(input[index+1]))
// allpossible(input,target,ans,cur,index+1,temp)

// cur-=Number(input[index+1])
// temp.pop()
// temp.pop()

// //for -
// cur-=Number(input[index+1])
// temp.push('-')
// temp.push(Number(input[index+1]))
// allpossible(input,target,ans,cur,index+1,temp)

// cur+=Number(input[index+1])
// temp.pop()
// temp.pop()


// //for mul
// cur=cur*Number(input[index+1])
// temp.push('*')
// temp.push(Number(input[index+1]))
// allpossible(input,target,ans,cur,index+1,temp)

// cur=cur/Number(input[index+1])
// temp.pop()
// temp.pop()

// // doing nothing

// return ans
// }

// console.log(allpossible("123",6))

// function partitionAlgo(arr, start, end) {
//     let pointer = start//start from the first element of the array
//     let pivotIndex = parseInt(start + (Math.random() * ((end + 1) - start)))
//     console.log(pivotIndex)
//     let pivot = arr[pivotIndex]  //Random number is taken as pivot
//     for (let i = start; i <= end; i++) {
//         if (arr[i] < pivot) {
//             let temp = arr[i]
//             arr[i] = arr[pointer]
//             arr[pointer] = temp
//             pointer++
//         }
//     }
//     arr[pivotIndex] = arr[pointer]
//     arr[pointer] = pivot
//     return pointer
// }
// function quicksort(arr, start, end) {
//     if (start >= end) return //base case
//     let x = partitionAlgo(arr, start, end)//gives the index of the pivot element
//     quicksort(arr, start, x - 1)//left array, from 0 to 1 element before pivot
//     quicksort(arr, x + 1, end)//right array, from next elemnt of pivot to end of the array
// }
// arr = [3, 2, 7, 1, 8, 9, 6, 11, 23, 4, 5]
// quicksort(arr, 0, arr.length - 1)
// console.log(arr)
