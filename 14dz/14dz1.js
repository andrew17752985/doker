

let executeTask3 = () => {
    alert('завдання три');
   let sumaZamowlennia =  +prompt("скіки потратив?");
   if(sumaZamowlennia <= 500){
        alert(`Ваша сума:  ${sumaZamowlennia}грн\nВаша знижка (1%): ${sumaZamowlennia*0.01}грн\nСума до оплати: ${sumaZamowlennia-sumaZamowlennia*0.01}грн`);  
   }
   else if(sumaZamowlennia > 500 && sumaZamowlennia <= 1000){
    alert(`Ваша сума:  ${sumaZamowlennia}грн\nВаша знижка (5%): ${sumaZamowlennia*0.05}грн\nСума до оплати: ${sumaZamowlennia-sumaZamowlennia*0.05}грн`);  
   }
   else{
    alert(`Ваша сума:  ${sumaZamowlennia}грн\nВаша знижка (10%): ${sumaZamowlennia*0.1}грн\nСума до оплати: ${sumaZamowlennia-sumaZamowlennia*0.1}грн\nна тобі ше леську`);  
   }
}

document.getElementById("zd3").addEventListener("click", executeTask3);