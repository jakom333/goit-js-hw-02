const findLongestWord = function (string) {
    let arr = string.split(' ');
    let longestWord = 0;
    let indexOfLongestWord;
    for (let i = 0; i < arr.length; i += 1) {
        if (longestWord < arr[i].length) {
            longestWord = arr[i].length;
            indexOfLongestWord = i;
        }
    }
    return arr[indexOfLongestWord];
}; 

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'