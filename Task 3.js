function getSumMainFunction(mainNumber) {
  
  return function(internalNumber){
    
    return mainNumber + internalNumber
    
  }
};

const callGetSumMainFunction = getSumMainFunction(1);
const getSumMainInternalFunction = callGetSumMainFunction (2);
console.log(getSumMainInternalFunction)
