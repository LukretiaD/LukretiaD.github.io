let newWindow = document.getElementById("newindow");

let mybutton = document.getElementById("myBtn");

// create references to the modal...
//var modal = document.getElementById('myModal');

 //to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');

 //the image in the modal
//var modalImg = document.getElementById("img01");

//and the caption in the modal
//var captionText = document.getElementById("caption");

var coll = document.getElementsByClassName("collapse");
var i;


//Resume opening in new tab
function windowFunction() {
window.open(href="./images/Lukretia Deacon Resume 2024.pdf");
}

function windowFunction2() {
window.open(href="../images/Lukretia Deacon Resume 2024.pdf")
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
 var img = images[i];
//  and attach our click listener for this image.
 img.onclick = function(evt) {
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }
}

var span = document.getElementsByClassName("close2")[0];

span.onclick = function() {
  modal.style.display = "none";
}



for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}