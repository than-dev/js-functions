Array.prototype.concat = concat

/**
 * @param {any[]} valuesToConcat
 */
function concat(...valuesToConcat) {
    if (!valuesToConcat[0]) {
        return this
    }

    const originalArray = this
    let newArray = [...originalArray]

    for (value of valuesToConcat) {
        if(value.length === 0) continue
        
        
        if (Array.isArray(value)) {
            for (subValue of value) {
                newArray.push(subValue)
            }
        } else {
            newArray.push(value)
        }
    }

    return newArray
}

module.exports = { concat }