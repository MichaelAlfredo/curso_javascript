// Temporizadores (setTimeout & setInterval).

/* setTimeout(() => {}, timeout);

console.log("inicio");
setTimeout(() => {
  console.log("Esto se ejecutara una sola vez");
}, 3000);

setInterval(() => {
  console.log(
    "Esto se ejecutara indefinidamente cada cierto intervalo de tiempo"
  );
}, 1000); */

/* la sincronia es uno de los pilares fundamentales de javascript, ya que es un lenguaje de un solo subproceso o hilo lo que se conoce como single thread, lo que significa que solo puede ejecutar una cosa ala ves.
javascript trabaja bajo un modelo asincrono y no bloqueante y tiene un loop de eventos implementados de un solo hilo lo que se se conoce como single thread para operaciones de entrada y salida gracia a esto es que javascript es altamente concurrente.
***********
Procesamiento single thread y multithread: el procesamiento seda, digamos que los thread, los hilos son las unidades basica de ejecucion de cada proceso que realiza nuestra maquina, javascript tiene solo un hilo de ejecución.
***********
Operaciones de CPU y operaciones de I/0: en un procesamiento en el codigo de una aplicacion podemos tener operaciones de CPU, las operaciones que se considera de CPU son aquellas que va a pasar el mayor tiempo consumiendo los procesos de nuesta CPU.
***********
las operacioness 1/0 de entrada o salida va a ser aquella operaciones que van a pasar la mayor parte del tiempo esperando la peticion del recurso que han solicitud.
***********
Operaciones concurrente y paralelas: la concurrencia significa es cuando 2 o mas tareas progresan simultaneamente es decir se esta ejecutando al mismo tiempo y ahi va avanzando simultaneamente, mientras que el parelelismo es cuando 2 o mas tareas se ejecuta al mismo tiempo.
***********
operaciones bloqueante y no bloqueantes: lo bloqueante y no bloqueante se refiere a la fase de espera, digamos siempre va haber una fase de epera cada que se va ejecutando una operacion de nuestro codigo entonces si una operacion es bloqueante o no bloqueante se va referir a como toma esa fase de esperar. una operacion bloqueante es aquella que no va a devolver el control a la aplicacion hasta que haya terminado toda su tarea.
no bloqueante significa que las operaciones se ejecutan y devuelve inmediatamente el control al hilo principal no importando si ha terminado o no la tarea, en el momento que una tarea no bloqueante se acabe mandara una notificacion entonces ya se avisaran al hilo principal.
***********
operaciones sincrona y asincronas: las sincronas y asincronas se refiere a cuanto tendra lugar la respuesta, pensando en el presente pasado y futuro; sincrono significa que la respuestaa suceden en el presente en el tiempo inmediato, una operacion sincrona espera el resultado en tiempo presente mientras que asincrono la respuesta sucede en un futuro osea se ejecuta pero no sabe cuando va a venir la respuesta, es decir la operacion asincrona no va a esperar el resultado.
 
EN javascript vamos a tener 2 tipo de codigo
1-codigo sincrono bloqueante: cada operacion se hace de una vez bloqueando mientras se espera la respuesta, cuando esta se procese pasa a la siguiente operacion y así sucesivamente hasta termina las operaciones.
cada console.log() toma el control del hilo del ivent loop de javascript y se ejecuta termina la ejecucion y pasa al siguiente, luego tenemos 2 funciones definida esto lo toma en memoria javascript, luego de codigo sincrono" "inicio" se ejecuta la funcion numero "uno"
*/

(() => {
  console.log("codigo sincrono");
  console.log("inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("uno");
    dos();
    console.log("tres");
  }

  uno();
  console.log("fin");
})();
/* codigo asincrono no bloqueante
javascript usa un modelo asincrono y no bloqueante con un loop de eventos implementados en un solo hilo(single thread) para operaciones de entrada y salida(input/output) */

(() => {
  console.log("codigo asincrono");
  console.log("inicio");

  function dos() {
    setTimeout(() => {
      console.log("dos");
    });
  }

  function uno() {
    setTimeout(() => {
      console.log("uno");
    }, 0);
  }

  dos();
  console.log("tres");
  uno();
  console.log("fin");
})();
