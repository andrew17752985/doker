document.getElementById("zd6").addEventListener("click", executeTask6);

const chisla = {
    '1':'!', 
    '2':'@',
    '3':'#',
    '4':'$',
    '5':'%',
    '6':'^',
    '7':'&',
    '8':'*',
    '9':'(',
    '0':')',
    '-':'_',
    '=':'+',
}

function executeTask6(){
    alert('завдання шість');
   let sumphol = prompt('нажимай на цифри братан');
   alert(chisla[sumphol]);
   
}