(function(){
    window.addEventListener("load", function() {
        var add = document.querySelector(".add");
        var remove = document.querySelector(".remove");
        var addHandler = function(event) {
           var form = document.querySelector("form");
           var clone = form.cloneNode(true);
           var input = clone.querySelector(".input");
           input.firstElementChild.value = "";
           input.style.display = "block";
           add.style.display = "none";
           add = clone.querySelector(".add");
           add.style.display = "block";
           add.addEventListener("click", addHandler);
           remove = clone.querySelector(".remove");
           remove.style.display = "block";
           remove.addEventListener("click", removeHandler);
           input = clone.querySelector(".input input");
           input.addEventListener("keydown", function(event) {
              if(event.keyIdentifier === "Enter") {
                  event.preventDefault();
              } 
           });
           form.parentElement.appendChild(clone); 
        };
        var removeHandler = function(event) {
//            var parent = event.target.parentElement;
//            parent.removeChild(event.target.previousElementSibling);
//            parent.removeChild(event.target);
           event.target.previousElementSibling.style.display = "none";
           event.target.style.display = "none";
        };
        add.addEventListener("click", addHandler);
        remove.addEventListener("click", removeHandler);        
    });
}());