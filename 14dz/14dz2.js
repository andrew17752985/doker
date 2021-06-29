document.getElementById("zd4").addEventListener("click", executeTask4);

const tests = [
    {
        prompt:'2+2',
        answer:'4'
    },
    {
        prompt:'1+1',
        answer:'2'
    }, {
        prompt:'2+1',
        answer:'3'
    }, {
        prompt:'2+5',
        answer:'7'
    }, {
        prompt:'2+9',
        answer:'11'
    },
];

let score = 0;



function executeTask4(){
    alert('завдання чотири');
    for (let i=0; i<tests.length; i++){
        let result = prompt(tests[i].prompt);
        if(result==tests[i].answer){
            score = score +1;
        }
    }
    alert(`ви відповіли на ${score} балів `);
    
   
}