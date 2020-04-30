


function leapYear(n){
   
        return (n % 400===0) || (n % 4 ===0)||(n % !100===0);
    }


   console.log (leapYear(2020));
   console.log (leapYear(2016));
   console.log (leapYear(2017));
      

    
     
function celsius(f){

    return ((f/5) *9 + 32);
}
 console.log(celsius(12));



function fahrenheit(c){

    return ((c-32 )* 5/9);
}
 console.log(fahrenheit(53.6))