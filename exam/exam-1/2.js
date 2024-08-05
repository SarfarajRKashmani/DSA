let arr1=[1,4,8]
let arr2=[2,5,6]
let mergeArr=[]

let i=0
let j=0
let l1=arr1.length
let l2=arr2.length

 while(i<l1&&j<l2){
    if(arr1[i]<arr2[j]){
        mergeArr.push(arr1[i])
        i++
    }else{
        mergeArr.push(arr2[j])
        j++
    }
 }
           while (i<l1){
        mergeArr.push(arr1[i])
        i++
    }
 while (j<l2){
    mergeArr.push(arr2[j])
    j++
}
console.log(mergeArr);
