function isPrime(n)
{	
	if (n<2){
	return false;
	}
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
arr = [1,2,3,4,5,6,7,8,9];
primeArr = arr.filter((itemm)=>{
if(isPrime(itemm)){
return itemm;
}});
console.log(primeArr);

