function isEven(num){
	if(num%2 === 0){
	return true;
	} else if(num%2 === 1){
	return false;
	} else{
	return -1;
	}
}
var even = isEven("55h");
console.log(even);