function isPalindrome(num) {
    let originalNum = num.toString();
    let reversedNum = originalNum.split('').reverse().join('');
    return originalNum === reversedNum;
}

// Function to check if two numbers are palindromes
function checkPalindromes(num1, num2) {
    if (isPalindrome(num1)) {
        console.log(`${num1} is a Palindrome`);
    } else {
        console.log(`${num1} is NOT a Palindrome`);
    }

    if (isPalindrome(num2)) {
        console.log(`${num2} is a Palindrome`);
    } else {
        console.log(`${num2} is NOT a Palindrome`);
    }
}

// Example usage
let number1 = 121;
let number2 = 123;

checkPalindromes(number1, number2);
