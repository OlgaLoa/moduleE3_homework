function showPrimeOrComposite (number) {
  
  let typeOfNumber;
  let result;
  
  if (number > 1 && number <= 1000) {
     for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                 typeOfNumber = false;
            }
        }
       
      result = typeOfNumber ? 'Введенное число - простое': 'Введенное число  - составное';
} else if (number > 1000 || number === 0 || number === 1) {
        result = 'Ошибка ввода';
    }
    return console.log(result);
}

showPrimeOrComposite (99)
