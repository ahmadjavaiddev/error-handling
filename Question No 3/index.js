function processPayment(amount, cardNumber, expirationDate) {
  if (typeof amount !== "number" || amount <= 0 || isNaN(amount)) {
    throw new Error("Invalid payment amount.");
  }
  if (!cardNumber || !isValidCreditCardNumber(cardNumber)) {
    throw new Error("Invalid card number.");
  }
  if (!expirationDate || isExpired(expirationDate)) {
    throw new Error("Invalid expiration date.");
  }

  console.log("Payment processed successfully!");
}

function isValidCreditCardNumber(cardNumber) {
  return typeof cardNumber === "string" && cardNumber.trim().length > 0;
}

function isExpired(expirationDate) {
  return new Date(expirationDate) < new Date();
}

try {
  processPayment(100, "1234567890123456", "2025-12-31");
  processPayment(-50, "1234", "2023-01-01");
  processPayment(200, "", "2023-01-01");
  processPayment(150, "1234567890123456", "2022-01-01");
} catch (error) {
  console.error(error.message);
}
