function createPhoneNumber(numbers) {
  // Mengecek apakah array memiliki panjang yang valid
  if (numbers.length !== 10) {
    return "Invalid array length";
  }

  // Membuat format nomor telepon
  let phoneNumber = "(";
  for (let i = 0; i < 3; i++) {
    phoneNumber += numbers[i];
  }
  phoneNumber += ") ";

  for (let i = 3; i < 6; i++) {
    phoneNumber += numbers[i];
  }
  phoneNumber += "-";

  for (let i = 6; i < 10; i++) {
    phoneNumber += numbers[i];
  }

  return phoneNumber;
}

// Contoh penggunaan:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(numbers)); // Output: (123) 456-7890
