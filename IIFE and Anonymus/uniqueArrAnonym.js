var uniqueArr = function(arr){
let tempArr = [];
for(let i=0;i<arr.length;i++){
let isUnique = true;
for(let j=0;j<arr.length;j++){
if(i===j){
continue;
} else if(arr[i]===arr[j]){
isUnique = false;
break;
}
}
if(isUnique){
tempArr.push(arr[i]);
}
}
return tempArr;
}
console.log(uniqueArr([1,2,3,2,5,4,6,4,7,8,9]));