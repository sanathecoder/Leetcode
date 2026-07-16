/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // primitive value
    if( obj === null || typeof obj !== "object"){
        return obj
    }

    // Array
   if(Array.isArray(obj)){
    let result = []
    for(let item of obj){
        const value = compactObject(item)
        if(Boolean(value)){
            result.push(value)
        }
    }
    return result
   }

   // object

   const result = {}
   for(let key in obj){
    const value = compactObject(obj[key])
    if(Boolean(value)){
        result[key] = value
    }
   }
   return result


};