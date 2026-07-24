/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let arr = s.split('')

    function isVowel(ch){
        return "aeiouAEIOU".includes(ch)
    }

    let left = 0
    let right = s.length-1
    while(left<right){
        while(left<right && !isVowel(arr[left])){
            left++
        }
        while(left<right && !isVowel(arr[right])){
            right--
        }
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--

    }
    return arr.join('')
};