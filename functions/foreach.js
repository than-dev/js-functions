Array.prototype.forEach = forEach

/**
 * @param {Function} callback
 * @param {any | undefined} thisArg
 */
function forEach(callback, thisArg = undefined) {
	if (typeof callback !== 'function') {
		throw new Error(`Second param must be a function but received ${typeof callback}`)
	}
	
	const array = this

	for (let i = 0; i < array.length; i++) {
		callback.apply(thisArg, [array[i], i, array])
	}
}

module.exports = { forEach }