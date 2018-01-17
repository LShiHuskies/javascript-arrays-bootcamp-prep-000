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
                       array.shift(element)
                       return array
                     }
                     function accessElementInArray (array, index) {
                       var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"]
                       console.log(entrepreneurs[2])
                       return "Arianna Huffington"
                     }
                     function destructivelyRemoveElementFromBeginningOfArray (array) {
                       const days = ["Monday", "Tuesday", "Wednesday"]
                       return days.unshift()
                     }
                     function removeElementFromBeginningOfArray (array) {
                       var cats = ["Milo", "Garfield", "Otis"]
                       cats.slice(1)
                       return cats
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
