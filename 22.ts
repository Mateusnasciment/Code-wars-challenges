function stat (path) {
    return new Promise((resolve, reject) =>
     fs.stat(path, (err, stat) =>
        if(err){
          reject(err)
        }else{
          resolve(stat)
 
          