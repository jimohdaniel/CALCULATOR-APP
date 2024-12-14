let input = document.getElementById('inputstyle');
let buttons = document.querySelectorAll("button");
let resultbtn = document.getElementById("btn=");

let string = "";
let arr = Array.from(buttons);




arr.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.innerHTML == '=') {
            if (string.includes("X")){
                let arrstr = string.split('');
                console.log(arrstr)
                arrstr.forEach((element, index) =>{
                      if(element === 'X'){
                        arrstr[index]= '*'
                      }
                });
                string = arrstr.join("");              
            }

        }  
         if (e.target.innerHTML == '=') {
              if (string.includes("÷") ) {
                let myarr = string.split(""); 
                console.log(myarr)  
                 myarr.forEach((element, index) =>{
                    if (element === '÷') {
                        myarr[index] = "/"
                    }
                 });
                 string = myarr.join("");
                
              }
              try {
                string = eval(string);  
                input.value = string;  
            } catch (err) {
                input.value = "Error";  
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DE') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
}); 




    

   
 


















    
    
    
    
    
    
 

  