const element = document.getElementById("title");

(function() {
  element.textContent = '10';

  setTimeout(function() {

    element.textContent = '9';
    
    setTimeout(function() {
      
      element.textContent = '8';

      setTimeout(function() {

        element.textContent = '7';

        setTimeout(function() {

          element.textContent = '6';

          setTimeout(function() {

            element.textContent = '5';

            setTimeout(function() {

              element.textContent = '4';

              setTimeout(function() {

                element.textContent = '3';

                setTimeout(function() {
                  
                  element.textContent = '2';

                  setTimeout(function() {
                    element.textContent = '1';
                    
                    setTimeout(function() {
                      element.textContent = 'Happy Independence Day!';
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
})();






/*alternative code
const element = document.getElementById("title");

(function() {
   function countdownFrom(number, callback) {
     setTimeout(function() {
       if (number > 0) {
         element.textContent = number;
         countdownFrom(number - 1, callback);
       } else {
         callback();
       }
     }, 1000);
   }
 
   countdownFrom(10, function() {
     
     element.textContent = "Happy Independence Day";
   });
 })();
 
 */