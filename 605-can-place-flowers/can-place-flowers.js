/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0 
    for(let i = 0; i< flowerbed.length ; i++){
        let left = ( i === 0 ) || flowerbed[i - 1] === 0 
        let right = ( i === flowerbed.length - 1 ) || flowerbed[i + 1] === 0
        if( flowerbed[i] === 0 && left && right){
            flowerbed[i] = 1
            count++
        }
    }
    return count >= n
};