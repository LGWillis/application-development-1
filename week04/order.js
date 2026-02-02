console.info("Program started"); // Program startup log

function calculateTotal(price, quantity) {
  const total = price * quantity;
  console.info(`Calculated total: ${total}`); //Calculated total log
  return total;
}

function applyDiscount(total) {
  const discount = 10; // Added discount definition
  if (total > 100) {
    console.warn(`Discount of ${discount} applied`); // Discount application log
    return total - discount;
  } else {
    console.info("No discount applied"); // No discount log
  }
  return total;
} // The error type is a ReferenceError. The line number is 9. The discount variable is not defined anywhere. To fix this, the variable discount should be defined before it is used.

function processOrder(price, quantity) {
    if (price < 0 || quantity < 0) {
        console.error("Price and quantity can't be negative");
        throw new Error("Invalid input: price and quantity can't be negative");
    }
    
    console.info(`Processing order with price: ${price}, quantity: ${quantity}`); // Input values log
  
    const total = calculateTotal(price, quantity);
    const discounted = applyDiscount(total);
    const finalResult = discounted.toFixed(2);
    console.info(`Final result: ${finalResult}`); // Final result log
    return finalResult;
}

module.exports = {
  calculateTotal,
  applyDiscount,
  processOrder
};

console.log(processOrder(25, 5));
