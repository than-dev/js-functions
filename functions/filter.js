Array.prototype.filter = filter 

/**
 * @param {Function} callback
 * @param {any | undefined} thisArg
 */
function filter(callback, thisArg = undefined) {
    if (typeof callback !== 'function') {
		throw new Error(`Second param must be a function but received ${typeof callback}`)
	}
	
    const array = this
    let newArray = []

    array.forEach((currentIterator, currentPosition) => {
        const callbackIsTrue = callback.apply(thisArg, [currentIterator, currentPosition, array])

        if (callbackIsTrue) {
            newArray.push(currentIterator)
        } 
    });
    
    return newArray
}


module.exports = { filter }