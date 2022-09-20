//recusrison backtracking

// var arr=[1,2,3,4,5]




// function sebseq(arr,index=0,ans=[],temp=[])
// {

//     if(index>=arr.length){
//         ans.push(temp.slice())
//         return ans
//     }

//     temp.push(arr[index])
//     sebseq(arr,index+1,ans,temp)
//     temp.pop()
//     sebseq(arr,index+1,ans,temp)
//     return ans




// }
// var a=[1,2,3]
// console.log(sebseq(a))


//subaaray

// function subarr(a,start=0,end=0,ans=[]){//10


// if(end>=a.length){
//     return ans
// }

// else if( start>end){
//     subarr(a,0,end+1,ans)
// }

// else{//10 times
//     let temp=[]
//     for(let i=start;i<=end;i++){
//         temp.push(a[i])
//     }
//     ans.push(temp)
//     subarr(a,start+1,end,ans)
// }

// return ans;



// }
// var arr=[1,2,3]
// console.log(subarr(arr))


//combination sum

function combi(a,target,sum=0,index=0,ans=[],temp=[])
{

if(index>=a.length){

    if(sum===target){
        ans.push(temp.slice())
    }


    return ans
}

if(sum>target){
    return ans
}



//pick
sum+=a[index]
temp.push(a[index])
combi(a,target,sum,index,ans,temp)

///non pick
temp.pop()
sum-=a[index]
combi(a,target,sum,index+1,ans,temp)

return ans



}
var arr=[2,3,5]
console.log(combi(arr,8))