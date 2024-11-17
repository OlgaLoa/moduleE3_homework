function sum (a,b) {
  const timerId = setInterval (function(){
    for (let i = a; i <= b; i++) {
           console.log(i);      
    }
   clearInterval(timerId);
  }, 1000);
}
  
sum (5, 15);
