document.getElementById("zd2").addEventListener("click", executeTask2);

function executeTask2(){
    alert('завдання два');
    let grivna = +prompt("кіко маёш українських грошів?");
    if(!grivna){
        alert("вводь полюдськи)");
    } else {
        let valuta = prompt("Доляри? Єври? Доски?");

        if(valuta=="Доляри"){
            alert(`Твої гроші: ${grivna/27} долярів`);
        } else if(valuta=="Єври"){
            alert(`Твої гроші: ${grivna/30} єврів`);
        } else if(valuta=="Доски"){
            alert(`Твої гроші: ${grivna/0.5} шашлі згризли`);
        } else {
           alert("неук ти"); 
        }
    }
}
