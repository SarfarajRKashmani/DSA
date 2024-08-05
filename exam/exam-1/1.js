
function reverseArr(arr) {
    let lt = 0;
    let rt = arr.length - 1;

    while (lt < rt) {
        let tp = arr[lt];
        arr[lt] = arr[rt];
        arr[rt] = temp;
        lt++;
        rt--;
    }
}
let arr = [1, 2, 3, 4, 5];
reverseArr(arr);
console.log(arr); 

// const arr = [1, 2, 3, 4, 5];
// for (let i=arr.length-1;i>=0;i--)
//  console.log(arr[i]); 
