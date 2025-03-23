/**
 * @file main.js
 * @author Massimo Musso
 * @description This file contains regular expressions for validating emails, phone numbers, passwords, and URLs in JavaScript.
 */

/**
 * Regular expression to validate an email address.
 * Expected format: [any characters]@[any characters].[2-4 letters]
 *
 * - `^[^\s@]+` → Start of the string, at least one character that is **not a space or "@"**.
 * - `@` → The "@" symbol is required.
 * - `[^\s@]+` → At least one character (excluding spaces and "@") for the domain.
 * - `\.` → A mandatory dot before the top-level domain (TLD).
 * - `[a-zA-Z]{2,4}$` → The TLD must be 2 to 4 letters (e.g., "com", "net").
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;

// Test cases
console.log(emailRegex.test("test@example.com")); // true
console.log(emailRegex.test("invalid@domain")); // false

/**
 * Regular expression to validate a phone number.
 * Expected format: [optional + or country code] [digits, possibly separated by dashes or spaces]
 *
 * - `^(\+?\d{1,3})?` → Optional **country code** (1-3 digits), with an optional `+` at the start.
 * - `[\s-]?` → Optional space or hyphen.
 * - `(\d{2,4}[\s-]?)?` → Optional area code (2-4 digits) with an optional separator.
 * - `\d{3,4}[\s-]?` → 3-4 digits with an optional separator.
 * - `\d{4}$` → Final 4 digits.
 */
const phoneRegex = /^(\+?\d{1,3})?[\s-]?(\d{2,4}[\s-]?)?\d{3,4}[\s-]?\d{4}$/;

// Test cases
console.log(phoneRegex.test("+39 333 4567890")); // true
console.log(phoneRegex.test("123-456-7890")); // true
console.log(phoneRegex.test("12-34-567")); // false

/**
 * Regular expression to validate a password.
 * Expected format: At least 8 characters, including at least:
 * - One uppercase letter
 * - One lowercase letter
 * - One digit
 * - One special character
 *
 * - `(?=.*[a-z])` → Must contain at least one **lowercase letter**.
 * - `(?=.*[A-Z])` → Must contain at least one **uppercase letter**.
 * - `(?=.*\d)` → Must contain at least one **digit**.
 * - `(?=.*[\W_])` → Must contain at least one **special character** (`!@#$%^&*`, etc.).
 * - `.{8,}$` → Must be at least **8 characters long**.
 */
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// Test cases
console.log(passwordRegex.test("P@ssw0rd!")); // true
console.log(passwordRegex.test("password")); // false
console.log(passwordRegex.test("PASS123!")); // false

/**
 * Regular expression to validate a URL.
 * Expected format: [protocol]://[domain].[TLD]/[optional path]?[optional query string]#[optional fragment]
 *
 * - `^(https?|ftp)` → The protocol must be **http, https, or ftp**.
 * - `:\/\/` → The required `://` characters.
 * - `[^\s\/]+` → At least one character for the domain (excluding spaces and `/`).
 * - `(\.[a-zA-Z]{2,})` → The domain must have a **TLD** with at least 2 letters (`.com`, `.org`).
 * - `(\/[^\s]*)?` → Optional **path** (`/page`, `/file.html`).
 * - `(\?[^\s#]*)?` → Optional **query string** (`?id=123&name=test`).
 * - `(#[^\s]*)?$` → Optional **fragment** (`#section1`).
 */
const urlRegex = /^(https?|ftp):\/\/[^\s\/]+(\.[a-zA-Z]{2,})(\/[^\s]*)?(\?[^\s#]*)?(#[^\s]*)?$/;

// Test cases
console.log(urlRegex.test("https://example.com")); // true
console.log(urlRegex.test("ftp://myserver.net/file.txt")); // true
console.log(urlRegex.test("http//missing-colon.com")); // false
