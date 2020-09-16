var obj = {
 mykey: "value"
};
function getProperty(obj, key) {
    if((obj[key])==undefined){
		return "NA";
	} else{
		return obj[key];
	}
}
console.log(getProperty(obj,"mykey"));