var obj = {
   mykey: true,
   age: 20
};
function removeProperty(obj, key){
	delete obj[key];
}
console.log(obj);
removeProperty(obj,"age");
console.log(obj);