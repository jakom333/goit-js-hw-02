const findLongestWord = function (string) {
    let arr = string.split(' ');
    let longestWord = '';
    for (let i = 0; i < arr.length; i += 1) {
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}; 

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'