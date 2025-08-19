function getPosNegArrays(arr) {
    const positives = [];
    const negatives = [];
  
    for (let num of arr) {
      if (num > 0) {
        positives.push(num);
      } else if (num < 0) {
        negatives.push(num);
      }
    }
  
    return [positives, negatives];
  }
  
  console.log(getPosNegArrays(numbers));
  // Пример: [[5, 8, 3, 12, 9, 6, 11], [-2, -7, -4, -5]]