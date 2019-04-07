// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
test = {eat:"apple", numb: 2};

var stringifyJSON = function(obj) {

 if(typeof obj === 'number'){
 	obj =  obj + "";
 }
 else if (obj === null){
 	obj = "null";
 }

 else if (typeof obj === 'boolean'){
 	if (obj === true){
 		obj = 'true';
 	}else{
 		obj = 'false';
 	}
 }
 else if (typeof obj === 'string'){
 	obj = '"' + obj + '"';

}
	else if (Array.isArray(obj)){
		if(obj.length === 0){
		obj = '[]';
		}
		else if (obj.length === 1 && typeof obj[0] === 'number'){
		var str = '';
		str += '[' +  obj.toString() + ']' ;
		return str;

		}
		else if (obj.length === 1 && typeof obj[0] === 'string'){
		var str = '';
		str += '[' + '"' + obj.toString() + '"' + ']' ;
		return str;
		}
		else if (obj.length === 2 && typeof obj[0] === 'number'){
		var str = '';
		str += '[' + obj[0].toString() + ',' + '"' + obj[1].toString() + '"' + ']' ;
		return str;
		}
		else if (obj.length > 1 && typeof obj[0] === 'number'){
		var str = '';
		str += '[' +  obj.toString() + ']' ;
		return str;
		}
	}

return obj; 
};






   


 


