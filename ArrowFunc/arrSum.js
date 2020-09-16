arr =[1,2,3,4,5,6,7];
var sum = arr.reduce((currSum, item)=>{
return currSum+= item;
},0);
console.log(sum);
