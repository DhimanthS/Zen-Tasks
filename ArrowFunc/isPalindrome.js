function isPalindrome(str){
tempArr = str.split("");
let len = tempArr.length;
for(let i=0;i<=len/2;i++){
if(tempArr[i]!=tempArr[len-i-1]){
return false;
}
}
return true;
}
arr = ["hello", "malayalam", "racecar", "cat"];
var paliArr = arr.filter((item)=>{
return isPalindrome(item);});
console.log(paliArr);