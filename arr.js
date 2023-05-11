// Remove duplicates 

let arr = [1,1,13,5,5,,5,4,4,9];

function removeDuplicates(arr) {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
