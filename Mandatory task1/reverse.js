var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   temparr = s.split("");
   temparr.reverse();
   return temparr.join("");
}