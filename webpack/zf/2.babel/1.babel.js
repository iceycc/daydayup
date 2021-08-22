import { transform } from '@babel/core';  
  
transform("code();", options, function(err, result) {  
  console.log(result.code);  
});