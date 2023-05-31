var dataFromCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
// span will append number of products       
var NumberofItems = dataFromCart.length;
document.querySelector("#Items").innerHTML = NumberofItems;
//  span grand total
var GT = localStorage.getItem("cartvalue");
console.log(GT);
document.querySelector("#Grand_total").innerHTML = "₹ " + GT;

document.querySelector("#credit").addEventListener("click", showcredit);
    document.querySelector("#cash").addEventListener("click", showcash);
    

    function showcredit(){
        document.querySelector("#display_Add").textContent = "";

       var div = document.createElement("div");   
       div.setAttribute("id", "credit_D");
       div.style.height = "180px";
       div.style.width = "296px";
       div.style.padding = "1px";
       div.style.backgroundColor = "white";
       div.style.marginLeft= " 40px"
       div.style.borderRadius= "6px"

        //creating h4 tag
       var h4 =document.createElement("h4");        
       h4.setAttribute("id", "credit_h4");
       h4.textContent = " Card Details";
       h4.style.fontSize = "15px";
       h4.style.marginTop = "7px";
       h4.style.marginLeft= "90px";

    //-------------------------------------------------------------creating input for card number taG-----------------------------------------------------------------------------------------------------------
       var card_Number = document.createElement("input");        
       card_Number.setAttribute("id", "credit_card_number");
       card_Number.setAttribute("placeholder", "Card Number");
       card_Number.style.backgroundColor = "rgb(243, 244, 245)";
       card_Number.style.border = "rgb(243, 244, 245)";
       card_Number.style.padding = "7px";
       card_Number.style.marginLeft = "7px";
       card_Number.style.marginBottom = "2px";
       
      

       var div2 = document.createElement("div");
       div2.setAttribute("id", "credit_ex_&_cvv");
       div2.style.marginBottom = "28px"

    //----------------------------------------------------------creating input for card Expiry tag--------------------------------------------------------------------------------------------------------------------
       var card_ex = document.createElement("input");       
       card_ex.setAttribute("id", "credit_card_ex");
       card_ex.setAttribute("placeholder", "Expiry(MM/YY)");
       card_ex.style.backgroundColor = "rgb(243, 244, 245)";
       card_ex.style.border = "rgb(243, 244, 245)";
       card_ex.style.padding = "7px";
       card_ex.style.margin = "5px";
      
    //----------------------------------------------------------creating input for card cvv tag-------------------------------------------------------------------------------------------------------- 
       var card_cvv = document.createElement("input");      
       card_cvv.setAttribute("id", "credit_card_cvv");
       card_cvv.setAttribute("placeholder", "CVV");
       card_cvv.style.backgroundColor = "rgb(243, 244, 245)";
       card_cvv.style.border = "rgb(243, 244, 245)";
       card_cvv.style.width = "50px";
       card_cvv.style.margin = "5px";
      
       
        //-------------------------------------------------------creating button with anchor tag--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       var card_button = document.createElement("a");           
       card_button.setAttribute("id", "credit_card_button");
       card_button.textContent ="Confirm Order";
       card_button.setAttribute("href", "done.html");    
       card_button.style.backgroundColor = "black";
       card_button.style.textDecoration = "none";
       card_button.style.padding = "9px";   
       card_button.style.color = "white";
       card_button.style.textAlign = "center";
       card_button.style.borderRadius = "6px"
       card_button.style.fontSize= "13px"
       card_button.style.marginLeft = "100px";
    
      
        // appending  
        div2.append(card_ex,card_cvv);       
        div.append(h4,card_Number,div2,card_button);
        document.querySelector("#display_Add").append(div);        
    }

//=========================================================================CASH=========================================================================================================================================================================================================
    
        function showcash(){
        document.querySelector("#display_Add").textContent = "";

        var div1 = document.createElement("div");   
       div1.setAttribute("id", "credit_d");
       div1.style.height = "120px";
       div1.style.width = "296px";
       div1.style.backgroundColor = "white";
       div1.style.marginLeft= " 40px";
       div1.style.marginBottom= " 24px"
       div1.style.borderRadius= "10px"
       div1.style.paddingTop = "15px";


       // --------------------------------------------------------------creating h4 tag-------------------------------------------------------------------------------------------------------------------------------------------------------------
       var h4 =document.createElement("h4");       
       h4.setAttribute("id", "cash_h4");
       h4.textContent = "Pay At Your Door Step";
       h4.style.fontSize = "18px";
       h4.style.marginLeft = "50px";


         //-------------------------------------------------------creating button with anchor tag------------------------------------------------------------------------------------------------------------------------------------------------
        var cash_button = document.createElement("a");      
        cash_button.setAttribute("id", "credit_card_button");
        cash_button.textContent =" confirm";
        cash_button.setAttribute("href", "done.html");        
        cash_button.style.backgroundColor = "black";
        cash_button.style.textDecoration = "none";
        cash_button.style.padding = "10px";      
        cash_button.style.color = "white";
        cash_button.style.textAlign = "center";
        cash_button.style.borderRadius = "5px"
        cash_button.style.marginLeft = "110px";
        
      
        div1.append(h4,cash_button);
        document.querySelector("#display_Add").append(div1);     
    }

    var dataFromCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    var NumberofItems = localStorage.getItem("countitem")
    document.querySelector("#Items").innerHTML = NumberofItems;
