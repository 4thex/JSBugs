(function(){
    window.addEventListener("load", function() {
        var first = document.querySelector("#first");    
        var second = document.querySelector("#second");    
        var result = document.querySelector("#result");
        var changeEventHandler = function(event) {
            var firstValue = first.value;
            var secondValue = second.value;
            result.value = firstValue + secondValue;
        };  
        first.addEventListener("input", changeEventHandler);  
        second.addEventListener("input", changeEventHandler);  
    });
}());