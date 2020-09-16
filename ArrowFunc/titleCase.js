var titleCase = function(arr){
let tempArr = [];
 tempArr = arr.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase());
return tempArr;
}
console.log(titleCase(["go","for","it"]));
