const input = 92098
// 0 - 9,999,999

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

    console.log({numberArray})
    let word = ""

    if(numberLenght == 3) {

    }
    else if(numberLenght == 2) {
        word = returnWordsInThousands(numberArray)
    }
    else {
        word = returnWordsInHundreds(numberArray)
    }

    return word
}   

const returnWordsInThousands = (arr) => {
    const thousandsArray = arr[0].split('')
    const HundredArray = arr[1]

    let output = ""
    const wordsInHundred = returnWordsInHundreds([HundredArray])

    if(thousandsArray.length == 3) {

    }
    else if (thousandsArray.length == 2) {
        if(thousandsArray[0] != 0 && thousandsArray[1] != 0) {
            output = doublesInTens[thousandsArray.slice(0).join("")] ? doublesInTens[thousandsArray.slice(0).join("")] : (() => {
                let prefix = Object.entries(tens).find(num => num[0].includes(thousandsArray[0]))[1]
                let suffix = singleDigits[thousandsArray[thousandsArray.length - 1]]
                return `${prefix} ${suffix}`
            })() + " Thousand"
        }
    }
    else {
        output = singleDigits[thousandsArray[0]] + " Thousand"
    }

    return `${output} ${wordsInHundred}`
}

const returnWordsInHundreds = (arr = []) => {
    const number = ("" + arr[0]).split("")
    const numberLenght = number.length
    let word = ""

    if(number.every(char => char == 0)) return "Zero";

    if(numberLenght == 3) {
        if(number[0] != 0 && number[1] != 0 && number[2] != 0) {
            const first = singleDigits[number[0]] + " Hundred and"
            const secondNum = doublesInTens[number.slice(1).join("")] ? doublesInTens[number.slice(1).join("")] : (() => {
                let prefix = Object.entries(tens).find(num => num[0].includes(number[1]))[1]
                let suffix = singleDigits[number[number.length - 1]]
                return `${prefix} ${suffix}`
            })()
            word = `${first} ${secondNum}`
        }
        else if(number[0] != 0 && number[1] != 0 && number[2] == 0) {
            const first = singleDigits[number[0]] + " Hundred and"
            const secondNum = tens[number.slice(1).join("")]
            word = `${first} ${secondNum}`
        }
        else if(number[0] != 0 && number[1] == 0 && number[2] != 0) {
            const first = singleDigits[number[0]] + " Hundred and"
            const secondNum = singleDigits[number[2]]
            word = `${first} ${secondNum}`
        }
        else {
            const numWord = doublesInTens[number.slice(1).join("")] ? doublesInTens[number.slice(1).join("")] : (() => {
                let prefix = Object.entries(tens).find(num => num[0].includes(number[1]))[1]
                let suffix = singleDigits[number[number.length - 1]]
                return `${prefix} ${suffix}`
            })()

            word = numWord
        }
    }
 
    else if(numberLenght == 2) {
        if(number[0] == 0 && number[1] != 0) {
            word = `${singleDigits[number[number.length - 1]]}`
        }
        else if((number[0] != 1 && number[0] != 0) && number[number.length - 1] != 0) {
            const firstNum = Object.entries(tens).find(item => item[0].includes(number[0]))[1]
            const secondNum = singleDigits[number[1]] ?? ""

            word = `${firstNum} ${secondNum}`
        }
        else {
            const numInWord = doublesInTens[number.join("")] ?? tens[number.join("")]
            word = `${numInWord}`
        }
    } 

    else {
        word = singleDigits[number[0]]
    }
    return word
}
console.log(convertToWord(input))
// convertToWord(input)