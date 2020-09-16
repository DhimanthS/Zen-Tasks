var oddArr = (function(n){
let tempArr = [];
for(let i=1;i<=n;){
tempArr.push(i);
i=i+2
}
return tempArr;
})(10);
console.log(oddArr);