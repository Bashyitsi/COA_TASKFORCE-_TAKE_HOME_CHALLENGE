# Coding Challenges

This repository contains solutions to two coding challenges. These challenges test logical thinking and coding aptitude using JavaScript.

## Challenges

### 1. Array Manipulation

**Problem Statement:**
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

**Example:**
```
Input: arr = [4, 2, 7, 1, 9, 5], target = 14
Output: true
Explanation: The subarray [7, 1, 9] sums up to 14, which is equal to the target.
```

**Constraints:**
- The array will contain between 1 and 100,000 elements.
- The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.
- Expected Time Complexity: O(n), where n is the length of the array.
- Expected Space Complexity: O(n).

**Solution:**
The solution is implemented in the `arrayMap.js` file. It uses a hash map to keep track of prefix sums and efficiently find the contiguous subarray that sums up to the target.

### 2. String Transformation

**Problem Statement:**
Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.

**Example:**
```
Input: "Hello World"
Output: "87 111 114 108 100 32 111 108 108 101 72"
Explanation: The length of the string is 11, which is divisible by both 3 and 5. First, the string is reversed, becoming "dlroW olleH". Then, each character is replaced by its ASCII code, resulting in "87 111 114 108 100 32 111 108 108 101 72".
```

**Constraints:**
- The string will only contain alphanumeric characters and spaces.
- The length of the string will be between 1 and 1000.
- Expected Time Complexity: O(n), where n is the length of a string.
- Expected Space Complexity: O(n), where n is the length of the string.

**Solution:**
The solution is implemented in the `stringTransform.js` file. It checks the length of the string for divisibility by 3 and 5 and performs the required transformations.

## Files

- `coding-challenge/arrayMap.js` - Solution for the Array Manipulation challenge.
- `coding-chalenge/stringTransform.js` - Solution for the String Transformation challenge.

## How to Run

1. **Clone the Repository:**
    ```bash
    git clone <https://github.com/Bashyitsi/COA_TASKFORCE-_TAKE_HOME_CHALLENGE>
    cd <coding-challenge>
    ```

2. **Run Array Manipulation Challenge:**
    ```bash
    node coding-challenge/arrayMap.js
    ```

3. **Run String Transformation Challenge:**
    ```bash
    node coding-Challenge/stringTransform.js
    ```

## Testing

Both files contain test cases to verify the correctness of the solutions. Simply running the files using Node.js will display the results of these test cases.
