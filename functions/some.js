Array.prototype.some = some 

/**
 * @param {Function} callback
 * @param {any | undefined} thisArg
 */
function some(callback, thisArg = undefined) {
    if (typeof callback !== 'function') {
		throw new Error(`Second param must be a function but received ${typeof callback}`)
	}
	
    const array = this
    let itemToReturn;
        
    array.forEach((currentIterator, currentPosition) => {
        const callbackIsTrue = callback.apply(thisArg, [currentIterator, currentPosition, array])

        if (callbackIsTrue) {
            itemToReturn = currentIterator
        } 
    });

    return itemToReturn ? true : false
}


module.exports = { some }