function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 100));
}

 cuadradoCallback(0, (value, result) => {
   console.log("inicia Callback");
   console.log(`Callback:${value}, ${result} `);
   cuadradoCallback(1, (value, result) => {
     console.log(`Callback:${value}, ${result} `);
     cuadradoCallback(2, (value, result) => {
       console.log(`Callback:${value}, ${result} `);
       cuadradoCallback(3, (value, result) => {
         console.log(`Callback:${value}, ${result} `);
         cuadradoCallback(4, (value, result) => {
           console.log(`Callback:${value}, ${result} `);
           cuadradoCallback(5, (value, result) => {
             console.log(`Callback:${value}, ${result} `);
           });
         });
       });
     });
   });
 });
