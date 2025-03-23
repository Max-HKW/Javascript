# Replacing the 4th Letter in "Abracadabra"

## Overview
This document explains three different ways to replace the 4th letter in the string **"Abracadabra"** with **"X"** in JavaScript.

---

## 1. Using `slice()`
### **Description**
- This method extracts parts of the string before and after the 4th letter.
- It then concatenates them with the replacement character.

### **Code Example**
```javascript
function replaceWithSlice(str) {
    return str.slice(0, 3) + "X" + str.slice(4);
}
console.log(replaceWithSlice("Abracadabra")); // "AbrXcadabra"
```

---

## 2. Using `split()`, modifying the array, and `join()`
### **Description**
- This method converts the string into an array of characters.
- It modifies the specific index and then joins the array back into a string.

### **Code Example**
```javascript
function replaceWithSplitJoin(str) {
    let strArray = str.split(""); // Convert string to array
    strArray[3] = "X"; // Change the 4th letter (index 3)
    return strArray.join(""); // Convert array back to string
}
console.log(replaceWithSplitJoin("Abracadabra")); // "AbrXcadabra"
```

---

## 3. Using `substring()` and Template Literals
### **Description**
- This method extracts the beginning and end of the string separately.
- It reconstructs the string using template literals with the replacement character.

### **Code Example**
```javascript
function replaceWithSubstring(str) {
    return `${str.substring(0, 3)}X${str.substring(4)}`;
}
console.log(replaceWithSubstring("Abracadabra")); // "AbrXcadabra"
```

---

## **Comparison Table**
| Method | Description | Modifies Original String? |
|--------|-------------|----------------------|
| **`slice()`** | Uses slicing to extract parts and replace the letter | No |
| **`split() + join()`** | Converts to an array, modifies it, then rejoins | No |
| **`substring()` with template literals** | Extracts parts using `substring()` and reconstructs | No |

---

## **Conclusion**
- Use **`slice()`** if you prefer working with substrings.
- Use **`split() + join()`** if you need more flexibility with character modifications.
- Use **`substring()`** with template literals for a clean and modern approach.
