// write a function that accept a string as parameter and counts the numbers of vowel within the string
// a e i o u
//indexOf()

function vowelCount(str){
    let count = 0;
    const vowel = 'aeiou'
    console.log(str.length);
    
    for (let index = 0;  index < str.length; index++){
        const currentLetter = str[index]
        console.log(str[index]);
        if (vowel.indexOf(currentLetter) !== -1){
            count++;
        }
    }
    return count;
     
}
console.log(vowelCount('brown apple'));

