
/*
traverse the array
create two variables
compare arr[i] with curr+arr[i]
maximum result store in curr
update maxm variable accourding to comparison with curr



function subtractEuclidsAlgoGCD(num1, num2) {
    if (num1 == num2) return num1
    if (num1 > num2) {
        return subtractEuclidsAlgoGCD(num1 - num2, num2)
    }
    else return subtractEuclidsAlgoGCD(num2 - num1, num1)
}
console.log(subtractEuclidsAlgoGCD(270, 192))
k times  (nk)  o(n)
(100,1)(n,1) ntimes
(99,1)
(98,1)
(96,1)





(1,1)


function findMidean(arr1, arr2, n, m) {
    let count = 1, i = 0, j = 0, median = 0, tmep = 0
    if ((n + m) % 2 == 0) {// 0(n+m/2)== O(n+m)=o(n)
        median = (n + m) / 2     
    }
    else {

        median = parseInt((n + m) / 2) + 1
    }

    while (i < n && j < m) {//n+m

        if (arr1[i] <= arr2[j]) {
            if ((n + m) % 2 == 0 && count == median || count == median + 1) {
                tmep += arr1[i]

            }
            if ((n + m) % 2 != 0 && count == median) {
                tmep = arr1[i]
            }


   





*/