

//guys this is the corrected code 


// var nums = [3,2,1,2,1,7]
// var ans=0


//     var obj={}
//     for(let i=0;i<nums.length;i++){
//         if(obj[nums[i]]){
//             obj[nums[i]].value++
//             obj[nums[i]].index.push(i)
//         }
//         else{
//             obj[nums[i]]={
//                 value:1,
//                 index:[i]
//             }
//         }
//     }
//     // console.log(obj)
// Object.keys(obj).map(function(item){

//     if(obj[item].value>1){
//       //find the closest element which does not exist
//       var i=Number(item)+1
//       for(let j=1;j<obj[item].index.length;j++){

       
//         while(obj[i]!==undefined){
//            i++
//         }
//         nums[obj[item].index[j]]=i
//         obj[i]=1
//         ans+=i-Number(item)
//         i=i+1

//       }
    
     
//     }



// })
// console.log(ans)


// function allpossible(inp,target,b=(String(inp)).split(""),index=0,a=[b[0]],temp=Number(b[0]),ans=[]){

// if(index>=b.length-1){
//     if(temp===target){
       
//         ans.push((a.slice()).join(""))
//     }
//     return ans
// }

// //for add +
// temp+=Number(b[index+1])
// a.push('+')
// a.push(b[index+1])
// allpossible(inp,target,b,index+1,a,temp,ans)
// a.pop()
// a.pop()
// temp-=Number(b[index+1])



// //for add -
// temp-=Number(b[index+1])
// a.push('-')
// a.push(b[index+1])
// allpossible(inp,target,b,index+1,a,temp,ans)
// a.pop()
// a.pop()
// temp+=Number(b[index+1])




// //for add *
// temp=temp*Number(b[index+1])
// a.push('*')
// a.push(b[index+1])
// allpossible(inp,target,b,index+1,a,temp,ans)
// a.pop()
// a.pop()
// temp/=Number(b[index+1])


// return ans


// }

// console.log(allpossible(123,6))



// function allpossible(input,target,index=0,a=[input[0]],temp=Number(input[0]),ans=[]){

// if(index>=input.length-1){

//     if(temp===target){
//         ans.push((a.slice()).join(""))
//     }

//     return
// }

// //for add+
// temp+=Number(input[index+1])
// a.push('+')
// a.push(Number(input[index+1]))
// allpossible(input,target,index+1,a,temp,ans)

// temp-=Number(input[index+1])
// a.pop()
// a.pop()

// //for add - operator
// temp-=Number(input[index+1])
// a.push('-')
// a.push(Number(input[index+1]))
// allpossible(input,target,index+1,a,temp,ans)

// temp+=Number(input[index+1])
// a.pop()
// a.pop()


// //for multiplication
// temp=(temp-Number(input[index]))+Number(input[index])*Number(input[index+1])
// a.push('*')
// a.push(Number(input[index+1]))
// allpossible(input,target,index+1,a,temp,ans)
// a.pop()
// a.pop()
// temp/=Number(input[index+1])

// return ans



// }
// console.log(allpossible("123",6))

//using random pivot

// function partition(arr,start,end){

//     var pivot=arr[end]//0//1

//     var i=start
//     for(let j=start;j<=end-1;j++){

//         if(arr[j]<pivot){
//             var temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//             i++

//         }
//     }
//     arr[end]=arr[i]
//     arr[i]=pivot
//     return i
// }

// function parnew(arr,start,end){
//     var index=  Math.floor(start+(Math.random()*(end-start+1)))
//     var temp=arr[index]
//     arr[index]=arr[end]
//     arr[end]=temp

//     return partition(arr,start,end)

// }

// function quicksort(arr,start=0,end=arr.length-1){
// if(start>=end){
//     return
// }
// var p=parnew(arr,start,end)
// console.log(p)
// quicksort(arr,start,p-1)
// quicksort(arr,p+1,end)

// }
// var a=[0,8,10,0,1]
// console.log(a)
// quicksort(a)
// console.log(a)



// console.log([11,1]*[2,2])