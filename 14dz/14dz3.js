document.getElementById("zd5").addEventListener("click", executeTask5);

function executeTask5(){
    alert('завдання п\'ять');
    let chislo = prompt("введіть  тризначне число");
    if(chislo.length!=3){
        alert("введіть  тризначне число");
    }
    else{
       if(chislo[0]==chislo[1] || chislo[1]==chislo[2] || chislo[0]==chislo[2]){
           alert("є співпадаючі цифри");
       } 
       else{
           alert("немає співпадаючих цифр");
       }
     }
}






