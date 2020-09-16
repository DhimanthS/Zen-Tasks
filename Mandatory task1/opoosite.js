var num = 5.5;
function getOpposite(num) {
  if(num<0 || num >0){
	  if(num%1 == 0){
    return (-1*num);
	  } else{
		  return -1;
	  }
  } else if( num==0){
	  return 0;
  } else{
	  return -1;
  }
}
var result = getOpposite(num);
console.log(result);