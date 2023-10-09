function moreinfo(){
var element =document.getElementById("hiddenp")
if (element.style.display === 'none') {
   
    element.style.display = 'block';
} else {

    element.style.display = 'none';
}
 
}
function moreinfo2(){
    var element =document.getElementById("hiddenp2" )
    if (element.style.display === 'none') {
       
        element.style.display = 'block';
    } else {
    
        element.style.display = 'none';
    }
     
    }

    function moreinfo3(){
        var element =document.getElementById("hiddenp3")
        if (element.style.display === 'none') {
           
            element.style.display = 'block';
        } else {
        
            element.style.display = 'none';
        }
         
        }
        var panier = 0;
    function somme(price){
      
      panier += price;
        alert("Your bucket has : $" + panier);
      
    }
   