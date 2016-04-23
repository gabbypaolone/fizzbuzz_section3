exports.count = function(begin,end) {

	var output = begin;
	for (var i = begin; i < end; i += 1){
		output = output + " " + exports.fizzer((i + 1));
	}

//return eg. "1 2 3 4 5"
return output;
};

exports.fizzer = function(num) {
	// if(num%3==0) {
	// 	return "fizz";
	// }
	// return num;
return 0 === num % 3 ? "fizz" : num;
};

exports.buzzer = function(num) {
	// if(num%5==0) {
	// 	return "fizz";
	// }
	// return num;
return 0 === num % 5 ? "buzz" : num;
};

exports.fizzbuzzer = function(num) {
	// if(num%15==0) {
	// 	return "fizz";
	// }
	// return num;
return 0 === num % 15 ? "fizzbuzz" : num;
};

module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer,
	fizzbuzzer: fizzbuzzer
};


var count, fizzer, buzzer, fizzbuzzer; 
 count = function(begin, end) { 
 

 	var output = buzzer(fizzer(begin)); 
 	for (var i = begin; i < end; i += 1) { 
 		output = output + " " + buzzer(fizzer(fizzbuzzer(i + 1))); 
 	} 
 
  
 	return output; 
 }; 
 
 
 fizzer = function(num) { 
 	return 0 === num % 3 ? "fizz" : num; 
 }; 
 
 
 buzzer = function(num) { 
 	return 0 === num % 5 ? "buzz" : num; 
 }; 
 
 
 fizzbuzzer = function(num) { 
 	return 0 === num % 15 ? "fizzbuzz" : num; 
 }; 
 
 
 module.exports = { 
 	count: count, 
 	fizzer: fizzer, 
 	buzzer: buzzer, 
 	fizzbuzzer: fizzbuzzer 
}; 
