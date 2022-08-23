/*
f(n)=n2
g(n)=n!
h(n)=nlogn

n!>n2>nlogn
gn>fn>hn


h(n)=(BIGo(f(n))  ===>  0<=Th(n)<=f(n)//TRUE
G(N)=OMEGA(F(N))  ===>  0<=F(N)<<G(N)//TRUE



F(N)=BIGO(G(N))   ===>0<=F(N)<<G(N)///TRUE
G(N)=BIGO(H(N))    ====>0<=G(N)<=H(N)//FALSE


F(N)=OMEGA(G(N))  ===> 0<=F(N)<=G(n)//TRUE
G(N)=BIGO(H(N))   =>== 0<G(N)<H(N)//FALSE

For(let i=1;i<n;i++){// i=1 2 3     n-1

    for(let j=n;j>i;j--){//(n-1)k+(n-2)k+n-3k     1
        ans+1 ///k
    }
}
(n-1)k+(n-2)k+n-3k -----1
k[(n-1)+(n-2)+-----1]//sumof n ==n(n+1)/2
t(n)=k(n-1)(n)/2==(k/2)(n2-n)
t=o(n2)

for(let i=i;i<=n;i++){i=1 i=2 i=3 ntimes


//for(loop)  working logn times in eacg iternation  logn+logn+logn+log nl--------


}
logn+logn+log=----n
3logn


K = 5, N = 4
Arr[] = {1, 5, 8, 10}[6,0,3,5]
Output:
5
Explanation:
The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.

[a,b,c,d]///
//sort this array
min=arr[0]//a
max=arr[n-1]//d
diff=d-a

+
diff=d+k-(a+k)=d-a//constant 

-
1observation
diff=d-k-a+k//d-a//
      d-k-(a+k)==d-a-2k


class Solution {
    getMinDiff(arr,n,k){
       //code here
       
       arr.sort((a,b)=>a-b)//nlogn+n
       
       var  min=arr[0]//a
       var    max=arr[n-1]//d
       var diff=max-min
       
       
       for(let i=1;i<n;i++){//o(n)
          
          max= Math.max(arr[i-1]+k,arr[n-1]-k)
          min=  Math.min(arr[i]-k,arr[0]+k)
           
           diff= Math.min(max-min,diff)
           
       }
       return diff

    }











*/












// function mergesorrt(arr){
//     if(arr.length===0||arr.length===1){return arr}
//     var mid=parseInt(arr.length/2)
//      var a=[]
//     var b=[]
    
//     for(let i=0;i<mid;i++){
//      a.push(arr[i])
//     }
//     for(let i=mid;i<arr.length;i++){
//         b.push(arr[i])
//        }
//     a=mergesorrt(a)
//     b=mergesorrt(b)

//     var ans=[]

// var i=0,j=0;
// while(i<a.length && j<b.length){
//     if(a[i]<=b[j]){
//         ans.push(a[i])
//         i++
//      }
//      else{
//          ans.push(b[j])
//          j++
//      }
// }
// while(i<a.length){
//     ans.push(a[i])
//     i++
// }
// while(j<b.length){
//     ans.push(b[j])
//     j++
// }

// return ans

// }

// console.log(mergesorrt([9,8,7,6]))