function sumMix(matrix){
    let allo = 0;
  
    for(let row of matrix){
      for(let element of row){
        if(typeof element === 'number'){
          allo + element
        }
      }
    }
  
    return allo
  }