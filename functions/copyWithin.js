Array.prototype.copyWithin = copyWithin

/**
 * @param {number} target // is where it will be trade by copied value
 * @param {number} start // position that will start to copy items
 * @param {number | undefined } end // position that will end to copy items
 */
function copyWithin(target, start = 0, end = this.length) {
    if (target > this.length - 1 || this.length - target < 0) {
        throw new Error('Target value is invalid')
    }
    
    const array = this
    let copiedValues = []

    // Test Passed ><><><><
    if (start >= 0 && end >= 0) {
        if (start === end) return array
        
        if (start > end) {
             for (let i = end + 1; i <= start; i++) {
                copiedValues.push(array[i])
            }
        }

        if (start < end) {
            for (let i = start; i < end; i++) {
                copiedValues.push(array[i])
            }
        }
    }

    if (start < 0 && end < 0) {
        if (start === end) return array
        
        if (start > end) {
            for (let i = array.length + end; i < array.length + start; i++) {
                copiedValues.push(array[i])
            } 
        }
        
        if (start < end) {
            for (let i = array.length + start; i <=  array.length + end - 1; i++) {
                copiedValues.push(array[i])
            }
        }
    }

    if (start < 0 && end >= 0) {
        if (end >= array.length || array.length + start < 0) return array
        if (array.length + start === end) return array

        if (array.length + start > end) {
            for (let i = end + 1; i <= array.length + start; i++) {
                copiedValues.push(array[i])
            }
        }

        if (array.length + start < end) {
            for (let i = array.length + start; i <= end - 1; i++) {
                copiedValues.push(array[i])
            }
        }
    }
    
    if (start >= 0 && end < 0) {
        if (start >= array.length || array.length + end < 0) return array
        if (array.length + end === start) return array
        
        if (array.length + end === start) {
            copiedValues.push(array[start])
        }

        if (array.length + end > start) {
            for (let i = start; i < array.length + end; i++) {
                copiedValues.push(array[i])
            }
        }

        if (array.length + end < start) {
            for (let i = array.length + end + 1; i <= start; i++) {
                copiedValues.push(array[i])
            }
        }
    }

    if (target === 0) {
        let counter = copiedValues.length

        while(counter > 0) {
            counter--
            array.shift()
        }
        for (let i = copiedValues.length - 1; i > -1; i--) {
            array.unshift(copiedValues[i])
        }

        return array
    }

    if (target === array.length - 1 || target === -1) {
        array.pop()
        array.push(copiedValues[0])

        return array
    }

    if (target !== 0 && array.length + target >= 0 && target !== array.length - 1 && target !== -1) {
        if (target < 0) {
            let targetPosition = array.length

            while (target < 0) {
                target++
                targetPosition--
            }
            
            const removedItems = array.splice(targetPosition, copiedValues.length)

            if (array.length + removedItems.length - targetPosition > copiedValues.length) {
                let itemsToInsert = [];
                copiedValues.forEach(el => {
                    if (itemsToInsert.length === removedItems.length) return
                    itemsToInsert.push(el)
                })
                array.splice(targetPosition, undefined, ...itemsToInsert)
            }

            if (array.length + removedItems.length - targetPosition < copiedValues.length) {
                while (array.length + removedItems.length - targetPosition < copiedValues.length) {
                    copiedValues.pop()
                }
                array.splice(targetPosition, undefined, ...copiedValues)
            }
        }

        if (target > 0) {
            const removedItems = array.splice(target, copiedValues.length)
            
            if (array.length + removedItems.length + target > copiedValues.length) {
                let itemsToInsert = [];
                copiedValues.forEach(el => {
                    if (itemsToInsert.length === removedItems.length) return
                    itemsToInsert.push(el)
                })
                array.splice(target, undefined, ...itemsToInsert)
            }

            if (array.length + removedItems.length + target < copiedValues.length) {
                while (array.length + removedItems.length + target < copiedValues.length) {
                    copiedValues.pop()
                }
                array.splice(target, undefined, ...copiedValues)
            }
        }

        return array
    }
}

module.exports = { copyWithin }