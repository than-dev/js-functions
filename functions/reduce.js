Array.prototype.reduce = reduce

/**
 * @param {Function} callback
 * @param {any | undefined} initialValue
 */
function reduce(callback, initialValue = undefined) {
    if (typeof callback !== 'function') {
		throw new Error(`Second param must be a function but received ${typeof callback}`)
	}
	
    const array = this
    let accumulator = initialValue ? initialValue : array[0] 

	for (let i = 0; i < array.length; i++) {
		const newAccumulator = callback(accumulator, array[i], i, array)

        accumulator = newAccumulator
    }
    
    return accumulator
}


module.exports = { reduce }