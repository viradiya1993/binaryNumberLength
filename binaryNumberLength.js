function decimalToBinary(dec){
    return (dec >> 0).toString(2);
}

console.log(decimalToBinary(9))
console.log(decimalToBinary(529))
console.log(decimalToBinary(20))
console.log(decimalToBinary(9))
console.log(decimalToBinary(15))
console.log(decimalToBinary(128))

function binaryNumberLength(n){
	var binaryNumber = 0;
	var enterNumber = 0;
	var numberString = n.toString(2);
	var index = numberString.length-1;
	
	for(index; index > = 0; index--){
		if(numberString.charAt(index) != '0'){
			break;
		}
	}
	for (var i = index - 1; i >= 0; i--) {
        if (numberString.charAt(i) == '0') {
            enterNumber = enterNumber+1;
        } else {
            if (enterNumber > binaryNumber) {
                binaryNumber = enterNumber;
            }
            enterNumber = 0;
        }
    }
}

console.log(binaryNumberLength(9))
console.log(binaryNumberLength(529))
console.log(binaryNumberLength(20))
console.log(binaryNumberLength(9))
console.log(binaryNumberLength(15))
console.log(binaryNumberLength(128))
console.log(binaryNumberLength(32))