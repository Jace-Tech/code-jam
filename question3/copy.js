const input = 100002
// 0 - 9,999,999 5,000,000

const singleDigits = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
}

const doublesInTens = {
    "11": "Eleven",
    "12": "Twelve",
    "13": "Thirteen",
    "14": "Fourteen",
    "15": "Fifteen",
    "16": "Sixteen",
    "17": "Seventeen",
    "18": "Eighteen",
    "19": "Nineteen",
}

const tens = {
    "10": "Ten",
    "20": "Twenty",
    "30": "Thirty",
    "40": "Forty",
    "50": "Fifty",
    "60": "Sixty",
    "70": "Seventy",
    "80": "Eighty",
    "90": "Ninety",
}

const convertToWord = (number) => {
    const numberArray = (+number).toLocaleString().split(",")
    const numberLenght = numberArray.length
    // console.log(numberArray);
    let word=""
    for (let i = 0; i < numberLenght; i++) {
        let element = numberArray[i];
        // console.log(numberArray);
        let semiword="";
        for (let j = element.length - 1; j >= 0; j--) {
            let char = element[j];
           semiword+= getWords(char,i,j); 
        }
        word+=semiword;
    }
    return word
}

const getWords = (num, i, j) => {

}
convertToWord(input)