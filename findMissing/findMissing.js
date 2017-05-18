/*This solution runs two times faster than solutions 1 and 2*/
  function diffArray(arr1, arr2) {
  
  let newArr = [];
  let i;
  let j;
  
  if ((arr1.length)===(arr2.length)){
     return 0;
     
  }
  
  else { 
    for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    } 
  }
  
  for ( j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      newArr.push(arr2[j]);
    } 
  }
  
    
  }
  