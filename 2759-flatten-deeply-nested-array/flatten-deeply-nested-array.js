/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   let result = []
   function helper(array,depth){
    for(let item of array){
        if(Array.isArray(item) && depth < n){
            helper(item , depth+1)
        }else{
            result.push(item)
        }
    }
   }
   helper(arr,0)
   return result
};