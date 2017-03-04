var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest

})

document.querySelector("#color-circle button").addEventListener('click',function(){
  var circleEl = document.querySelector (".circle-bw");
  var circleEl = document.querySelector('#circle-bw')
console.log(circleEl)


var circleStyles = window.getComputedStyle(circleEl)

        if(circleStyles.backgroundColor === 'rgb(0, 0, 0)'){
          circleEl.style.background  = "#fff"
        } else {
          circleEl.style.background  = "rgb(0, 0, 0)"
        }

// (1) Select the Element
 // (2) See if the background-color is WHITE
 //      (must READ the style values for the dom element )
 // (3) If true : change background-color to black

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  //

  // PART 1 --- get current integer value of .circle-red
  //------------------------------------------------

  // (1) select Circle Elment (circle-red)
  // (2) Get the pixel string value of width and height of circle-red
  // (3) convert pixel string value into an integer (parseInt(...))

  // PART 2 --- check to see if integer-width >= 320
  //------------------------------------------------
  //    (1) IF integer-width < 320

  //    (2a)   THEN muliply integer-width * 2
  //    (3a)        convert integer-width to  'XXpx' string
  //    (4a)        assign circle-red .style.width & .style.width  = 'XXpx' string

  //    (2b)   ELSE assign circle-red .style.width & .style.height = '40px' string

})

document.querySelector("#remove button").addEventListener('click',function(){

  var userListEls = document.querySelectorAll('#user-list li')
  userListContainerEl = document.querySelector('#user-list')
  var largeHtmlStr = ''
  // forEach (userListEls, function(domElement, index, theArray){
  //   if(domElement.className === 'active'){
  //     console.log(domElement)
  //     largeHtmlStr += '<li class="active">active user</li>'
  //   }
  // })
  // userListContainerEl.innerHTML = largeHtmlStr
  forEach (userListEls, function (domElement, index, theArray) {
    if (domElement.className.indexOf('inactive')>= 0){
      userListContainerEl.removeChild(domElement)
    }
  })


})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  // (1) seleect all elements that are have class of .square w/ document.querySelectorAll()

  // OPTIMAL
 // (2) iterate over elements backwards ... for ( var i = allSquares.length - 1 ; i >= 0 ; i-- )
  // (3) select #reverse-squares .answer-box and .appendChild( squareDomElement  )

 /// ALTERNATEIVE
 //  (2) create an empty array called reverseOrderSquaresList
///  (3) iterate over elements and .unshif() each element to the beginning of reverseOrderSquaresList
 //  (4) clear the #reverse-squares .answer-box  (.innerHTML = '')
//   (5) iterate over reverseOrderSquaresList
//   (6) inside loop, you will add element to reverse-squares .answer-box with .appendChild( squareDomElement )
//

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

    //  (1) select all the #tasks li elements w/ .querySelectorAll(...)
    //  (2) loop over each li DOM element
   //   (3) inside of for-loop, store the value of the reversed string into a variable
   //        - to reverse the string,
   //           (i) split the string into an array of single characters,
  //            (ii) reverse the array
   //           (iii) join the now-reversed array back to a string

    //  (3) inside of for-loop set DOMElement.innerHTML to the variable containing reversed string
    //
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
