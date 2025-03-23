/**
 * @file main.js.
 * 
 * @author Massimo Musso
 * @description This function checks if a given name is found within a comma-separated string of group names.
 * 
 * @param {string} name - The name to check for in the group list.
 * @param {string} groupList - A string representing a list of group names (comma-separated).
 * @returns {boolean} - Returns true if the name is found in the group list, otherwise false.
 */

function group(name, groupList) {
  return groupList.includes(name);
}

// Example usage
let groupNames = "Alice, Bob, Charlie, Dave";
console.log(group("Bob", groupNames)); // true
console.log(group("Eve", groupNames)); // false
