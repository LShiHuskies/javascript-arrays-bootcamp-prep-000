var chocolateBars = ["snickers",
                     "hundred grand",
                     "kitkat",
                     "skittles"]
function addElementToBeginningOfArray ([1], 'foo') {
return 'foo' + [1]
}
                     function addElementToEndOfArray (array, element) {
                       var cats = ["Milo", "Garfield"]
                       return [cats, "Felix"]
                     }
                     function destructivelyAddElementToBeginningOfArray (array, element) {
                       var cats = ["Milo", "Garfield"]
                       return cats.unshift("Felix")
                     }
                     function destructivelyAddElementToEndOfArray (array, element) {
                       var superheroines = ["catwoman", "she-hulk", "mystique"]
                       return superheroines.push("wonder woman")
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
