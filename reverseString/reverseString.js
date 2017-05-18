/*A javascript function that return the reverse of string*/
function  reverseString(str){
  let splitStr;
  let reverseStr;
  let joinStr;
 
  if(str==="") {
		return "null";
	}

	if (str.length === 1) {
	  return true;
	}
	
	splitStr = str.split("");
  reverseStr = splitStr.reverse();
  joinStr = reverseStr.join(""); 
  if (joinStr === str){
    return "true"
  }
  else{
    return joinStr; 
  }
  
}	