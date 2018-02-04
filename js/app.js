// js sit on chair !


document.addEventListener('DOMContentLoaded', function() {

//wyjeżdżające menu

var hiddenMenu = document.querySelector('.open');
// console.log(hiddenMenu);

var aboutCompanyButton = document.querySelector('.aboutCompanyButton').childNodes[1];
// console.log(aboutCompanyButton);


aboutCompanyButton.addEventListener('mouseover', function(){

hiddenMenu.style.visibility = "visible";

});

aboutCompanyButton.addEventListener('mouseout', function(){

hiddenMenu.style.visibility = "hidden";

});

hiddenMenu.addEventListener("mouseover", function () {
  hiddenMenu.style.visibility = "visible";
})

hiddenMenu.addEventListener("mouseout", function () {
  hiddenMenu.style.visibility = "hidden";
})

//chowające się podpisy obrazków

var firstImg = document.querySelector('.first_img');
// console.log(firstImg);


var secondImg = document.querySelector('.second_img');
// console.log(secondImg);

var signBackFirst = document.querySelectorAll('.sign_back')[0];
// console.log(signBackFirst);

var signBackSecond = document.querySelectorAll('.sign_back')[1];
// console.log(signBackSecond);

//pierwszy obrazek

firstImg.addEventListener("mouseover", function () {
  signBackFirst.style.visibility = "hidden";
});

firstImg.addEventListener("mouseout", function () {
  signBackFirst.style.visibility = "visible";
});

//drugi obrazek

secondImg.addEventListener("mouseover", function () {
  signBackSecond.style.visibility = "hidden";
});

secondImg.addEventListener("mouseout", function () {
  signBackSecond.style.visibility = "visible";
});

// SLider

//zmienne

var nextButton = document.querySelector('.arrow_right');
// console.log(nextButton);

var prevButton = document.querySelector('.arrow_left');
// console.log(prevButton);

var listOfImg = document.querySelectorAll('.black_armchair li');
console.log(listOfImg);

  var index = 0;

  var visiblePicture = listOfImg[0];


  visiblePicture.className = 'visible';

  nextButton.addEventListener('click', function() {
    if (visiblePicture.className === 'visible') {
      visiblePicture.classList.remove('visible');
    }
    index++
    if (index >= listOfImg.length) {
      index = listOfImg.length - 1;
    }
    visiblePicture = listOfImg[index];
    visiblePicture.className = 'visible'
  })
  prevButton.addEventListener('click', function() {
    if (visiblePicture.className === 'visible') {
      visiblePicture.classList.remove('visible');
    }
    index--
    if (index < 0) {
      index = 0;
    }
    visiblePicture = listOfImg[index];
    visiblePicture.className = 'visible'
  })


});
