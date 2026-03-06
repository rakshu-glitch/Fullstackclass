function calculateTotal(price, deliveryFee = 50) {
  return price + deliveryFee;
}

console.log(calculateTotal(500));      // 550
console.log(calculateTotal(500, 30));  // 530
