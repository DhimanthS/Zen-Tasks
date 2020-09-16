console.log(getPrimes(20, 200));
function getPrimes(nPrimes, startAt)
{	
	primeArr = [];
	let count =0;
	while(count<nPrimes){
	if(isPrime(++startAt)){
		primeArr.push(startAt);
		count++;
		}
		}
	return primeArr;
}
// Returns true if a number is prime
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