const { processOrder } = require("./order");

test("applies discount when total is greater than 100", () => {
  // Arrange
  const price = 25;
  const quantity = 5;
  const expected = (115).toFixed(2);

  // Act
  const result = processOrder(price, quantity);

  // Assert
  expect(result).toBe(expected);
});

test("no discount when total is 100 or less", () => {
  // Arrange
  const price = 20;
  const quantity = 4;
  const expected = (80).toFixed(2);

  // Act
  const result = processOrder(price, quantity);

  // Assert
  expect(result).toBe(expected);
});

test("no discount when total is exactly 100", () => {
  // Arrange
  const price = 20;
  const quantity = 5;
  const expected = (100).toFixed(2);

  // Act
  const result = processOrder(price, quantity);

  // Assert
  expect(result).toBe(expected);
});

test("throws error for negative price", () => {
  // Arrange
  const price = -10;
  const quantity = 5;

  // Act & Assert
  expect(() => processOrder(price, quantity)).toThrow("Invalid input: price and quantity can't be negative");
});