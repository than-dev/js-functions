Array.prototype.find = find 

/**
 * @param {Function} callback
 * @param {any | undefined} thisArg
 */
function find(callback, thisArg = undefined) {
    if (typeof callback !== 'function') {
		throw new Error(`Second param must be a function but received ${typeof callback}`)
	}
	
    const array = this
    let itemToReturn;


    for (let i = 0; i < array.length; i++) {
        const callbackIsTrue = callback.apply(thisArg, [array[i], i, array])

        if (callbackIsTrue) {
            itemToReturn = array[i]
            break
        }
    }
        
    return itemToReturn
}

module.exports = { find }