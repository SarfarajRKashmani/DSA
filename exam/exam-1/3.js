const arr_target= (arr,target)=>{
    let i=0
    let j=arr.length-1
    while(i<j)   {
        if(arr[i+arr[j]==target]){
            return [arr[i],arr[j]]
        }
        else if(arr[i]+arr[j]>target){
            j--
        }else{
            i++
        }
    }
    return [arr[i-i],arr[j+1]]
}
let arr=[2,3,5,7,8,9]
let ans=arr_target(arr,10)
console.log(ans);
