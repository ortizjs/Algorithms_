'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the braces function below.
function braces(values) {
    let results = values.map(isValid);
    return results;
}

function isValid(str) {
    let hash = { '(': ')', '[': ']', '{': '}' };
    let openLeft = [];
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        console.log(currentChar)
        if (hash[currentChar] !== undefined) {
            openLeft.push(currentChar);
        } else {
            let currOpen = openLeft.pop();
            if (hash[currOpen] !== currentChar) {
                return "NO";
            }
        }
    }
    if (openLeft.length !== 0) {
        return "NO"
    }
    return "YES"
}
function main() {