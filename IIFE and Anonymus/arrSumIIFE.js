var sum = (function(arr){
let tempSum = 0;
for(let i=0;i<arr.length;i++){
	tempSum+=arr[i];
}
return tempSum;
})([1,5,9,3,2]);
console.log(sum);