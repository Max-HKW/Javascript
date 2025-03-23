# Not Bad Function

## Description
This JavaScript function finds occurrences of 'not' followed by 'bad' in a given sentence and replaces the entire phrase with 'good'. If 'bad' does not follow 'not', the original sentence is returned unchanged.

## Usage

### Function Signature
```js
function notBad(sentence: string): string
```

### Example Usage
```js
console.log(notBad("This movie is not that bad!"));  // Output: "This movie is good!"
console.log(notBad("The food is not bad at all."));  // Output: "The food is good at all."
console.log(notBad("This is bad, not good."));      // Output: "This is bad, not good."
```