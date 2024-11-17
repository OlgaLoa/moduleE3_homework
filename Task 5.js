const degreeArrowFunction = (x, n) => {
    
  let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return console.log(result);
}

degreeArrowFunction(2,2)



//2-ой вариант (непонятно, можно ли использовать Math по условиям задания)
// const degreeArrowFunction = (x, n) => {

//   const result = Math.pow(x, n);

//   return console.log(result);

// };


// degreeArrowFunction(3,2)
