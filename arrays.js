var chocolateBars = ["snickers",
                     "hundred grand",
                     "kitkat",
                     "skittles"]
function addElementToBeginningOfArray (array, element) {
var newarray = [element, ...array]
return newarray
}
                     function addElementToEndOfArray (array, element) {
                       var newarray = [...array, element]
                       return newarray
                     }
                     function destructivelyAddElementToBeginningOfArray (array, element) {
                     array.unshift(element)
                     return array
                     }
                     function destructivelyAddElementToEndOfArray (array, element) {
                       array.push(element)
                       return array
                     }
                     function accessElementInArray (array, index) {
                       console.log(array[index])
                       return array[index]
                     }
                     function destructivelyRemoveElementFromBeginningOfArray (array) {
                       array.shift()
                       return array
                     }
                     function removeElementFromBeginningOfArray (array) {
                       array.slice(1)
                       return array
                     }
                     function destructivelyRemoveElementFromEndOfArray(array) {
                       var iceCreams = ["chocolate", "vanilla", "raspberry"]
                       return iceCreams- iceCreams.pop
                     }
                     function removeElementFromEndOfArray (array) {
                       var iceCreams = ["chocolate", "vanilla", "raspberry"]
                       return iceCreams.slice(0,iceCreams.length - 1)
                     }
                     function removeElementFromEndOfArray (array) {
                       var iceCreams = ["chocolate", "vanilla", "raspberry"]
                       iceCreams.pop
                       return iceCreams
                     }
