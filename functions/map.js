Array.prototype.map = map

/**
 * @param {Function} callback
 * @param {any | undefined} thisArg
 */
function map(callback, thisArg = undefined) {
	if (typeof callback !== 'function') {
		throw new Error(`Second param must be a function but received ${typeof callback}`)
	}

	const array = this
	let newArray = []

	for (let i = 0; i < array.length; i++) {
		const newElement = callback.apply(thisArg, [array[i], i, array])

		newArray.push(newElement)
	}

	return newArray
}



['oi', 'oi', 'oi'].map((element, elementPosition, array) => console.log({
	element,
	elementPosition,
	array
}))

module.exports = { map }