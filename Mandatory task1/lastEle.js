function getLastElement(array){
let len = array.length;
if(len ===0){
return -1;
}
return array[len-1];
}
console.log(getLastElement([1,3,5]));