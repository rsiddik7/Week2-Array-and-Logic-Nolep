function pasanganTerbesar(num) {
    // you can only write your code here!
    let numStr = num.toString();
    let maxPair = 0;

    for(let i = 0; i < numStr.length - 1; i++) {
        let pair = Number(numStr[i] + numStr[i + 1])

        if(pair > maxPair) {
            maxPair = pair
        }
    }

    return maxPair
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99