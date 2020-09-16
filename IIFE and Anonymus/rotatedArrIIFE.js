var rotatedArr = (function(arr,k){
let len = arr.length;
k= k%len;
tempArr1= [];
tempArr2 = [];
for(let i=0;i<k;i++){
tempArr1.push(arr[i]);
}
for(let j=k;j<len;j++){
tempArr2.push(arr[j]);
}
return tempArr2.concat(tempArr1);
})([1,2,3,4,5,6,7],6);
console.log(rotatedArr);