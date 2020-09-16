function isPrime(n)
{
	if(n===2){
	return true;
	} else{
	for(let j=2;j<n;j++){
	if(n%j===0){
	return false
	}
	}
	return true;
	}
	}
var primeArr = (function(arr){
tempArr = [];
for(let i=0;i<arr.length;i++){
if(arr[i]<2){
	continue;
}
if(isPrime(arr[i])){
tempArr.push(arr[i]);
}
}
return tempArr;
})([1,2,3,4,5,6,7,8,9,10]);
console.log(primeArr);
