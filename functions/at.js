Array.prototype.at = at

/**
 * @param {number} index
 */
function at(index) {
    if (typeof index !== 'number') {
        throw new Error(`param need to be a number but receive a ${typeof index }`)
    }
    
    const array = this
    
    if (index > 0) {
        return array[index]
    } else {
        let handleArrayPosition = 0;
        
        for (let i = array.length - 1; i > -1; i--) {
            handleArrayPosition--

            if (handleArrayPosition == index) {
                return array[i]
            }
        }
    }
}

module.exports = { at }