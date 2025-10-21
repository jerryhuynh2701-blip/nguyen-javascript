/**
 * write a function that accepts a string as a parameter
 * and finds the longest word within the string
 */

function findLongestWord(str){
    textArray = str.split(" ")
    let longestWord;
    let longestWordLength = 0;
    for (let word of textArray){
        if (word.length > longestWordLength){
            console.log(word);
            longestWord = word;
            longestWordLength = word.length;        
        }
    }
    return longestWord === undefined ? "string is empty" : longestWord;
}

text = "";

console.log(findLongestWord(text));

