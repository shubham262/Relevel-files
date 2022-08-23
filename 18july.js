//selection sorting algorithm
//traverse
//we have to find min in rest ele
//if it smaller cuurnt the swap
//else move ahead

// var arr=[6,5,5,2,2]

// // ascending
// for(let i=0;i<arr.length;i++){//i=0

//         var min=Infinity//99999999
//         var index=-1//-1
//     for(let j=i+1;j<arr.length;j++){///1 2 3 4
//             if(arr[j]<min){//5<2
//                 min=arr[j]//5-->2
//                 index=j//1-->3
//             }
//     }

//     if(min<arr[i]){
//         var temp=arr[i]
//         arr[i]=arr[index]
//         arr[index]=temp

//     }

// }
// console.log(arr)

// for(let i=0;i<arr.length;i++){//i=0

//         var max=-Infinity//-99999999
//         var index=-1//-1
//     for(let j=i+1;j<arr.length;j++){///1 2 3 4
//             if(arr[j]>max){//5<2
//                 max=arr[j]//5-->2
//                 index=j//1-->3
//             }
//     }

//     if(max>arr[i]){
//         var temp=arr[i]
//         arr[i]=arr[index]
//         arr[index]=temp

//     }

// }
// console.log(arr)

// var arr=[6,5,5,2,2]//[]
// var ans=[]//extra space

// while(arr.length){
//     var min=Math.min(...arr)
//     var index=arr.indexOf(min)
//     arr.splice(index,1)
//     ans.push(min)
    
// }
// console.log(ans)


// var arr=[6,5,5,2,2]//[2,5,5,6,2]
// function selectionSort(arr,index=0){//1 5
// if(index===arr.length){///0
//     return
// }

//    var sm=-1
//    var min=Infinity
//     for(let j=index+1;j<arr.length;j++){///
//             if(arr[j]<min){//5<2
//                 min=arr[j]//5-->2
//                 sm=j//1-->3
//             }
//     }

//     if(min<arr[index]){//2  3
//         var temp=arr[index]
//         arr[index]=arr[sm]
//         arr[sm]=temp

//     }
//     selectionSort(arr,index+1)
// }

// selectionSort(arr)
// console.log(arr)

//insertion sort

// var a=[10,2,3,44,15]
//[10,10,3,44,15]
//start traversal from i=1
//find the correct position
//move ahead

// for(let i=1;i<a.length;i++){
// var key =a[i]
// var j=i-1

// while(j>=0 && a[j]>key ){//j=0

// a[j+1]=a[j]//a[1]=a[0]
// j--//-1

// }
// a[j+1]=key
// }
// console.log(a)


// N = 7
// Arr = {1, 2, 3, 5, 4, 7, 10}
// Output:
// 7 5 3 1 2 4 10
// Explanation:
// Array elements 7 5 3 1 are odd
// and sorted in descending order,
// whereas 2 4 10 are even numbers
// and sorted in ascending order.
// var arr=[86,93,82,78,35,94,91,17,12,51,90]
// var odd=[]//93
// var even=[]//82 86
// for(let i=0;i<arr.length;i++){//0 1 2 4
// if(arr[i]%2===0){
//  var key =arr[i]//86 82 78
// var j=even.length-1// 1
// while(j>=0 && arr[j]>key ){//j=0
// even[j+1]=even[j]//a[1]=a[0]
// j--
// }
// even[j+1]=key
// }
// else{
//     var key =arr[i]//93
//     var j=odd.length-1//-1
//     while(j>=0 && arr[j]<key ){//j=0
//     odd[j+1]=odd[j]//a[1]=a[0]
//     j--
//     }
//     odd[j+1]=key
// }

// }
// console.log(odd,even)
// arr.length=0
// for(var i=0;i<odd.length;i++){
//     arr[i]=odd[i]
// }
// for(let j=0;j<even.length;j++){
//     arr[i]=even[j]
//     i++
// }


// function maxsubarray(arr){
//     let solution=arr[0];
//     for(let i=1;i<arr.length;i++){
//       arr[i]=Math.max(arr[i],arr[i]+arr[i-1]);
//       solution=Math.max(solution,arr[i]);
//     }
//     return solution;
//   }
//     let arr=[-2,1,-3,4,-1,2,1,-5,4];
//     console.log(maxsubarray(arr));


// var a=[1,2,3,4,5]
// var n=a.length
// for(let i=0;i<n;i++){


// for(let j=i;j<n;j++){
// var temp=[]
// for(let k=i;k<=j;k++){
//     temp.push(a[k])
// }
// console.log(temp)
// }
// }

// console.log(temp)
function allpalpartitions(input){
    let n = input.length
    let allpart = [];
    let currpart = [];
    allpalpartitionsUTIL(allpart,currpart,0,n ,input);
    // for(let i =0 ;i< allpart.length;i++){
    //     console.log(allpart[i]);
    // }
    console.log(allpart);
}
function allpalpartitionsUTIL(allpart,currpart,start,n ,input){
    if(start >= n){
        allpart.push(currpart.slice());
        currpart.pop();
        return ;
    }
    for(let i= start ; i< n ;i++){
        if(ispalindrome(input, start ,i)){
            currpart.push(input.substring(start,i+1-start));
            allpalpartitionsUTIL(allpart ,currpart,i+1,n ,input)
        }
    }
}
function ispalindrome(input ,start ,i){
    while(i >= start){
        if(input[start] != input[i]){
            return false;
        }
        return true;
   }
}
allpalpartitions("geeks");