function reverseString(input) {
    return input.split('').reverse().join('');
}

function toAsciiCodes(input) {
    return input.split('').map(char => char.charCodeAt(0)).join(' ');
}

function stringTransform(input) {
    let transformed = input;

    const isDivisibleBy3 = input.length % 3 === 0;
    const isDivisibleBy5 = input.length % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) {
        // If length is divisible by both 3 and 5, perform both operations
        transformed = toAsciiCodes(reverseString(transformed));
    } else if (isDivisibleBy3) {
        // If length is divisible by 3, reverse the string
        transformed = reverseString(transformed);
    } else if (isDivisibleBy5) {
        // If length is divisible by 5, replace each character with its ASCII code
        transformed = toAsciiCodes(transformed);
    }

    return transformed;
}

// Test Cases
const testCases = [
    { input: "abcabcabc", expected: "cbacbacba" },
    { input: "hello", expected: "104 101 108 108 111" },
    { input: "abcdef", expected: "fedcba" },
    { input: "Hello World!!!!", expected: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72" }
];

// Running Test Cases
testCases.forEach((test, index) => {
    const output = stringTransform(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Length of input ${test.input.length}`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected Output: "${test.expected}"`);
    console.log(`Actual Output: "${output}"`);
    console.log(output === test.expected ? "✅ Test Passed" : "❌ Test Failed");
    console.log('');
});

// Example usage
const input = "Hello World!!!!";
console.log(stringTransform(input)); // Output: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72"
