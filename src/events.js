document.addEventListener("DOMContentLoaded", function(event) {

    function debounce(func, wait = 10, immediate = true) {
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

    function isElementInViewport (el,i) {
        
        const rect = el.getBoundingClientRect(); 
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        
        if( elemTop < window.innerHeight && (elemBottom <= window.innerHeight) ){
            if(!el.classList.contains('active')){
               el.classList.add('active');
            console.log( (window.scrollY+window.innerHeight) , (rect.top + el.offsetHeight), el,i, 'active'); 
            }
            
        }
    }
    
    function handleFigures(e){
        animatedFigures.forEach( (figure,i) => debounce(isElementInViewport(figure,i)) )        
    }

    window.addEventListener('scroll',handleFigures)
    window.addEventListener('resize',handleFigures)
    window.addEventListener('load',handleFigures)

  });

