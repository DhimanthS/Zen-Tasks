function getLengthOfWord(word1){
	if(word1 === ""){
		return 0;
	}
 else if( word1 == undefined || !isNaN(word1)){
  return -1;
  } else{
     return word1.length;
 }
  
 // your code here
}
console.log(getLengthOfWord("ArcWarden"));