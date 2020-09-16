var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
	let posSum = 0
	let negSum = 0;
	let tempArr = [];
	for(let i=0;i<arr.length;i++){
	if(arr[i]<0){
	negSum+= +arr[i];
	} else{
	posSum+= +arr[i];
	}
	}
	tempArr.push(posSum);
	tempArr.push(negSum);
	return tempArr;
}
console.log(ar2(arr));