# Group Name Checker

This JavaScript function checks if a specific name is part of a group list. The group list is expected to be a comma-separated string of names.

## Author Name

### Massimo Musso

## Function Description

The `group` function takes in two parameters:
- `name` (a string): The name to check for.
- `groupList` (a string): A comma-separated string containing a list of names.

It returns `true` if the given name is found in the group list, and `false` otherwise.

## Example Usage

```javascript
let groupNames = "Alice, Bob, Charlie, Dave";

// Check if "Bob" is in the group list
console.log(group("Bob", groupNames)); // true

// Check if "Eve" is in the group list
console.log(group("Eve", groupNames)); // false
