const textbox=document.getElementById("textbox");
const toferranti=document.getElementById("toferranti");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;
 function convert(){
    if(toferranti.checked){
  temp=Number(textbox.value);
  temp=9/5*temp+32;
  result.textContent= temp.toFixed(1)+ "°F";
  }
    else if(toCelsius.checked){
        temp=Number(textbox.value);
        temp=(5/9)*(temp-32);
        result.textContent=temp.toFixed(1)+"°C" ;

    }
    else{
        result.textContent="Select a Unit";
    }
 }
