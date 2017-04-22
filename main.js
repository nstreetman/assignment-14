//NOTES/INSTRUCTIONS IN COMMENTS ARE FROM TRAVIS' AFTER HOURS WALKTHROUGH OF THIS ASSIGNMENT

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
  var value = parseInt(answerPTagWithValue.textContent);
  var multiplyValue = value * 2;
  answerPTagWithValue.innerHTML = multiplyValue;
})

//Task #3
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
  // (2) Get the pixel value of width and height of circle-red
  // (3) convert pixel value into an integer (parseInt(...))

  // PART 2 --- check to see if integer-width >= 320
  //------------------------------------------------
  //    (1) IF integer-width < 320

  //    (2a)   THEN muliply integer-width * 2
  //    (3a)        convert integer-width to  'XXpx' string
  //    (4a)        assign circle-red .style.width & .style.width  = 'XXpx' string

  //    (2b)   ELSE assign circle-red .style.width & .style.height = '40px' string
      var selectCircleEl = document.querySelector('.circle-red');
      var getPixelVal = window.getComputedStyle(selectCircleEl);
      var widthVal = parseInt(getPixelVal.width);
      var heightVal = parseInt(getPixelVal.height);
      // console.log(widthVal, heightVal)
      //console says 40 x 40
      if(widthVal < 320) {
        var bigCircleWidth = widthVal * 2;
        var bigCircleHeight = heightVal * 2;
        selectCircleEl.style.width = bigCircleWidth + "px";
        selectCircleEl.style.height = bigCircleHeight + "px";
      } else {
        selectCircleEl.style.width = "40px";
        selectCircleEl.style.height = "40px";

  }
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

    var selectAllSquares = document.querySelectorAll ('.square');
    var selectRevSquareAndAnsBox = document.querySelector ('#reverse-squares .answer-box');
    selectRevSquareAndAnsBox.innerHTML=''
      for(var i = selectAllSquares.length - 1 ; i >= 0 ; i--){
        var  reversedSquares = selectAllSquares[i];
        var  string = "<span class='" + reversedSquares.className + "'>" + reversedSquares.textContent + "</span>"
        selectRevSquareAndAnsBox.innerHTML += string
      }

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
      var selectTasks = document.querySelector ('#tasks')
      var selectAllTaskLi = document.querySelectorAll ('#tasks li')
      selectTasks.innerHTML = ''
        forEach(selectAllTaskLi, function(li, i, theArray){
          var strings = li;
          var stringContent = strings.textContent;
          var stringBackward = stringContent.split('').reverse('').join('')
          selectTasks.innerHTML += '<li>' + stringBackward + '</li>';
        })
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8 (Adventure Mode)
})
