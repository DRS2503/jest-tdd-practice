export function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(word){
    let reverse = '';
    for(let i = word.length - 1; i >= 0; i--){
        reverse += word.charAt(i);
    }
    return reverse
}

export const calculator = {
    add(x, y) {
        return x + y;
    },

    subtract(x, y){
        return x - y;
    },

    multiply(x, y){
        return x * y;
    },

    divide(x, y){
        return x / y;
    }
}

export function cipher(s, num){
    let cipherText = '';
    console.log('ciphertext:', cipherText);
    //lower 141 172
    //upper 65 99
    //charCodeAt();
    //String.fromCharCode();
    for(let letter of s){
        console.log(letter);
        let cipherLetter = letter;
        if(/[A-Za-z]/.test(letter)){
            console.log("past first condition");
            if(/[A-Z]/.test(letter)){
                console.log("uppercase");
                let difference = letter.charCodeAt(0) - 65 + num;
                let module = difference % 26 + 65;
                cipherLetter = String.fromCharCode(module);
            }
            else{
                console.log("Lower case condition");
                let difference = letter.charCodeAt(0) - 97 + num;
                console.log(difference);
                let module = difference % 26 + 97;
                console.log(module);
                cipherLetter = String.fromCharCode(module);
            }
        }
        cipherText += cipherLetter;
        console.log('');
    }

    return cipherText
}

export function analyzeArray(a){
    let average = 0;
    let min;
    let max; 
    let length = a.length;

    a.forEach(num => {
        average += num;
        if(num < min || min == undefined){
            min = num;
        }
        if(num > max || max == undefined){
            max = num;
        }
    })
    average /= length;

    return { average, min, max, length };  
}

const result = cipher('xyz', 3);
console.log(result);