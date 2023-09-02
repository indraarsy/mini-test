function generateNumbersArray() {
    const numbersArray = [];
    for (let i = 1; i <= 100; i++) {
      numbersArray.push(i);
    }
    return numbersArray;
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
  
const result = generateNumbersArray();

function replaceNumbersWithText(num) {
    const result = [];
    num.map((item) => {
        const bilPrima = isPrime(item)
        let output = '';
        
        if(!bilPrima){
            if (item % 3 === 0) {
                output += 'Foo';
            }
          
            if (item % 5 === 0) {
                output += 'Bar';
            }
          
            if (output === '') {
                output = item;
            }   
            result.push(output);
        }
    
    })

    return result;
  }
  
  const replacedArray = replaceNumbersWithText(result);
  console.log(replacedArray.reverse().toString())
  