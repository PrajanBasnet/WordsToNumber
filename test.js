
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

  let userInput = "one lakh and fifty ";

    userInput = userInput.replace(/\s+/g, ' ');
    userInput = userInput.trim();
    userNewWord = userInput.split(/\s+(lakh|thousand|hundred)\s+/);

    let newNum = []
    let temp = [];

    let multi = []
    let add = 0;
    let mulAdd = 0;
    console.log(userNewWord)


  for(let x of userNewWord){
   
    if(!test[x] &&  !zentNumb[x]){
        let splitValue = x.split(' ')
        console.log(splitValue)
        
        for(z of splitValue){
            if(test[z]){
                add += test[z]
            }
            if(zentNumb[z]){
                mulAdd += zentNumb[z]
            }
        }
        newNum.push([add]);
        if(mulAdd == 0){
            multi.push([1]);

        }
            multi.push([mulAdd]);

        console.log("multi:adding: ",mulAdd)
    }
    
    if(test[x]){
        temp.push(test[x]);
        newNum.push(temp);
        temp = [];
    }if(zentNumb[x]){
        multi.push([zentNumb[x]]);
    }
  }

  for (let i = 0; i < newNum.length; i++) {
      if(multi.length == newNum.length){
          break;
        }
        multi.push(1);
    }
    let semFinalResult = newNum.map((data) => data.reduce((a,b) => a+b ,0));
    let final = semFinalResult.map((data,i) => data * multi[i])
    let f = final.reduce((a,b)=> a+b);

 console.log(newNum,multi)

 console.log("semifinal", semFinalResult)
 console.log(final)

 console.log(f)