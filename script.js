// complete the given function

function palindrome(str){
	let n = str.length;
	let start = 0, end = n-1;
	while(start<end){
		char c = str.charAt(start);
		char c1 = str.charAt(end);
		if(c != c1) return false;
		start++;
		end--;
	}
	return true;

}
module.exports = palindrome
