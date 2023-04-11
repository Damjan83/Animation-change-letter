const textFild = document.querySelector('.text');
let charactersArray = ['&', '#', '*', '+', '%', '?', '£', '@', '§', '$', '~', '!', '>', '^', ':', '}', '-', '=', '/'];
let nameString = 'damjan pokrajac';

let character = [];
let newString = '';

function mixedLetters() {

    for(let i = 1; i <= nameString.length; i++) {

        setTimeout( function() {       
            let newCharacter = charactersArray[Math.floor(Math.random() * charactersArray.length)];
            character.push(newCharacter)         
            character.sort(() => (Math.random() - 0.5))           
            textFild.innerHTML = character.join(''); 
            
            if(i == nameString.length) {
                let textFieldString = textFild.innerText;
                let strIndex = saveCaracter();
              
                for(let j = 1; j <= textFieldString.length; j++) {
                    setTimeout( function() {  

                        if(j > 1) {
                            replaceChar(newString, strIndex[j - 1].char, strIndex[j - 1].index)
                            newString = replaceChar(newString, strIndex[j - 1].char, strIndex[j - 1].index);
                            
                        }else {
                            replaceChar(textFieldString, strIndex[j - 1].char, strIndex[j - 1].index)
                            newString = replaceChar(textFieldString, strIndex[j - 1].char, strIndex[j - 1].index);
                        }
                        textFild.innerHTML = newString;
                        
                    }, j * 100)
                }               
            }
        }, i * 100);                    
    }      
}
mixedLetters();

function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);     
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}

function saveCaracter() {
    let charPosition = [];
    for(let i = 0; i < nameString.length; i++) {
        let charObject = {
            char: nameString[i],
            index: i
        }
        charPosition.push(charObject);  
    }
    let bbbb = charPosition.sort((a, b) => 0.5 - Math.random());   
    
    return bbbb;
}

saveCaracter()


