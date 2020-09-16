var median = function(arr1,arr2){
let mergeArr = arr1.concat(arr2);
mergeArr.sort(function(a,b){return(a-b)});
let len = mergeArr.length;
let sumofMid = mergeArr[len/2]+mergeArr[(len/2)-1];
return sumofMid/2;
}
console.log(median([1,12,15,26,38],[2,13,17,30,45]));
