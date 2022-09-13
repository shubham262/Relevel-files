
// function solve(a,b){
// var obj={}
// for(let i=0;i<b.length;i++){
//     if(obj[b[i]]){
//         obj[b[i]]++
//     }
//     else{
//         obj[b[i]]=1
//     }
// }

// var ans=[]
// for(let i=0;i<a.length;i++){


//     if(obj[a[i]]){
//         for(let k=1;k<=obj[a[i]];k++)
//         ans.push(a[i])
//     }
// }

// return ans;



// }

// console.log(solve("2354790681", "839712563890"))


// const customSort = (order, inp) => {
//     const numberObj = {};
//     const resArr = [];
//     const arr = inp.split(' ').map(item => parseInt(item))
//     order.split('').map((item, index) => {
//         numberObj[item] = {
//             value: [],
//             order: index
//         };
//     })
//     console.log(numberObj)
//     arr.map(item => {
//         numberObj[item].value.push(item);
//     });

//     console.log(numberObj)
//     const sortedObj = Object.values(numberObj).sort((a, b) => a.order - b.order);
//     console.log(sortedObj)
//     Object.values(sortedObj).map(item => {
//         resArr.push(...item.value)
//     });
//     console.log(resArr)
//     return resArr.join(' ');
// }
 

// console.log(customSort("2354790681", "8 3 9 7 1 5 6 3 8 9 0"));


