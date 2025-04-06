# Custom SetInterval Implementation

## Overview
This document describes a custom implementation of `setInterval` using `setTimeout`. Since `setInterval` executes a function repeatedly at specified intervals, we achieve the same functionality recursively with `setTimeout`.

## How It Works
1. **Initialization:**
   - The function `mySetInterval` is called with a `callback` function and a `delay` in milliseconds.
   - A counter (`count`) is set to `0`.
   - A flag (`isRunning`) is set to `true` to control execution.

2. **Recursive Execution:**
   - A helper function (`intervalFunction`) is defined inside `mySetInterval`.
   - This function checks if `count` is less than `15` and `isRunning` is `true`.
   - If both conditions are met, it executes the `callback` and increments `count`.
   - It then schedules itself to run again after the specified `delay` using `setTimeout`.

3. **Stopping the Execution:**
   - The function stops automatically after `15` executions.
   - A `stop` method is returned, allowing manual termination before reaching `15` executions.

## Features
- **Automatic Stop:** Ensures the interval does not run indefinitely.
- **Manual Control:** Allows stopping the interval early via `stop()`.
- **Recursive Execution:** Uses `setTimeout` to simulate `setInterval` behavior.

## Use Cases
- Scheduling tasks with precise control over execution count.
- Creating animations or timed events in JavaScript.
- Running periodic updates while maintaining manual control.

This approach provides a flexible alternative to `setInterval` while allowing better control over execution flow.