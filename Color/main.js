(function(){
    window.addEventListener("load", function() {
       var arrows = document.querySelectorAll(".right, .left"); 
       var mousedown = function(event) {
          event.preventDefault();
          var valueElement = event.target.parentElement.querySelector(".show");
          var value = Number(valueElement.innerText);
          if(event.target.className === "right") {
              value++;              
          } else {
              value--;
          }
          valueElement.innerText = value; 
          update();
       };
       var index;
       for(index=0; index<arrows.length; index++) {
           arrows.item(index).addEventListener("mousedown", mousedown); 
       }
       var update = function() {
          var red = Number(document.querySelector("#red .show").innerText);    
          var green = Number(document.querySelector("#green .show").innerText);    
          var blue = Number(document.querySelector("#blue .show").innerText);  
          var resultElement = document.querySelector("#result .show");
          var color = red*256*256+green*256+blue;
          resultElement.innerText = color;
          resultElement.style.backgroundColor = "#"+color.toString(16);  
       };
    });
}());