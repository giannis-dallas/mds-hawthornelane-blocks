document.addEventListener("DOMContentLoaded", function(event) {

    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };

    const animatedFigures = Array.from(document.querySelectorAll('.effect-animate-border') );    
    //console.log(animatedFigures);

    function isElementInViewport (el) {
    
        var rect = el.getBoundingClientRect(); 

        if(
            rect.top >= 0 ||
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ){
            el.classList.add('active');
        }
    }
    
    function handleFigures(e){
        animatedFigures.forEach( figure => debounce(isElementInViewport(figure)) )        
    }

    window.addEventListener('scroll',handleFigures)
    window.addEventListener('resize',handleFigures)
    window.addEventListener('load',handleFigures)

  });

