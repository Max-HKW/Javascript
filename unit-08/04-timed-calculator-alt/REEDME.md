# Delayed Calculator with 3-Second Delay

## Overview
This document explains how to perform basic arithmetic operations (addition, subtraction, multiplication, and division) with a **3-second delay** between each operation, using JavaScript's `setTimeout`.

### 1. **File Description**
The file contains four functions that perform basic arithmetic operations (addition, subtraction, multiplication, and division). Each function uses `setTimeout` to introduce a delay of 3 seconds before returning the result. The operations are executed one after the other in the `performOperations` function.

### 2. **Function Explanations**

#### a) `delayedAdd(a, b)`
This function performs an addition operation after a 3-second delay. 
- **Parameters**:
  - `a`: The first number to be added.
  - `b`: The second number to be added.
- **Returns**: It logs the result of the addition to the console after 3 seconds.

#### b) `delayedSubtract(a, b)`
This function performs a subtraction operation after a 3-second delay.
- **Parameters**:
  - `a`: The number to subtract from.
  - `b`: The number to subtract.
- **Returns**: It logs the result of the subtraction to the console after 3 seconds.

#### c) `delayedMultiply(a, b)`
This function performs a multiplication operation after a 3-second delay.
- **Parameters**:
  - `a`: The first number to multiply.
  - `b`: The second number to multiply.
- **Returns**: It logs the result of the multiplication to the console after 3 seconds.

#### d) `delayedDivide(a, b)`
This function performs a division operation after a 3-second delay. It also checks if the divisor is zero and logs an error message if the division by zero is attempted.
- **Parameters**:
  - `a`: The dividend.
  - `b`: The divisor.
- **Returns**: It logs the result of the division or an error message if division by zero is attempted.

#### e) `performOperations(a, b)`
This function initiates all four arithmetic operations (addition, subtraction, multiplication, division) with a 3-second delay between each. It calls the four functions sequentially.
- **Parameters**:
  - `a`: The first operand used in all operations.
  - `b`: The second operand used in all operations.
- **Returns**: It initiates the operations with a delay of 3 seconds for each one.

### 3. **Why Use `setTimeout`?**
The `setTimeout` function is used to simulate the delay in performing the operations. By introducing a 3-second delay, the code mimics the idea of asynchronous operations, though all operations are logged independently after their respective delays.

### 4. **How It Works**
- The `performOperations` function first calls `delayedAdd`, waits for it to finish, and then calls the
