let convert = document.querySelector("#convert");

let test = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    
};
let zentNumb = {
    'hundred': 100,
    'thousand': 1000,
    'ten thousand': 10000,
    'lakh': 100000,
    'ten lakh': 1000000
}

convert.addEventListener("click",(e)=>{
    e.preventDefault()
    let userInput = document.querySelector("#word").value;
    let output = document.querySelector("#result");
    userInput = userInput.replace(/\s+/g, ' ');
    userInput = userInput.trim();
    userNewWord = userInput.split(' ');
     
    let result = []
    let temp = [];
    let multi = [];
    for(let x of userNewWord){
        
        if(test[x]){
            temp.push(test[x]);
            result.push(temp)
            temp = []
        }
        if(zentNumb[x]){
            multi.push(zentNumb[x])
        }
        
    }
    for (let i = 0; i < result.length; i++) {
        if(multi.length == result.length){
            break;
        }
        multi.push(1);
    }
    let semFinalResult = result.map((data) => data.reduce((a,b) => a+b ,0));
    let final = semFinalResult.map((data,i) => data * multi[i])
    let f = final.reduce((a,b)=> a+b);
    output.innerHTML =` <h1>  ${f} </h1>`;
    
})